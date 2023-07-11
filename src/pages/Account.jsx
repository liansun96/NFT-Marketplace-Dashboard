import React from "react";
import { PiPencilDuotone, PiBrowsers } from "react-icons/pi";
import { FaRegUserCircle, FaFingerprint } from "react-icons/fa";
import { BsPerson, BsBell, BsTrash, BsCreditCard } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdAppShortcut } from "react-icons/md";
import "../index.css";
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
    <div className="px-5 mx-auto mt-7">
      <div className="grid gap-x-10 grid-cols-12">
        {/* first */}
        <div className="flex col-span-12  justify-between">
          <h1 className=" text-lg font-bold">Account</h1>
          <div className="flex">
            <p className="text-slate-500 text-sm">pages</p>
            <p className="text-slate-500 mx-2 mt-1 text-sm">
              <AiOutlineRight />
            </p>
            <p className="text-black text-sm">Account</p>
          </div>
        </div>
        <div className="md:sticky top-0 bg-[#FFFFFF] h-[700px] rounded-xl shadow-md lg:col-span-3 col-span-12 md:col-span-4 w-full mt-3">
          <div className="flex flex-col items-center pt-8 mx-auto ">
            <div className="relative cursor-pointer mb-3">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
                <img
                  className=""
                  src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                  alt=""
                />
              </div>
              <span className="w-8 h-8 absolute right-0 bottom-0 border border-white text-center flex justify-center items-center text-white rounded-full bg-[#00BAC7]">
                <PiPencilDuotone />
              </span>
            </div>
            <h1 className="font-bold text-xl">Ellie Tucker</h1>
            <p className="text-slate-500">Assistant Manager</p>
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
                      className="flex ps-5 py-3 hover:text-[#00BAC7] hover:border-s-2
                 hover:border-s-[#00BAC7] text-slate-900"
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
            <button className="bg-gray-400 p-3 px-6 rounded-full mx-auto flex hover:bg-gray-500 duration-150 text-white font-bold">
              View Public Profile
            </button>
            <br />
          </div>
        </div>
        {/* third  */}
        <div className=" col-span-12  mt-3 md:col-span-8 lg:col-span-9">
          <div
            id="Basic information"
            className=" bg-[#ffffff] p-4 rounded-xl  shadow-md"
          >
            <div>
              <div className="text-lg my-2 font-bold">Basic information</div>
              <hr className="my-4" />
              <div action="flex">
                {/* form con  */}
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Full Name
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"hello"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Phone
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"+1(119)980-03-11"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Email address
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"ellie.tucker@dashly.com"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Location
                  </p>
                  {/* <CountrySelect/> */}

                  <div className="flex w-4/5">
                    <button
                      id="states-button"
                      data-dropdown-toggle="dropdown-states"
                      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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
                          <rect x="0.5" width="6" height="5.6" fill="#46467F" />
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
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="states-button"
                      >
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
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
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            <div className="inline-flex items-center">
                              <svg
                                aria-hidden="true"
                                className="h-3.5 w-3.5 rounded-full mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                id="flag-icon-css-de"
                                viewBox="0 0 512 512"
                              >
                                <path fill="#ffce00" d="M0 341.3h512V512H0z" />
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
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
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
                                  <path fill="#009246" d="M0 0h170.7v512H0z" />
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
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"Houston"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0"></p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"Texas"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Address line 1
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"3227 Wines Lane"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex-col justify-start flex font-semibold mb-2 ms-1 lg:mb-0">
                    Address Line 2
                    <p className="text-slate-300 text-start flex justify-start">
                      (optional)
                    </p>
                  </p>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#c] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={""}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Zip code
                  </p>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    defaultValue={"77032"}
                  />
                </div>
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm flex font-semibold mb-2 ms-1 lg:mb-0">
                    Overview
                  </p>
                  {/* <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                  defaultValue={"hello"}
                /> */}
                  <textarea
                    className="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* fourth  */}
          <div
            id="Username"
            className=" bg-[#ffffff] p-4 rounded-xl mt-7  shadow-md"
          >
            <div>
              <div className="text-lg my-2 font-bold">User</div>
              <hr className="my-4" />
              <p className="text-slate-300">
                Your current username is{" "}
                <span className="text-slate-400">@ellietucker</span>
              </p>
              <div action="flex">
                {/* form con  */}
                <div className="flex flex-col my-6 lg:justify-between lg:flex-row">
                  <p className="text-sm items-center flex font-semibold mb-2 ms-1 lg:mb-0">
                    Username
                  </p>
                  <div class="flex w-4/5">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      @
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bonnie Green"
                    />
                  </div>
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* pswd  */}
          <div
            id="Password"
            className=" bg-[#ffffff] p-4 rounded-xl mt-7  shadow-md"
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
                    class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
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
                        class="bg-gray-50 border lg:w-5/6  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                        placeholder="Your new password"
                      />
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-50 border lg:w-4/5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00BAC7] focus:border-[#00BAC7] block w-full p-2.5"
                        placeholder="comfirm your new password"
                      />
                    </div>
                    <div className="mt-2">
                      <div className="bg-slate-200 h-2 rounded mb-5 w-[49%]"></div>
                      <div className=" p-8 rounded-xl bg-slate-100 w-full lg:w-3/5">
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
                            At least one number, symbol, or whitespace character{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="p-2 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* privacy */}
          <div
            id="Privacy and Safety"
            className=" bg-[#ffffff] p-5 rounded-xl mt-8  shadow-md"
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
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
                    <button className="p-1 px-4 text-sm text-[#4dbfdf] bg-[#d5f4ff] rounded-full">
                      View
                    </button>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-6 px-2">
                  <div className=" ">
                    <h1 className="font-bold text-sm mb-1">Login activity</h1>
                    <p className="text-slate-500 text-sm">
                      Nunc eget libero posuere, cursus mi tincidunt, mattis nisi
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button className="p-1 px-4 text-sm text-[#6EC6DE] bg-[#d5f4ff] rounded-full">
                      View
                    </button>
                  </div>
                </div>
              </div>
              <button className="p-2 mt-3 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* payment */}
          <div
            id="Payment methods"
            className=" bg-[#ffffff] p-5 rounded-xl mt-8  shadow-md"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQMdA4jsleiQxE7GxcbR4j0CvoxQAeSUMkhPwnsWY&s"
                        className=" h-4"
                        alt=""
                      />
                    </div>

                    <div className="ms-4">
                      <h1 className="font-bold text-sm mb-1">
                        Use 2-Step Verification
                      </h1>
                      <p className="text-slate-500 text-sm">Expires 9/2024</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="p-1 px-2 text-sm bg-slate-200 rounded text-slate-500">
                      Default
                    </p>
                  </div>
                </div>
                <div className="flex justify-between py-6 px-2">
                  <div className=" flex">
                    <div className="flex items-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvxhoX8Di6MVYIUqF52pNjly9EvmqBtRi_zuSg5B3&s"
                        className=" h-6 me-2"
                        alt=""
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
              <button className="p-2 mt-1 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          {/* notification */}
          <div
            id="Notification"
            className=" bg-[#ffffff] p-5 rounded-xl mt-8  shadow-md"
          >
            <div>
              <div className="text-lg my-2 font-bold">Notifications</div>
              <hr className="my-4" />
              <div className="text-sm my-5 mb-7 text-slate-400">
                In this setcion you will be able to configure the behaviour of
                notifications in Dashly
              </div>
              <div className="p-4 flex bg-slate-200  text-slate-400 rounded justify-between">
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
                    <p className="text-slate-400">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="w-2/5 items-center flex justify-around">
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      Nunc eget libero posuere, cursus mi tincidunt, mattis nisi
                    </p>
                  </div>
                  <div className="w-2/5 items-center flex justify-around">
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      In dapibus magna ac tellus lacinia, tempus pretium mauris
                      scelerisque
                    </p>
                  </div>
                  <div className="w-2/5 items-center flex justify-around">
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 appearance-none checked:bg-[#2caab3] text-white checked:text-white bg-gray-100 border-gray-300 rounded  focus:ring-[#2caab3] dark:focus:ring-[#2caab3] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                  </div>
                </div>
                <hr className="my-6" />
              </div>
              <div action="flex">{/* box  */}</div>
              <button className="p-2 mt-1 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          <div
            id="Connected accounts"
            className=" bg-[#ffffff] p-5 rounded-xl mt-8  shadow-md"
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
                        src="data:image/png;base64,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"
                        className=" h-9"
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
                    </label>
                  </div>
                </div>
                <div className="flex justify-between py-4 px-2">
                  <div className=" flex">
                    <div className="flex items-center">
                      <img
                        src="data:image/jpeg;base64,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"
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
                    </label>
                  </div>
                </div>
                <div className="flex justify-between py-4 px-2">
                  <div className=" flex">
                    <div className="flex items-center">
                      <img
                        src="data:image/png;base64,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"
                        className=" h-6 me-2"
                        alt=""
                      />
                    </div>

                    <div className="ms-4">
                      <h1 className="font-bold text-sm mb-1">AWS </h1>
                      <p className="text-slate-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
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
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00BAC7]"></div>
                      {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
                    </label>
                  </div>
                </div>
              </div>
              <button className="p-2 mt-3 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-[#2caab3] duration-150 bg-[#00BAC7] rounded-full">
                Save changes
              </button>
            </div>
          </div>
          <div
            id="Delete account"
            className=" bg-[#ffffff] p-5 rounded-xl mt-8  shadow-md"
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
              <button className="p-2 mt-5 px-5 ms-auto mb-2 flex text-white font-semibold hover:bg-red-600 duration-150 bg-red-500 rounded-full">
                Delete account{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-400 flex w-full p-5 my-5">
        © Dashly. 2023 Webinning.{" "}
      </div>

      {/* second img */}
    </div>
  );
};

export default Account;
