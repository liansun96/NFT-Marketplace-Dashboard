import React, { useState } from "react";
import { activities } from "./Activity";
import {
  AiOutlineShoppingCart,
  AiOutlinePercentage,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Table = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-5 p-5 w-full lg:w-[49%] 2xl:w-[49%] 3xl:w-[49.3%] category-bg rounded-xl">
      <div className="flex items-center justify-between w-full">
        <div>
          <h5 className="text-xm lg:text-xl font-semibold text-heading_text">Activity</h5>
        </div>
        <div className="flex items-center lg:gap-3">
          <button
            className={`text-heading_text text-xs lg:text-sm px-3 py-1 rounded-3xl ${
              activeButton === "today" ? "bg-purple" : "bg-transparent"
            }`}
            onClick={() => handleButtonClick("today")}
          >
            Today
          </button>
          <button
            className={`text-heading_text text-xs lg:text-sm px-3 py-1 rounded-3xl ${
              activeButton === "7day" ? "bg-purple" : "bg-transparent"
            }`}
            onClick={() => handleButtonClick("7day")}
          >
            7 Day
          </button>
          <button
            className={`text-heading_text text-xs lg:text-sm px-3 py-1 rounded-3xl ${
              activeButton === "30day" ? "bg-purple" : "bg-transparent"
            }`}
            onClick={() => handleButtonClick("30day")}
          >
            30 Day
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-scroll">
        <table className="w-[125%] 3xl:w-[100%]">
          <thead className="hidden">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Dis</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-5 h-[58px] border-b border-t border-l border-gray-700 ">
                  <div className="flex items-center gap-2">
                    <div className="">
                      <img src={activity.image} className="h-[20px]" alt="" />
                    </div>
                    <p className="text-heading_text text-sm font-semibold">
                      {activity.name}
                    </p>
                  </div>
                </td>
                <td className="px-5 h-[58px] border-b border-t border-gray-700 text-heading_text text-sm font-semibold">
                  {activity.price}
                </td>
                <td className="px-5 h-[58px] border-b border-t border-gray-700 text-heading_text text-sm">
                  <div className="flex items-center gap-1">
                    <div>
                      {activity.dis === "Sales" && <AiOutlineShoppingCart />}
                      {activity.dis === "Discount" && <AiOutlinePercentage />}
                      {activity.dis === "Offer" && <AiOutlinePercentage />}
                    </div>
                    {activity.dis}
                  </div>
                </td>
                <td className="px-5 h-[58px] border-b border-t border-e border-gray-700 text-heading_text text-sm">
                  <div className="flex items-center gap-1">
                    <AiOutlineClockCircle />
                    {activity.time}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
