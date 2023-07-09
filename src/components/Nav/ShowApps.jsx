import React from "react";
import { apps } from "../../constants/nav";

const ShowApps = () => {
  return (
    <div
      className={`shadow-lg w-[300px] h-[250px]  overflow-y-scroll  flex flex-wrap justify-around gap-5 mt-3 p-4 rounded-lg bg-white`}
    >
      <h4 className="text-[#7E8790] text-xs font-semibold w-full">
        APPS AND SERVICES
      </h4>
      {apps.map((i) => {
        return (
          <div key={i.id} className="flex flex-col items-center px-2">
            <img className="w-10" src={i.image} />
            <p className="text-xs text-[#7E8790]">{i.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowApps;
