import dayjs from "dayjs";
import React from "react";

function SendMessageTable() {
  return (
    <div className="rounded-md overflow-hidden overflow-y-scroll h-full">
      <table className="table rounded-md">
        <thead className="sticky top-0 rounded-md">
          <tr className="bg-accent text-accent-content rounded-md">
            <th className="w-28 max-md:hidden">프로젝트</th>
            <th className="flex-1">메세지</th>
            <th className="w-32">발송 일시</th>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {Array.from({ length: 10 })
            .fill(0)
            .map((_, i) => (
              <tr key={i} className="hover:bg-base-300">
                <td className="w-28 max-md:hidden">bizbee-wms</td>
                <td className="flex-1">발송 테스트입니다.</td>
                <td className="w-32">
                  {dayjs().format("YYYY-MM-DD HH:mm:ss")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SendMessageTable;
