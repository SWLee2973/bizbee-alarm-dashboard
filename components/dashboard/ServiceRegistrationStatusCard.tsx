import React from "react";
import ServiceRegistrationStatusChart from "./items/ServiceRegistrationStatusChart";

const data = [
  {
    name: "사용",
    Android: 15,
    iOS: 5,
    "Android/iOS": 5,
  },
  {
    name: "미사용",
    Android: 3,
    iOS: 7,
    "Android/iOS": 26,
  },
];

function ServiceRegistrationStatusCard() {
  return (
    <section className="card bg-base-200 card-md shadow-sm rounded-md">
      <h3 className="text-center mt-4 max-md:mt-2 font-semibold">
        서비스 등록 현황
      </h3>
      <div className="w-full h-60 max-lg:h-50 max-sm:h-40 flex justify-center md:pb-4 max-lg:px-2">
        <div className="w-4/5 aspect-square">
          <ServiceRegistrationStatusChart data={data} />
        </div>
      </div>
    </section>
  );
}

export default ServiceRegistrationStatusCard;
