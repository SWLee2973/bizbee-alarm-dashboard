import React from "react";
import SendCountChart from "./charts/SendCountChart";

function SendCountCard() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <div className="card-body">
        <h3 className="card-title text-md">메시지 전송 현황</h3>
        <div className="w-full h-40">
          <SendCountChart />
        </div>
      </div>
    </section>
  );
}

export default SendCountCard;
