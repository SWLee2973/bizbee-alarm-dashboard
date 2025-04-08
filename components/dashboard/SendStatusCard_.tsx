import React from "react";
import DashboardDatePicker from "./DashboardDatePicker";
import SendStatusChart_ from "./items/SendStatusChart_";

function SendStatusCard_() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <div className="card-body">
        <h3 className="card-title text-md">메시지 전송 현황</h3>
        <DashboardDatePicker />
        <div className="w-full h-80">
          <SendStatusChart_ />
        </div>
      </div>
    </section>
  );
}

export default SendStatusCard_;
