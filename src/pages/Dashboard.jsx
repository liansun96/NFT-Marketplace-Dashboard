import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sitebar/Sidebar";


const Dashboard = () => {

  

  return (
    <div className="flex">
      <div className="w-[17%] z-10">
        <Sidebar />
      </div>
      <div className="w-[83%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;