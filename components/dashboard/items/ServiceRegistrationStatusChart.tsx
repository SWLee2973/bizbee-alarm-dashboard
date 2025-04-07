"use client";

import Android from "@/components/svgIcons/Android";
import IOS from "@/components/svgIcons/IOS";
import RollingNumber from "@/components/ui/RollingNumber";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "사용",
    Android: 15,
    iOS: 5,
    "Android/iOS": 5,
  },
  {
    name: "미사용",
    Android: 3,
    iOS: 7,
    "Android/iOS": 26,
  },
];

function ServiceRegistrationStatusChart() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [legendHoverKey, setLegendHoverKey] = useState<
    "iOS" | "Android" | "Android/iOS" | null
  >(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (o: any, e: React.MouseEvent) => {
    const { dataKey } = o;
    setActiveKey(dataKey);
    setLegendHoverKey(dataKey);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const tooltipZone = document.querySelector(".legend");
      if (tooltipZone && !tooltipZone.contains(e.target as Node)) {
        setLegendHoverKey(null);
        setActiveKey(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <h3 className="text-center mt-4 max-md:mt-2 font-semibold">
        서비스 등록 현황
      </h3>
      <div className="w-full h-80 max-lg:h-60 max-sm:h-40 flex justify-center md:pb-4">
        <div className="w-fit aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 15,
                right: 10,
                left: -20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Legend
                content={({ payload }) => (
                  <ul className="legend m-0 text-center flex flex-row items-center justify-center max-md:ps-2 max-md:h-11">
                    {payload?.map((item: any) => (
                      <li
                        key={item.dataKey}
                        onMouseOver={(e) => handleMouseEnter(item, e)}
                        className="mr-2.5 flex flex-row items-center max-md:flex-col gap-1 max-md:justify-between max-md:h-full"
                      >
                        <svg
                          className="inline-block align-middle"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="none"
                            fill={item.color}
                            d="M0,4h32v24h-32z"
                          />
                        </svg>
                        {dataKeyIcon[item.dataKey as keyof typeof dataKeyIcon]}
                      </li>
                    ))}
                  </ul>
                )}
                wrapperStyle={{ left: 10 }}
              />
              <Bar
                dataKey="iOS"
                stackId="a"
                fill="#8884d8"
                shape={(props: any) => (
                  <CustomBarShape
                    dataKey="iOS"
                    activeKey={activeKey}
                    {...props}
                  />
                )}
              />
              <Bar
                dataKey="Android"
                stackId="a"
                fill="#82ca9d"
                shape={(props: any) => (
                  <CustomBarShape
                    dataKey="Android"
                    activeKey={activeKey}
                    {...props}
                  />
                )}
              />
              <Bar
                dataKey="Android/iOS"
                stackId="a"
                fill="#fe288b"
                shape={(props: any) => (
                  <CustomBarShape
                    dataKey="Android/iOS"
                    activeKey={activeKey}
                    {...props}
                  />
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {legendHoverKey && (
        <LegendTooltip dataKey={legendHoverKey} mousePos={mousePos} />
      )}
    </section>
  );
}

export default ServiceRegistrationStatusChart;

const CustomBarShape = ({
  x,
  y,
  width,
  height,
  fill,
  payload,
  dataKey,
  activeKey,
}: any) => {
  const isActive = !activeKey || activeKey === dataKey;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      className={clsx("transition-opacity duration-300 ease-in-out", {
        "opacity-100": isActive,
        "opacity-30": !isActive,
      })}
    />
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const totalCount = useMemo(
      () => payload.reduce((acc: number, item: any) => acc + item.value, 0),
      [payload]
    );

    return (
      <div className="bg-base-300 p-2 rounded-md">
        <strong className="text-lg text-base-content">
          총계: <RollingNumber value={totalCount} />
        </strong>
        {payload.map((item: any) => (
          <span
            key={item.name}
            className="text-md text-base-content flex flex-row items-center"
          >
            {dataKeyIcon[item.name as keyof typeof dataKeyIcon]}:{" "}
            <RollingNumber value={item.value} />
          </span>
        ))}
      </div>
    );
  }

  return null;
};

const LegendTooltip = ({
  dataKey,
  mousePos,
}: {
  dataKey: "iOS" | "Android" | "Android/iOS";
  mousePos: { x: number; y: number };
}) => {
  if (mousePos.x === 0 && mousePos.y === 0) return null;

  return (
    <div
      className="fixed pointer-events-none bg-base-300 text-sm text-base-content p-2 rounded-md shadow-md z-50"
      style={{
        top: mousePos.y - 100,
        left: mousePos.x - 12,
      }}
    >
      <p className="font-semibold">{dataKeyIcon[dataKey]}</p>
      <p>
        {data[0].name}: <RollingNumber value={data[0][dataKey]} />
      </p>
      <p>
        {data[1].name}: <RollingNumber value={data[1][dataKey]} />
      </p>
    </div>
  );
};

const dataKeyIcon = {
  Android: <Android className="size-6 max-md:size-4 max-md:mb-1" />,
  iOS: <IOS className="size-6 max-md:size-4 mb-1" />,
  "Android/iOS": (
    <span className="flex items-center">
      <Android className="size-6 max-md:size-4" /> +{" "}
      <IOS className="size-6 max-md:size-4 mb-1" />
    </span>
  ),
} as const;
