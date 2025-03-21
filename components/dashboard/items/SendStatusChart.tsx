"use client";

import { sendCountData } from "@/lib";
import { redirect } from "next/navigation";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";

function SendStatusChart() {
  const moveProjectPage = (e: CategoricalChartState) => {
    const projectName = e.activeLabel;

    redirect(`/projects/${projectName}`);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={sendCountData.projectMetrics}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        style={{ cursor: "pointer" }}
        onClick={moveProjectPage}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="projectId" padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="totalRequests"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="totalSuccess" stroke="#82ca9d" />
        <Line type="monotone" dataKey="totalFailures" stroke="#ffc658" />
      </LineChart>
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

const CustomLegend = () => {
  return null;
};

const dataKeyNames = {
  totalRequests: "총 요청 수",
  totalSuccess: "발송 성공",
  totalFailures: "발송 실패",
} as const;

export default SendStatusChart;
