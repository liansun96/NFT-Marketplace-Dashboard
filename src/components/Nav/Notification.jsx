import React from "react";
import { notifications } from "../../constants/nav";

export default function Notification() {
  return (
    <ul
      className={`shadow-lg flex flex-col mt-3 justify-center py-2 w-80 rounded-lg bg-transparent backdrop-blur-3xl`}
    >
      {notifications.map((i) => {
        return (
          <li key={i.id} className="flex items-center px-3 py-2 gap-3 cursor-pointer select-none text-white text-sm w-full border-b">
            <img src={i.user_image} alt="" className="w-[40px]" />
            <div>
            <p className="inline-block">{i.description}</p>
            <p className="text-xs">{i.duration}</p>
            </div>
          </li>
        );
      })}
      <li className="text-blue-500 text-xs py-3 text-center cursor-pointer font-semibold ">
        See all notifications
      </li>
    </ul>
  );
}
