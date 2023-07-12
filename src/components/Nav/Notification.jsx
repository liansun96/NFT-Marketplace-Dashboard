import React from "react";
import { notifications } from "../../constants/nav";

export default function Notification() {
  return (
    <ul
      className={`shadow-lg flex flex-col mt-3 justify-center py-2 w-80 rounded-lg bg-transparent backdrop-blur-3xl`}
    >
      {notifications.map((i) => {
        return (
          <li key={i.id} className="nav-dropdown items-start px-3 py-2 gap-3 cursor-pointer select-none w-full border-b">
            <img src={i.user_image} alt="" className="w-[40px]" />
            <div>
            <p className="inline-block">{i.description}</p>
            <p className="text-xs mt-2">{i.duration}</p>
            </div>
          </li>
        );
      })}
      <li className="text-blue-500 text-sm py-3 pb-2 text-center cursor-pointer ">
        See all notifications
      </li>
    </ul>
  );
}
