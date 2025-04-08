import SendStatusChart from "./items/SendStatusChart";

const data = [
  {
    name: "즉시",
    push: 762,
    message: 866,
  },
  {
    name: "예약",
    push: 969,
    message: 372,
  },
];

function SendStatusCard() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <h3 className="text-center mt-4 max-md:mt-2 font-semibold">발송 건수</h3>
      <div className="w-full h-60 max-lg:h-50 max-sm:h-40 flex justify-center md:pb-4">
        <div className="w-4/5 aspect-square">
          <SendStatusChart data={data} />
        </div>
      </div>
    </section>
  );
}

export default SendStatusCard;
