import { sendCountData } from "@/lib";
import Link from "next/link";
import RollingNumber from "../ui/RollingNumber";

function SendSuccessCountCard() {
  return (
    <section className="card bg-base-100 card-md flex-1 shadow-lg rounded-md">
      <div className="card-body flex flex-col justify-between">
        <h3 className="text-lg font-semibold align-text-top">발송 성공</h3>
        <div className="flex justify-end">
          <Link href="/projects" className="text-xl font-semibold">
            <RollingNumber value={sendCountData.totalSuccess} suffix="건" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SendSuccessCountCard;
