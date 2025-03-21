import React from "react";
import SendMessageTable from "./items/SendMessageTable";

function RecentSendMessageCard() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <div className="card-body justify-between">
        <h3 className="card-title text-md">최근 발송된 메시지</h3>
        <div className="w-full h-92">
          <SendMessageTable />
        </div>
      </div>
    </section>
  );
}

export default RecentSendMessageCard;
