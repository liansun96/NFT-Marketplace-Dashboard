import React from "react";
import Navbar from "../Nav/Navbar";
import { PiPencilDuotone, PiBrowsers } from "react-icons/pi";
import { FaRegUserCircle, FaFingerprint } from "react-icons/fa";
import { BsPerson, BsBell, BsTrash, BsCreditCard } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdAppShortcut } from "react-icons/md";
// import "./img/pngegg.png";
import "../../index.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import { Link } from "react-router-dom";
import {
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineShareAlt,
  AiFillWarning,
  AiFillLock,
} from "react-icons/ai";
import CountrySelect from "./CountrySelect";
// import { Link } from "react-router-dom";

const Account = () => {
  const list = [
    { icon: <BsPerson />, name: "Basic information" },
    { icon: <FaRegUserCircle />, name: "Username" },
    { icon: <AiOutlineLock />, name: "Password" },
    { icon: <FaFingerprint />, name: "Privacy and Safety" },
    { icon: <BsCreditCard />, name: "Payment methods" },
    { icon: <BsBell />, name: "Notification" },
    { icon: <AiOutlineShareAlt />, name: "Connected accounts" },
    { icon: <BsTrash />, name: "Delete account" },
  ];
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="px-5 mx-auto bg-secondary mt-5">
        <div className="grid gap-x-10 grid-cols-12">
          {/* first */}
          {/* <div className="flex col-span-12 text-[#C9C9C9] justify-between">
            <h1 className=" text-lg font-bold">Account</h1>
            <div className="flex  text-[#C9C9C9]">
              <p className=" text-sm">pages</p>
              <p className=" mx-2 mt-1 text-sm">
                <AiOutlineRight />
              </p>
              <p className=" text-sm">Account</p>
            </div>
          </div> */}
          {/* second  */}
          <div className="md:sticky top-0 bg-[#1C1832] h-[700px] rounded-xl shadow-md lg:col-span-3 col-span-12 md:col-span-4 w-full mt-3">
            <div className="flex flex-col items-center pt-8 mx-auto ">
              <div className="relative cursor-pointer mb-3">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
                  <img
                    className=""
                    src="http://funto.designing-world.com/img/bg-img/u2.jpg"
                    alt=""
                  />
                </div>
                <span className="w-8 h-8 absolute right-0 bottom-0 border border-white text-center flex justify-center items-center text-[#C9C9C9] rounded-full bg-[#E039FD]">
                  <PiPencilDuotone />
                </span>
              </div>
              <h1 className="font-bold text-[#C9C9C9] text-xl">Mazanov Sky</h1>
              <p className="text-slate-500">mazanovsky@nft.com</p>
            </div>
            {/* list  */}
            <hr className="w-4/5 mx-auto my-5" />
            <div className="">
              <ul>
                {list.map((i) => {
                  return (
                    <li className="nav">
                      <Link
                        to={i.name}
                        activeClass="at"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="flex ps-5 py-3 hover:text-[#E039FD] hover:border-s-2
                 hover:border-s-[#E039FD] text-[#C9C9C9]"
                      >
                        <div className="items-center flex me-3 text-lg">
                          {i.icon}
                        </div>
                        <div className="">{i.name}</div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <hr className="mx-auto my-5" />
              <button className="bg-gray-900 p-3 px-6 rounded-full mx-auto flex hover:bg-secondary0 duration-150 text-[#C9C9C9] font-bold">
                View Public Profile
              </button>
              <br />
            </div>
          </div>
          {/* third  */}
          <div className=" col-span-12  mt-3 md:col-span-8 lg:col-span-9">
            <div
              id="Basic information"
              className=" bg-[#1C1832] p-4 rounded-xl  shadow-md"
            >
              <div>
                <div className="text-lg my-2 text-[#C9C9C9] font-bold">
                  Basic information
                </div>
                <hr className="my-4" />
                <div action="flex">
                  {/* form con  */}
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Full Name
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"Mazanov Sky"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Phone
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"+1(119)980-03-11"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Email address
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"mazanovsky@nft.com"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Location
                    </p>
                    {/* <CountrySelect/> */}

                    <div className="flex w-4/5">
                      <button
                        id="states-button"
                        data-dropdown-toggle="dropdown-states"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-secondary border-secondary rounded-l-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-[#C9C9C9] dark:border-gray-600"
                        type="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-3 mr-2"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            width="14"
                            height="12"
                            rx="2"
                            fill="white"
                          />
                          <mask
                            id="mask0_12694_49953"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="15"
                            height="12"
                          >
                            <rect
                              x="0.5"
                              width="14"
                              height="12"
                              rx="2"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_12694_49953)">
                            <path
                              fillRule="evenodd"
                              clip-rule="evenodd"
                              d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                              fill="#D02F44"
                            />
                            <rect
                              x="0.5"
                              width="6"
                              height="5.6"
                              fill="#46467F"
                            />
                            <g filter="url(#filter0_d_12694_49953)">
                              <path
                                fillRule="evenodd"
                                clip-rule="evenodd"
                                d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
                                fill="url(#paint0_linear_12694_49953)"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_12694_49953"
                              x="1.1665"
                              y="0.800049"
                              width="4.6665"
                              height="5"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_12694_49953"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_12694_49953"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_12694_49953"
                              x1="1.1665"
                              y1="0.800049"
                              x2="1.1665"
                              y2="4.80005"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                          </defs>
                        </svg>
                        USA
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dropdown-states"
                        className="z-10 hidden bg-secondary divide-y divide-secondary rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="states-button"
                        >
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-secondary dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-[#C9C9C9]"
                            >
                              <div className="inline-flex items-center">
                                <svg
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-us"
                                  viewBox="0 0 512 512"
                                >
                                  <g fillRule="evenodd">
                                    <g stroke-width="1pt">
                                      <path
                                        fill="#bd3d44"
                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />
                                      <path
                                        fill="#fff"
                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />
                                    </g>
                                    <path
                                      fill="#192f5d"
                                      d="M0 0h98.8v70H0z"
                                      transform="scale(3.9385)"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                      transform="scale(3.9385)"
                                    />
                                  </g>
                                </svg>
                                United States
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-[#C9C9C9]"
                            >
                              <div className="inline-flex items-center">
                                <svg
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-de"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="#ffce00"
                                    d="M0 341.3h512V512H0z"
                                  />
                                  <path d="M0 0h512v170.7H0z" />
                                  <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                </svg>
                                Germany
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-[#C9C9C9]"
                            >
                              <div className="inline-flex items-center">
                                <svg
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-it"
                                  viewBox="0 0 512 512"
                                >
                                  <g fillRule="evenodd" stroke-width="1pt">
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path
                                      fill="#009246"
                                      d="M0 0h170.7v512H0z"
                                    />
                                    <path
                                      fill="#ce2b37"
                                      d="M341.3 0H512v512H341.3z"
                                    />
                                  </g>
                                </svg>
                                Italy
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-[#C9C9C9]"
                            >
                              <div className="inline-flex items-center">
                                <svg
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  id="flag-icon-css-cn"
                                  viewBox="0 0 512 512"
                                >
                                  <defs>
                                    <path
                                      id="a"
                                      fill="#ffde00"
                                      d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                                    />
                                  </defs>
                                  <path fill="#de2910" d="M0 0h512v512H0z" />
                                  <use
                                    width="30"
                                    height="20"
                                    transform="matrix(76.8 0 0 76.8 128 128)"
                                    xlink:href="#a"
                                  />
                                  <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-121 142.6 -47) scale(25.5827)"
                                    xlink:href="#a"
                                  />
                                  <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-98.1 198 -82) scale(25.6)"
                                    xlink:href="#a"
                                  />
                                  <use
                                    width="30"
                                    height="20"
                                    transform="rotate(-74 272.4 -114) scale(25.6137)"
                                    xlink:href="#a"
                                  />
                                  <use
                                    width="30"
                                    height="20"
                                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                    xlink:href="#a"
                                  />
                                </svg>
                                China
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <label for="states" className="sr-only">
                        Choose a state
                      </label>
                      <select
                        id="states"
                        className="bg-secondary borderborder-secondary text-gray-500 text-sm rounded-r-lg border-l-gray-800 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#C9C9C9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a state</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="WH">Washinghton</option>
                        <option value="FL">Florida</option>
                        <option value="VG">Virginia</option>
                        <option value="GE">Georgia</option>
                        <option value="MI">Michigan</option>
                      </select>
                    </div>

                    {/* <CountrySelect/> */}
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0"></p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"Houston"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0"></p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"Texas"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Address line 1
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"3227 Wines Lane"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex-col justify-start flex font-semibold mb-2 ms-1 lg:mb-0">
                      Address Line 2
                      <p className="text-[#C9C9C9] text-start flex justify-start">
                        (optional)
                      </p>
                    </p>
                    <input
                      type="email"
                      id="email"
                      className="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#c] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Zip code
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"77032"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-[#C9C9C9] text-sm flex font-semibold mb-2 ms-1 lg:mb-0">
                      Overview
                    </p>
                    {/* <input
                  type="email"
                  id="email"
                  class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                  defaultValue={"hello"}
                /> */}
                    <textarea
                      className="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* fourth  */}
            <div
              id="Username"
              className=" bg-[#1C1832] p-4 rounded-xl mt-7  shadow-md"
            >
              <div>
                <div className="text-lg text-[#C9C9C9] my-2 font-bold">
                  User
                </div>
                <hr className="my-4" />
                <p className="text-slate-300">
                  Your current username is{" "}
                  <span className="text-slate-400">@ellietucker</span>
                </p>
                <div action="flex">
                  {/* form con  */}
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-sm text-[#C9C9C9] items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Username
                    </p>
                    <div class="flex w-4/5">
                      <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-secondary  rounded-l-md dark:bg-gray-600 dark:text-gray-400">
                        @
                      </span>
                      <input
                        type="text"
                        id="website-admin"
                        class="rounded-none rounded-r-lg bg-secondary borderborder-secondary text-gray-500 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#C9C9C9] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie Green"
                      />
                    </div>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* pswd  */}
            <div
              id="Password"
              className=" bg-[#1C1832] text-[#C9C9C9] p-4 rounded-xl mt-7  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Password</div>
                <hr className="my-4" />
                <div action="flex">
                  {/* form con  */}
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                      Current password
                    </p>
                    <input
                      type="email"
                      id="email"
                      class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                      defaultValue={"ellietucker"}
                    />
                  </div>
                  <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                    <p className="text-sm mt-2 flex font-semibold mb-2 ms-1 lg:mb-0">
                      New password
                    </p>
                    <div className="w-4/5">
                      <div className="flex gap-x-9 w-full  justify-between">
                        <input
                          type="email"
                          id="email"
                          class="bg-secondary border lg:w-5/6 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                          placeholder="Your new password"
                        />
                        <input
                          type="email"
                          id="email"
                          class="bg-secondary border lg:w-4/5 border-secondary text-gray-500 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                          placeholder="comfirm your new password"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="bg-secondary h-2 rounded mb-5 w-[49%]"></div>
                        <div className=" p-8 rounded-xl bg-secondary w-full lg:w-3/5">
                          <p className="font-semibold mb-3">
                            Password requirements:
                          </p>
                          <ul className="text-sm ps-3 space-y-1">
                            <li>
                              Minimum 8 characters long - the more, the better
                            </li>
                            <li>At least one lowercase character </li>
                            <li>At least one uppercase character </li>
                            <li>
                              At least one number, symbol, or whitespace
                              character{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* privacy */}
            <div
              id="Privacy and Safety"
              className="text-[#C9C9C9] bg-[#1C1832] p-5 rounded-xl mt-8  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Privacy and Safety</div>
                <hr className="my-4" />
                <div action="flex">
                  {/* box  */}
                  <div className="flex justify-between py-6 px-2">
                    <div className=" ">
                      <h1 className="font-bold text-sm mb-1">
                        Use 2-Step Verification
                      </h1>
                      <p className="text-slate-500 text-sm">
                        Ut vel lectus vel sem pretium pharetra
                      </p>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>{" "}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between py-6 px-2">
                    <div className=" ">
                      <h1 className="font-bold text-sm mb-1">Search History</h1>
                      <p className="text-slate-500 text-sm">
                        Nunc suscipit est quis tincidunt lobortis
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button className="p-1 px-4 text-sm text-secondary bg-[#E039FD] rounded-full">
                        View
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between py-6 px-2">
                    <div className=" ">
                      <h1 className="font-bold text-sm mb-1">Login activity</h1>
                      <p className="text-slate-500 text-sm">
                        Nunc eget libero posuere, cursus mi tincidunt, mattis
                        nisi
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button className="p-1 px-4 text-sm text-secondary bg-[#E039FD] rounded-full">
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* payment */}
            <div
              id="Payment methods"
              className=" text-[#C9C9C9] bg-[#1C1832] p-5 rounded-xl mt-8  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Payment methods</div>
                <hr className="my-4" />
                <div action="flex">
                  {/* box  */}
                  <div className="flex justify-between py-6 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-Free-Download-PNG.png"
                          className=" h-9"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">
                          Visa ending in 4321
                        </h1>
                        <p className="text-slate-500 text-sm">Expires 9/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="p-1 px-2 text-sm bg-slate-300 rounded text-slate-700">
                        Default
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between py-6 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzt21KU6cnhtPKUXswUOj6nhuMqpUGItQAVQ&usqp=CAU"
                          className=" h-9 me-2"
                          alt="master"
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">
                          Mastercard ending in 123
                        </h1>
                        <p className="text-slate-500 text-sm">Expires 9/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {/* <p className="p-1 px-2 text-sm bg-slate-200 rounded text-slate-500">
                      
                    </p> */}
                    </div>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* notification */}
            <div
              id="Notification"
              className="text-[#C9C9C9] bg-[#1C1832] p-5 rounded-xl mt-8  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Notifications</div>
                <hr className="my-4" />
                <div className="text-sm my-5 mb-7 text-slate-400">
                  In this setcion you will be able to configure the behaviour of
                  notifications in Dashly
                </div>
                <div className="p-4 flex bg-secondary  text-slate-400 rounded justify-between">
                  <p className="font-semibold text-sm flex   items-center">
                    TYPE
                  </p>
                  <div className="flex w-2/5 justify-around">
                    <div className="flex flex-col font-semibold justify-center items-center">
                      <FiMail className="text-3xl" />
                      <div className="">MAIL</div>
                    </div>
                    <div className="flex flex-col font-semibold justify-center items-center">
                      <PiBrowsers className="text-3xl " />
                      <div className="">BROWSER</div>
                    </div>
                    <div className="flex flex-col me-3 font-semibold justify-center items-center">
                      <MdAppShortcut className="text-3xl" />
                      <div className="">APP</div>
                    </div>
                  </div>
                </div>
                {/* checkbox  */}
                <div className="mt-4 p-3">
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="font-semibold">
                        Enable E-mail notification
                      </h1>
                      <p className="text-slate-400">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <div className="w-2/5 items-center flex justify-around">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="font-semibold">
                        Enable New Friend Notifications
                      </h1>
                      <p className="text-slate-400">
                        Nunc suscipit est quis tincidunt lobortis
                      </p>
                    </div>
                    <div className="w-2/5 items-center flex justify-around">
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="font-semibold">
                        Enable New Comment Notifications
                      </h1>
                      <p className="text-slate-400">
                        Nunc eget libero posuere, cursus mi tincidunt, mattis
                        nisi
                      </p>
                    </div>
                    <div className="w-2/5 items-center flex justify-around">
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="font-semibold">
                        Enable System Notifications
                      </h1>
                      <p className="text-slate-400">
                        In dapibus magna ac tellus lacinia, tempus pretium
                        mauris scelerisque
                      </p>
                    </div>
                    <div className="w-2/5 items-center flex justify-around">
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>
                  </div>
                  <hr className="my-6" />
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="font-semibold">Status changes</h1>
                      <p className="text-slate-400">
                        Ut viverra sapien ut purus ultricies, et euismod enim
                        viverra
                      </p>
                    </div>
                    <div className="w-2/5 items-center flex justify-around">
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        checked
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <input
                        id="red-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 appearance-none checked:bg-[#E039FD] text-[#C9C9C9] checked:text-[#C9C9C9] bg-gray-100border-secondary rounded  focus:ring-[##E039FD] dark:focus:ring-[##E039FD] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                    </div>
                  </div>
                  <hr className="my-6" />
                </div>
                <div action="flex">{/* box  */}</div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Connected accounts"
              className="text-[#C9C9C9] bg-[#1C1832] p-5 rounded-xl mt-8  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Connected Accounts</div>
                <hr className="my-4" />
                <div action="flex">
                  {/* box  */}
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="
                          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5KgbtV2oG2Mn7WiiBx6ZV1nyHygWpF1VhQ&usqp=CAU"
                          className=" h-10 rounded-sm"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">Google</h1>
                        <p className="text-slate-500 text-sm">
                          Etiam rhoncus leo et ex volutpat eleifend
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          checked
                          type="checkbox"
                          value=""
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="data:image/png;base64,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"
                          className=" h-10 rounded me-2"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">Github </h1>
                        <p className="text-slate-500 text-sm">
                          Vestibulum egestas erat nec nisl commodo egestas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          checked
                          type="checkbox"
                          value=""
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbQf0JfM3BvLv7ksbqSblvkyQoj1zW_ZGFhA&usqp=CAU"
                          className=" h-10 me-2"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">JIRA </h1>
                        <p className="text-slate-500 text-sm">
                          Maecenas sit amet nibh iaculis,
                          <span className="text-[#009EA9]">commodo</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZ2ouEBpyK3LZWQNcZlD00aPZfXaFPa1muA&usqp=CAU"
                          className=" h-9 me-2"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">AWS </h1>
                        <p className="text-slate-500 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="data:image/png;base64,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"
                          className=" h-9 me-2"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">Bitbucket </h1>
                        <p className="text-slate-500 text-sm">
                          Maecenas sit amet nibh iaculis,
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 px-2">
                    <div className=" flex">
                      <div className="flex items-center">
                        <img
                          src="data:image/png;base64,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"
                          className=" h-10 me-2"
                          alt=""
                        />
                      </div>

                      <div className="ms-4">
                        <h1 className="font-bold text-sm mb-1">Slack </h1>
                        <p className="text-slate-500 text-sm">
                          Sed dapibus sapien{" "}
                          <span className="text-[#009EA9]">vel bibendum</span>{" "}
                          egestas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#bc3cd3] dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E039FD]"></div>
                        {/* <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Toggle me</span> */}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="ms-auto transform w-1/5 duration-1000 transition text-center hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                  <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="Delete account"
              className="text-[#C9C9C9] bg-[#1C1832] p-5 rounded-xl mt-8  shadow-md"
            >
              <div>
                <div className="text-lg my-2 font-bold">Delete Account</div>
                <hr className="my-4" />

                <div className="p-6 ps-10 flex items-center rounded-sm bg-red-200">
                  <AiFillWarning className="text-red-600 text-4xl me-4" />
                  <div className="">
                    <p className="font-bold text-red-600 text-sm flex   items-center">
                      If you delete your account, you will lose all your data
                    </p>
                    <p className="text-red-600"> Take a backup of your data </p>
                  </div>
                </div>
                <div className="text-sm my-5 mb-7 gap-3 ps-2 flex">
                  <input type="checkbox" />I confirm that I'd like to delete my
                  account
                </div>
                <div action="flex">{/* box  */}</div>
                <button className="p-2 mt-5 px-5 ms-auto mb-2 flex text-secondary font-semibold hover:bg-red-600 duration-150 bg-red-500 rounded-full">
                  Delete account{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slate-400 flex w-full p-5 mt-2"></div>

        {/* second img */}
      </div>
    </div>
  );
};

export default Account;
