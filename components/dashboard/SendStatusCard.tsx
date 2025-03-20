import React from "react";
import SendStatusChart from "./charts/SendStatusChart";

function SendStatusCard() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <div className="card-body">
        <h3 className="card-title text-md">메시지 전송 현황</h3>
        <div className="w-full h-40">
          <SendStatusChart />
        </div>
      </div>
    </section>
  );
}

export default SendStatusCard;
