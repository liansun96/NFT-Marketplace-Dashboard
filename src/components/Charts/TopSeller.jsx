import React from "react";

const TopSeller = () => {
  return (
    <div className="w-full lg:w-[25%] category-bg px-5 py-6 rounded-xl">
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex items-center justify-between">
          <h5 className="text-md text-heading_text font-semibold">
            Top Seller
          </h5>
          <p className="text-sm text-body_text font-semibold cursor-pointer">
            View all
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-between mt-1">
          <div className="flex items-center justify-between 2xl:justify-evenly p-5 rounded-lg border border-gray-700 w-full 3xl:w-[250px]">
            <div className="">
              <img
                src="http://funto.designing-world.com/img/bg-img/6.jpg"
                className="h-[50px] rounded-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-between">
              <div className="flex gap-1 items-center">
                <div className="">
                  <img
                    src="http://funto.designing-world.com/img/bg-img/u4.jpg"
                    className="w-[26px] h-[26px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-[11px] text-body_text hover:text-purple transition cursor-pointer">
                    Pixel Cartoon
                  </p>
                  <p className="text-[9px] text-body_text hover:text-purple transition cursor-pointer">
                    @designing_world
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center rounded border border-gray-700 w-full ">
                <p className="text-xs text-body_text font-semibold cursor-pointer">
                  0.99 ETH
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between 2xl:justify-evenly p-5 rounded-lg border border-gray-700 w-full 3xl:w-[250px]">
            <div className="">
              <img
                src="http://funto.designing-world.com/img/bg-img/6.jpg"
                className="h-[50px] rounded-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-between">
              <div className="flex gap-1 items-center">
                <div className="">
                  <img
                    src="http://funto.designing-world.com/img/bg-img/u4.jpg"
                    className="w-[26px] h-[26px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-[11px] text-body_text hover:text-purple transition cursor-pointer">
                    Pixel Cartoon
                  </p>
                  <p className="text-[9px] text-body_text hover:text-purple transition cursor-pointer">
                    @designing_world
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center rounded border border-gray-700 w-full ">
                <p className="text-xs text-body_text font-semibold cursor-pointer">
                  0.99 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
