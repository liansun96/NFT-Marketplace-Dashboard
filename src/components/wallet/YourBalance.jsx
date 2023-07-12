import React from "react";
import {BsArrowUpCircleFill} from "react-icons/bs";
import {SlWallet} from "react-icons/sl";
import { TbReceiptTax } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import Chart from "./Chart";
import CountUp from "react-countup";

export default function YourBalance() {
  return (
      <main className={`category-bg w-full rounded-lg p-5 flex justify-between flex-col`}>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="basis-2/5">
            <div className="m-5 mb-10">
              <h2 className={"text-xl text-white font-bold"}>Your Balance</h2>
              <p className={`text-xs text-white`}>June 1, 2023, 08:22 AM</p>
            </div>
            <div className="m-5 mb-10">
              <h2 className={"text-sm text-white font-bold"}>This Month</h2>
              <p className={"text-3xl text-white font-bold py-3"}>$ 
              <CountUp end={23741.98} decimals={2} duration={2}/>
              </p>
              <p className="flex gap-3 items-center text-[#E039FD] text-sm">
                <BsArrowUpCircleFill className={`bg-white rounded-full text-lg`}/>
                +15%
              </p>
            </div>
          </div>
          <div className="basis-3/5 mx-auto my-5">
            <Chart/>
          </div>
        </div>
        <footer className={`flex justify-between mt-5`}>
          <div className={`flex items-center gap-2`}>
            <div className={` rounded-md p-1`}>
              <SlWallet className={`text-3xl text-[#fff]`}/>
            </div>
            <div className={`text-white text-xs`}>
              <p>Income</p>
              <h2 className={`text-lg font-semibold`}>$2368.10</h2>
            </div>
          </div>
          <div className={`flex items-center gap-2`}>
            <div className={` rounded-md p-1`}>
              <BiMoneyWithdraw className={`text-3xl text-[#FF0000]`}/>
            </div>
            <div className={`text-[#FF0000] text-xs`}>
              <p>Expense</p>
              <h2 className={`text-lg font-semibold`}>$1234.43</h2>
            </div>
          </div>
          <div className={`flex items-center gap-2`}>
            <div className={`  rounded-md p-1`}>
              <TbReceiptTax className={`text-3xl text-yellow-500`}/>
            </div>
            <div className={`text-yellow-500 text-xs`}>
              <p>Taxes</p>
              <h2 className={`text-lg font-semibold`}>$384.58</h2>
            </div>
          </div>
        </footer>
      </main>
  );
}
