"use client";

import { sendCountData } from "@/lib";
import { redirect } from "next/navigation";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CategoricalChartState } from "recharts/types/chart/types";

function SendStatusChart() {
  const moveProjectPage = (e: CategoricalChartState) => {
    const projectName = e.activeLabel;

    if (!projectName) return;

    redirect(`/projects/${projectName}`);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={sendCountData.projectMetrics}
        margin={{
          top: 15,
          right: 10,
          left: -20,
          bottom: 5,
        }}
        onClick={moveProjectPage}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="projectId" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
        <Bar
          dataKey="totalSuccess"
          fill="#00cd89"
          activeBar={<Rectangle fill="#00b2f9" />}
        />
        <Bar
          dataKey="totalFailures"
          fill="#ff5673"
          activeBar={<Rectangle fill="#fe288b" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
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

const CustomLegend = ({ payload }: any) => {
  return (
    <ul className="ps-8 m-0 text-center flex flex-row items-center justify-center">
      {payload.map((item: any) => (
        <li key={item.dataKey} className="inline-block mr-2.5">
          <svg
            className="inline-block align-middle mr-1"
            width="14"
            height="14"
            viewBox="0 0 32 32"
          >
            <path stroke="none" fill={item.color} d="M0,4h32v24h-32z" />
          </svg>
          <span className="font-semibold">
            {dataKeyNames[item.dataKey as keyof typeof dataKeyNames]}
          </span>
        </li>
      ))}
    </ul>
  );
};

const dataKeyNames = {
  totalRequests: "총 요청 수",
  totalSuccess: "발송 성공",
  totalFailures: "발송 실패",
} as const;

export default SendStatusChart;
