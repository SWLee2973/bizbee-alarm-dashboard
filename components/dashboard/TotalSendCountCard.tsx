"use client";

import { sendCountData } from "@/lib";
import Link from "next/link";

function TotalSendCountCard() {
  return (
    <section className="card bg-base-200 card-md flex-1 shadow-sm rounded-md">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top">총 발송 수</h3>
        <Link href="/projects" className="flex justify-end">
          <span className="text-xl font-semibold underline">
            {sendCountData.totalRequests} 건
          </span>
        </Link>
      </div>
    </section>
  );
}

export default TotalSendCountCard;
