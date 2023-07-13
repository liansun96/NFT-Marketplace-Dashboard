import React from "react";
import { FaImage } from "react-icons/fa";
import {FaPenClip} from "react-icons/fa6"
import { ImHammer2 } from "react-icons/im"
import {IoTrashBin} from "react-icons/io5"
import "./bidslist.css";

const Category = () => {
  return (
    <div className="w-[95%] mx-auto py-4">
      <div className="flex flex-col md:flex-row justify-between gap-5 category-bg cartgory-shadow p-4 rounded-xl">
        <div className="h-[130px] w-full">
          <div className="flex justify-center items-center h-[130px] gap-6">
            <div className="flex justify-center items-center bg-[#1fbcff] w-[70px] h-[70px] rounded-full">
              <FaImage className="text-primary text-3xl" />
            </div>
            <div className="text-body_text tracking-wider">
              <p className="text-lg font-medium">Artboard</p>
              <p className="text-3xl font-bold text-white">932</p>
            </div>
          </div>
        </div>
        <div className="h-[130px] w-full">
          <div className="flex justify-center items-center h-[130px] gap-6">
            <div className="flex justify-center items-center bg-[#81b631] w-[70px] h-[70px] rounded-full">
              <ImHammer2 className="text-primary text-4xl" />
            </div>
            <div className="text-body_text tracking-wider">
              <p className="text-lg font-medium">Acution</p>
              <p className="text-3xl font-bold text-white">932</p>
            </div>
          </div>
        </div>
        <div className="h-[130px] w-full">
          <div className="flex justify-center items-center h-[130px] gap-6">
            <div className="flex justify-center items-center bg-[#80c04f] w-[70px] h-[70px] rounded-full">
              <FaPenClip className="text-primary text-3xl" />
            </div>
            <div className="text-body_text tracking-wider">
              <p className="text-lg font-medium">Creators</p>
              <p className="text-3xl font-bold text-white">932</p>
            </div>
          </div>
        </div>
        <div className="h-[130px] w-full">
          <div className="flex justify-center items-center h-[130px] gap-6">
            <div className="flex justify-center items-center bg-[#d12a2a] w-[70px] h-[70px] rounded-full">
              <IoTrashBin className="text-primary text-3xl" />
            </div>
            <div className="text-body_text tracking-wider">
              <p className="text-lg font-medium">Canceled</p>
              <p className="text-3xl font-bold text-white">932</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
