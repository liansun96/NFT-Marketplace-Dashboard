import React, { useState } from "react";
import { RiCalendar2Line } from "react-icons/ri";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../Nav/Navbar";


const CreateNewCollection = () => {
  //for radios
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleOptionChange = (option) => {
    setSelectedRadio(option);
  };

  //for options
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //for calender
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
    setShowStartCalendar(false);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    setShowEndCalendar(false);
  };

  return (
    <div className="bg-secondary h-full">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10 w-[95%] mx-auto py-10">
        <div className="flex flex-col gap-5 p-5 lg:p-10 rounded-xl border border-gray-700 category-bg w-full lg:w-[75%]">
          <h1 className="text-heading_text text-2xl font-semibold">
            Create New NFT
          </h1>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2w w-full lg:w-[30%]">
                <label className="text-sm text-body_text">Upload Files</label>
                <input
                  type="file"
                  className="file:bg-secondary file:px-4 file:py-2 file:rounded-lg file:border-0 text-sm file:text-body_text file:text-sm file:font-semibold file:hover:bg-purple file:hover:text-black file:duration-300 text-body_text"
                />
              </div>

              {/* radios */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 mt-2">
                <div className="flex items-center lg:items-start gap-2">
                  <input
                    type="radio"
                    checked={selectedRadio === "fixed"}
                    onChange={() => handleOptionChange("fixed")}
                  />
                  <p className="text-sm text-body_text mb-0">Fixed price</p>
                </div>
                <div className="flex items-center lg:items-start gap-2">
                  <input
                    type="radio"
                    checked={selectedRadio === "unlock"}
                    onChange={() => handleOptionChange("unlock")}
                  />
                  <p className="text-sm text-body_text mb-0">
                    Unlock Purchased
                  </p>
                </div>
                <div className="flex items-center lg:items-start gap-2">
                  <input
                    type="radio"
                    checked={selectedRadio === "bids"}
                    onChange={() => handleOptionChange("bids")}
                  />
                  <p className="text-sm text-body_text mb-0">Open for bids</p>
                </div>
              </div>

              <div className="">
                <label htmlFor="" className="text-body_text text-sm">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm text-body_text">Description</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  className="w-full outline-none focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 bg-secondary rounded-lg text-body_text text-sm px-2 py-1 placeholder:text-gray-600"
                  placeholder="Write short description..."
                ></textarea>
              </div>

              {/* price & category */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                <div className="w-full lg:w-[50%]">
                  <label htmlFor="" className="text-body_text text-sm">
                    Price
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    placeholder="*** ETH"
                  />
                </div>

                <div className="w-full lg:w-[50%] flex flex-col gap-1">
                  <label
                    htmlFor="options"
                    className="text-body_text text-md font-semibold"
                  >
                    Categories
                  </label>
                  <select
                    id="options"
                    value={selectedOption}
                    onChange={handleChange}
                    className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                  >
                    <option
                      value=""
                      className="text-body_text text-sm hover:bg-none"
                    >
                      Music
                    </option>
                    <option value="art" className="text-body_text text-sm">
                      Art
                    </option>
                    <option
                      value="collection"
                      className="text-body_text text-sm"
                    >
                      Collection
                    </option>
                  </select>
                </div>
              </div>

              {/* calender */}
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
                <div className="relative w-full lg:w-[50%]">
                  <label htmlFor="" className="text-sm text-body_text">
                    Starting Date
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary outline-none focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    value={selectedStartDate.toLocaleDateString()}
                    onFocus={() => setShowStartCalendar(true)}
                    onBlur={() => setShowStartCalendar(false)}
                    readOnly
                  />
                  <div className="absolute top-6 right-0 p-2">
                    <RiCalendar2Line
                      className="h-6 w-6 text-gray-500 cursor-pointer"
                      onClick={() => setShowStartCalendar(!showStartCalendar)}
                    />
                  </div>
                  {showStartCalendar && (
                    <div className="absolute top-20 right-0 bg-white shadow-lg z-10">
                      <Calendar
                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                      />
                    </div>
                  )}
                </div>

                <div className="relative w-full lg:w-[50%]">
                  <label htmlFor="" className="text-sm text-body_text">
                    Ending Date
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary outline-none focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    value={selectedEndDate.toLocaleDateString()}
                    onFocus={() => setShowEndCalendar(true)}
                    onBlur={() => setShowEndCalendar(false)}
                    readOnly
                  />
                  <div className="absolute top-6 right-0 p-2">
                    <RiCalendar2Line
                      className="h-6 w-6 text-gray-500 cursor-pointer"
                      onClick={() => setShowEndCalendar(!showEndCalendar)}
                    />
                  </div>
                  {showEndCalendar && (
                    <div className="absolute top-20 right-0 bg-white shadow-lg z-10">
                      <Calendar
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* royal & copy & size */}
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-5">
                <div className="w-full lg:w-[32%]">
                  <label htmlFor="" className="text-body_text text-sm">
                    Royality
                  </label>
                  <input
                    type="type"
                    className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    placeholder="5%"
                  />
                </div>
                <div className="w-full lg:w-[32%]">
                  <label htmlFor="" className="text-body_text text-sm">
                    None of copy
                  </label>
                  <input
                    type="number"
                    className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    placeholder="13"
                  />
                </div>
                <div className="w-full lg:w-[32%]">
                  <label htmlFor="" className="text-body_text text-sm">
                    Size
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary outline-none  focus:outline-gray-700 focus:outline-1 outline-offset-0 duration-200 px-2 py-3 rounded-lg text-body_text text-sm placeholder:text-[13px] placeholder:text-gray-600"
                    placeholder="20 MB"
                  />
                </div>
              </div>

              {/* Create */}
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span className="text-sm text-body_text">
                    I agree to all terms & conditions.
                  </span>
                </div>
                <div className="transform duration-1000 transition text-center hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-body_text">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-[25%]">
          <div className="group">
            <div className="flex flex-col gap-4 category-bg p-5 rounded-xl group-hover:-translate-y-1 duration-300">
              <div className="relative">
                <div className="overflow-hidden rounded-lg duration-300">
                  <img
                    src="https://i.seadn.io/gae/l3gsBH9gOWTCT-l3nfZlQ9VTsevIVfaGSOYdFY0ozCrqMHYcL4kFO0m7IVDURJbeLXWwJpxMtSojIFKwr3x1KGs2Z8Sf7ScfoNJl?w=500&auto=format"
                    alt=""
                    className="group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex gap-1 items-center justify-center px-3 py-2 rounded-3xl bg-black">
                    <div>
                      <img
                        src="http://funto.designing-world.com/img/core-img/fire2.png"
                        alt=""
                        className="h-[12px]"
                      />
                    </div>
                    <p className="text-[10px] text-body_text font-semibold">
                      Featured
                    </p>
                  </div>
                </div>
                <div className="absolute p-3 w-full top-40 3xl:top-72">
                  <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-activity">
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        0
                      </p>
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        Days
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        0
                      </p>
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        Hours
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        0
                      </p>
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        Min
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        0
                      </p>
                      <p className="text-[12px] text-body_text font-bold mb-0">
                        Sec
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[12px] text-body_text">
                    <BsBag />
                    <p>Floor price 0.324 ETH</p>
                  </div>
                  <AiOutlineHeart className="text-body_text text-[15px] cursor-pointer " />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="">
                      <img
                        src="http://funto.designing-world.com/img/bg-img/u1.jpg"
                        className="w-[30px] h-[30px] rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-xs text-body_text font-semibold mb-0 cursor-pointer ">
                        @creative_art
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[12px] text-body_text mb-0">
                      Current Bid
                    </p>
                    <p className="text-xs text-body_text font-semibold mb-0">
                      0.324 Eth
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="transform duration-1000 transition text-center hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-xs  font-bold text-body_text">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCollection;
