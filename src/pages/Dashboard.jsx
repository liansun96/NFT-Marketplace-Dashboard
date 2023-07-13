import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sitebar/Sidebar";
import { stateContextCustom } from "../context/StateContext";
import { SequenceSpinner } from "react-spinners-kit";


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const { token } = stateContextCustom(); 
  useEffect(() => {
    !token && nav("sign-in")
    // setIsLoading(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000);
  },[]);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#070B24] flex justify-center items-center">
        <SequenceSpinner size={50} backColor="#BA3CD3" />
      </div>
    );
  }
  return (
    <>
     <div className="flex">
      <div className="w-[0%] lg:w-[17%] z-10">
        <Sidebar />
      </div>
      <div className="w-full lg:w-[83%]">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Dashboard;