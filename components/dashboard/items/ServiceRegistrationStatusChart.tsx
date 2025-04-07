"use client";

import Android from "@/components/svgIcons/Android";
import IOS from "@/components/svgIcons/IOS";
import React from "react";
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
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <h3 className="text-center mt-4 max-md:mt-2 font-semibold">
        서비스 등록 현황
      </h3>
      <div className="w-full h-80 max-lg:h-60 max-sm:h-40 flex justify-center md:py-4">
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
              <Legend content={CustomLegend} wrapperStyle={{ left: 0 }} />
              <Bar dataKey="iOS" stackId="a" fill="#8884d8" />
              <Bar dataKey="Android" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Android/iOS" stackId="a" fill="#fe288b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default ServiceRegistrationStatusChart;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-300 p-2 rounded-md">
        <strong className="text-lg text-base-content">
          총계:{" "}
          {payload.reduce((acc: number, item: any) => acc + item.value, 0)}
        </strong>
        {payload.map((item: any) => (
          <span
            key={item.name}
            className="text-md text-base-content flex flex-row"
          >
            {dataKeyIcon[item.name as keyof typeof dataKeyIcon]}: {item.value}
          </span>
        ))}
      </div>
    );
  }

  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <ul className="m-0 text-center flex flex-row items-center justify-center max-md:ps-2 max-md:h-11">
      {payload.map((item: any) => (
        <li
          key={item.dataKey}
          className="mr-2.5 flex flex-row items-center max-md:flex-col gap-1 max-md:justify-between max-md:h-full"
        >
          <svg
            className="inline-block align-middle"
            width="14"
            height="14"
            viewBox="0 0 32 32"
          >
            <path stroke="none" fill={item.color} d="M0,4h32v24h-32z" />
          </svg>
          {dataKeyIcon[item.dataKey as keyof typeof dataKeyIcon]}
        </li>
      ))}
    </ul>
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
