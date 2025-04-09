import { sendCountData } from "@/lib";
import Link from "next/link";
import RollingNumber from "../ui/RollingNumber";

function SendFailCountCard() {
  return (
    <section className="card bg-base-100 card-md flex-1 shadow-sm rounded-md">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top">발송 실패</h3>
        <div className="flex justify-end">
          <Link href="/projects" className="text-xl font-semibold">
            <RollingNumber value={sendCountData.totalFailures} suffix="건" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SendFailCountCard;
