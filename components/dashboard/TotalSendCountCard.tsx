import { sendCountData } from "@/lib";
import Link from "next/link";
import RollingNumber from "../ui/RollingNumber";

function TotalSendCountCard() {
  return (
    <section className="card bg-base-200 card-md flex-1 shadow-sm rounded-md">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top">총 발송 건수</h3>
        <div className="flex justify-end">
          <Link href="/projects" className="text-xl font-semibold">
            <RollingNumber value={sendCountData.totalRequests} suffix="건" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TotalSendCountCard;
