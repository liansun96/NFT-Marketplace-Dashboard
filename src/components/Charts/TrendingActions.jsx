import React from "react";
import "./Charts.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { autions } from "./Activity";

const TrendingActions = () => {
  return (
    <div className="flex flex-col gap-5 justify-between p-5 bg-gray-800 rounded-xl w-[49%]">
      <div className="flex items-center gap-1">
        <div className="">
          <img
            src="http://funto.designing-world.com/img/core-img/fire2.png"
            alt=""
          />
        </div>
        <h5 className="text-xl text-white font-semibold">Trending Actions</h5>
      </div>

      <div className="flex items-center gap-5 overflow-hidden">
        {autions.map((aution) => (
          <div key={aution.id} className="group">
            <div className="flex flex-col gap-5 bg-black p-5 rounded-xl group-hover:-translate-y-1 duration-300">
              <div className="relative">
                <div className="w-[200px] overflow-hidden rounded-lg duration-300">
                  <img
                    src={aution.image}
                    alt=""
                    className="group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div
                    className={`${
                      (aution.bid === "New Bid" && "bg-black") ||
                      (aution.bid === "Bid Done" && "bg-red-500") ||
                      (aution.bid === "Hot Bid" && "bg-red-500")
                    } flex gap-1 items-center justify-center px-3 py-2 rounded-3xl`}
                  >
                    <div>
                      <img
                        src="http://funto.designing-world.com/img/core-img/fire2.png"
                        alt=""
                        className="h-[12px]"
                      />
                    </div>
                    <p className="text-[10px] text-white font-semibold">
                      {aution.bid}
                    </p>
                  </div>
                </div>
                <div className="absolute p-3 w-full top-32">
                  <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-activity">
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-white font-bold mb-0">0</p>
                      <p className="text-[12px] text-white font-bold mb-0">
                        Days
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-white font-bold mb-0">0</p>
                      <p className="text-[12px] text-white font-bold mb-0">
                        Hours
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-white font-bold mb-0">0</p>
                      <p className="text-[12px] text-white font-bold mb-0">
                        Min
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-white font-bold mb-0">0</p>
                      <p className="text-[12px] text-white font-bold mb-0">
                        Sec
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[9px] text-white">
                    <BsBag />
                    <p>{aution.stock}</p>
                  </div>
                  <AiOutlineHeart className="text-white text-[15px] cursor-pointer" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="">
                      <img
                        src={aution.profile}
                        className="w-[30px] h-[30px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-xs text-white font-semibold mb-0 cursor-pointer">
                        {aution.name.length < 12 ? (
                          aution.name
                        ) : (
                          <>
                            {aution.name.substring(0, 12)}
                            ...
                          </>
                        )}
                      </p>
                      <p className="text-[9px] text-white mb-0 cursor-pointer">
                        {aution.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[9px] text-white mb-0">Current Bid</p>
                    <p className="text-xs text-white font-semibold mb-0">
                      {aution.price}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button className="rounded-3xl bg-white w-full py-2 text-sm font-semibold">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingActions;
