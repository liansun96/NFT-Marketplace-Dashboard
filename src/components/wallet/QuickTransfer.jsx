import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";

export default function QuickTransfer() {
  return (
    <div>
      <h2 className="text-white font-bold text-xl mt-10 mb-5">
        Quick Transfer
      </h2>
      <div className="bg-[#1D1933] text-white p-5 rounded-lg">
        <div className="flex justify-between items-center text-white bg-[#131129] p-2 rounded-lg">
          <div className="flex gap-3 items-center">
            <img
              className="w-12 rounded-lg"
              src="http://funto.designing-world.com/img/bg-img/u3.jpg"
              alt=""
            />
            <div>
              <h4 className="text-sm font-bold">Jamson</h4>
              <p className="text-sm">@jam432</p>
            </div>
          </div>
          <BiSolidCheckCircle className="text-purple text-xl bg-white rounded-full" />
        </div>
        <div>
          <h4 className="text-center my-5 text-sm">Insert Amount</h4>
          <h4 className="text-center my-5 text-3xl font-bold">597</h4>
          
          <input type="range" className="w-full" />

          <div className="flex items-center justify-between text-sm mb-5">
            <p>Your balance</p>
            <p>$88,455.12</p>
          </div>
          <div className="transform duration-1000 w-fit mx-auto transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
            <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
              <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                TRANSFER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
