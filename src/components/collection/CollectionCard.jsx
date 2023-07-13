import React from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CollectionCard = ({ aution }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/collection-detail/${aution?.id}`);
  };
  return (
    <div key={aution.id} className="group w-full lg:w-[250px] 2xl:w-[280px] 3xl:w-[320px]">
      <div className="flex flex-col overflow-hidden gap-4 category-bg p-5 rounded-xl group-hover:-translate-y-1 duration-300">
        <div className="relative overflow-hidden">
          <div className="w-full overflow-hidden rounded-xl duration-300">
            <img
              src={aution.image}
              alt=""
              className="group-hover:scale-110 duration-300 rounded-lg"
            />
          </div>
          <div className="absolute top-4 left-4">
            <div
              className={`${
                (aution.bid === "New Bid" && "bg-info") ||
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
              <p className="text-[10px] text-heading_text font-semibold">
                {aution.bid}
              </p>
            </div>
          </div>
          <div className="absolute p-3 w-full top-52 lg:top-32">
            <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-activity">
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  0
                </p>
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  Days
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  0
                </p>
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  Hours
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  0
                </p>
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  Min
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  0
                </p>
                <p className="text-[12px] text-heading_text font-bold mb-0">
                  Sec
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[9px] text-heading_text">
              <BsBag />
              <p>{aution.stock}</p>
            </div>
            <AiOutlineHeart className="text-heading_text text-[15px] cursor-pointer " />
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
                <p className="text-xs text-heading_text font-semibold mb-0 cursor-pointer ">
                  {aution.name.length < 12 ? (
                    aution.name
                  ) : (
                    <>
                      {aution.name.substring(0, 12)}
                      ...
                    </>
                  )}
                </p>
                <p className="text-[9px] text-heading_text mb-0 cursor-pointer">
                  {aution.email}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[9px] text-heading_text mb-0">Current Bid</p>
              <p className="text-xs text-heading_text font-semibold mb-0">
                {aution.price}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="transform duration-1000 transition text-center hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
            <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
              <button onClick={handleClick} className="px-6 py-2 text-xs  font-bold text-heading_text">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
