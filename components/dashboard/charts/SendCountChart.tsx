"use client";

import { sendCountData } from "@/lib";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SendCountChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={sendCountData.projectMetrics}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="projectId" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="totalRequests"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="totalSuccess"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="totalFailures"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-300 p-2 rounded-md">
        <strong className="text-lg text-base-content">
          {payload[0].payload.projectId}
        </strong>
        {payload.map((item: any) => (
          <p key={item.name} className="text-md text-base-content">{`${
            dataKeyNames[item.name as keyof typeof dataKeyNames]
          }: ${item.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

const dataKeyNames = {
  totalRequests: "총 요청 수",
  totalSuccess: "발송 성공",
  totalFailures: "발송 실패",
} as const;

export default SendCountChart;
