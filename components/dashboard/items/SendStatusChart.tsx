"use client";

import { Message, Push } from "@/components/svgIcons";
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
  LabelList,
} from "recharts";

interface ISendStatusChartProps {
  data: {
    name: string;
    push: number;
    message: number;
  }[];
}

function SendStatusChart({ data }: ISendStatusChartProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [legendHoverKey, setLegendHoverKey] = useState<
    "push" | "message" | null
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

      const tooltipZone = document.querySelector(".legend-service");
      if (tooltipZone && !tooltipZone.contains(e.target as Node)) {
        setLegendHoverKey(null);
        setActiveKey(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
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
              <ul className="legend-service m-0 text-center flex flex-row items-center justify-center max-md:ps-2 max-md:h-11">
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
                    {dataKeyName[item.dataKey as keyof typeof dataKeyName]}
                  </li>
                ))}
              </ul>
            )}
            wrapperStyle={{ left: 10 }}
          />
          <Bar
            dataKey="push"
            stackId="a"
            fill="#8884d8"
            shape={(props: any) => (
              <CustomBarShape dataKey="push" activeKey={activeKey} {...props} />
            )}
          >
            <LabelList
              dataKey="push"
              fill="#fff"
            />
          </Bar>
          <Bar
            dataKey="message"
            stackId="a"
            fill="#82ca9d"
            shape={(props: any) => (
              <CustomBarShape
                dataKey="message"
                activeKey={activeKey}
                {...props}
              />
            )}
          >
            <LabelList
              dataKey="message"
              fill="#fff"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {legendHoverKey && (
        <LegendTooltip
          data={data}
          dataKey={legendHoverKey}
          mousePos={mousePos}
        />
      )}
    </>
  );;
}

export default SendStatusChart;

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
            {dataKeyName[item.name as keyof typeof dataKeyName]}:{" "}
            <RollingNumber value={item.value} />
          </span>
        ))}
      </div>
    );
  }

  return null;
};

const LegendTooltip = ({
  data,
  dataKey,
  mousePos,
}: {
  data: ISendStatusChartProps["data"];
  dataKey: "push" | "message";
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
      <p className="font-semibold">{dataKeyName[dataKey]}</p>
      <p>
        {data[0].name}: <RollingNumber value={data[0][dataKey]} />
      </p>
      <p>
        {data[1].name}: <RollingNumber value={data[1][dataKey]} />
      </p>
    </div>
  );
};

const dataKeyName = {
  push: <Push className="size-6 max-md:size-4 max-md:mb-1" />,
  message: <Message className="size-6 max-md:size-4 max-md:mb-1" />,
} as const;