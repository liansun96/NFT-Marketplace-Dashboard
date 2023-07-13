import React, { useState } from "react";
import {
  FaInstagram,
  FaPinterest,
  FaTimes,
  FaTwitter,
  FaYoutube,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { stateContextCustom } from "../../context/StateContext";
import { FaAngleDown } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { BsHammer, BsFillGridFill, BsSpeedometer } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";

const MobileMenu = () => {
  const { isOpen, setIsOpen } = stateContextCustom();

  const [showBids, setShowBids] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const location = useLocation();
  const isActiveBids =
    location.pathname.startsWith("/bids-list") ||
    location.pathname.startsWith("/create-new-bid");

  const isActiveCollection =
    location.pathname.startsWith("/collection-list") ||
    location.pathname.startsWith("/create-new-collection");

  const isActiveWallet =
    location.pathname.startsWith("/wallet") ||
    location.pathname.startsWith("/recharge");

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen ? "translate-x-[900px]" : "translate-x-0"
      } transform duration-1000 fixed  inset-0 bg-transparent bg-opacity-25 text-body_text  backdrop-blur-[2px] z-50 overflow-scroll`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` bg-primary w-[75%] md:w-[40%] min-h-screen ms-auto`}
      >
        <div className="flex flex-col gap-2 py-5">
          <div className="flex justify-between items-center px-6">
            <div className="">
              <img
                src="https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
                className="h-[20px]"
                alt=""
              />
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <FaTimes
                className={`${
                  isOpen ? "null" : "rotate-[180deg] duration-[1.5s]"
                } text-heading_text `}
              />
            </div>
          </div>

          <div className="px-4 py-6">
            <div className="bg-secondary custom-light-shadow p-5 rounded-xl">
              <h6 className="text-lg font-semibold text-center">
                Current Balance
              </h6>
              <div className="flex items-center justify-start 3xl:justify-center gap-3 my-3">
                <img
                  src="http://funto.designing-world.com/img/core-img/ethereum.png"
                  alt=""
                  className="ms-1 2xl:ms-3"
                />
                <p className="text-lg text-white font-semibold">
                  4.0678 <span className="">ETH</span>
                </p>
              </div>
              <div className="transform duration-1000 transition text-center hover:bg-gradient-to-l from-[#cc42e4] to-[#6345ed] bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <Link to={"/wallet"}>
                    <button className="px-6 py-2 text-sm  font-bold text-heading_text">
                      RECHARGE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="transition-all px-4 py-6">
            <li className="w-full">
              <NavLink
                className={`flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d]  py-4 px-4 rounded-full`}
                to={"/"}
              >
                <div className="flex gap-3 2xl:gap-4 w-full">
                  <BsSpeedometer className="text-xl" />
                  <p className="text-sm font-semibold">Dashboards</p>
                </div>
              </NavLink>
            </li>
            <li onClick={() => setShowBids(!showBids)}>
              <Link
                className={`
           ${
             isActiveBids
               ? "active flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full"
               : ""
           }flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full`}
              >
                <div className="flex gap-3 2xl:gap-4">
                  <BsHammer className="text-xl" />
                  <p className="text-sm font-semibold">Live Bids</p>
                </div>

                <FaAngleDown
                  className={`${
                    showBids && "-rotate-180"
                  } text-lg duration-300`}
                />
              </Link>
              <ul
                onClick={(e) => e.stopPropagation()}
                className={`${
                  showBids ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
                } duration-10 ms-16 text-xs font-bold cursor-pointer`}
              >
                <NavLink to={"/bids-list"}>
                  <li className="sub-site-link my-3 hover:text-white sub-menu">
                    Bids List
                  </li>
                </NavLink>
                <NavLink to={"/create-new-bid"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Create New
                  </li>
                </NavLink>
              </ul>
            </li>

            <li onClick={() => setShowCollection(!showCollection)}>
              <Link
                className={`${
                  isActiveCollection
                    ? "active flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full"
                    : ""
                }flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full`}
              >
                <div className="flex gap-3 2xl:gap-4">
                  <BsFillGridFill className="transform -scale-y-100 text-lg" />
                  <p className="text-sm font-semibold">Collection</p>
                </div>
                <FaAngleDown
                  className={`${
                    showCollection && "-rotate-180"
                  } text-lg duration-300`}
                />
              </Link>
              <ul
                onClick={(e) => e.stopPropagation()}
                className={`${
                  showCollection
                    ? "min-h-max opacity-100"
                    : "h-0 opacity-0 hidden"
                } duration-10 ms-16 text-xs font-bold cursor-pointer`}
              >
                <NavLink to={"/collection-list"}>
                  <li className="sub-site-link my-3 hover:text-white sub-menu">
                    Collection List
                  </li>
                </NavLink>
                <NavLink to={"/create-new-collection"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Create New
                  </li>
                </NavLink>
              </ul>
            </li>
            <li onClick={() => setShowWallet(!showWallet)}>
              <Link
                className={`${
                  isActiveWallet
                    ? "active flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full"
                    : ""
                }flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full`}
              >
                <div className="flex gap-3 2xl:gap-4">
                  <IoIosWallet className="text-xl" />
                  <p className="text-sm font-semibold">Wallet</p>
                </div>
                <FaAngleDown
                  className={`${
                    showWallet && "-rotate-180"
                  } text-lg duration-300`}
                />
              </Link>
              <ul
                onClick={(e) => e.stopPropagation()}
                className={`${
                  showWallet ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
                } duration-10 ms-16 text-xs font-bold cursor-pointer`}
              >
                <NavLink to="/wallet">
                  <li className="sub-site-link my-3 hover:text-white sub-menu">
                    My Wallet
                  </li>
                </NavLink>
                <NavLink to={"/recharge"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Recharge
                  </li>
                </NavLink>
              </ul>
            </li>
            <li onClick={() => setShowAuth(!showAuth)}>
              <Link className="flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d]  py-4 px-4 rounded-full">
                <div className="flex gap-3 2xl:gap-4">
                  <RiSettings4Fill className="text-lg" />
                  <p className="text-sm font-semibold">Settings</p>
                </div>
                <FaAngleDown
                  className={`${
                    showAuth && "-rotate-180"
                  } text-lg duration-300`}
                />
              </Link>
              <ul
                onClick={(e) => e.stopPropagation()}
                className={`${
                  showAuth ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
                } duration-10 ms-16 text-xs font-bold cursor-pointer`}
              >
                <Link to={"/account"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Account
                  </li>
                </Link>
                <Link to={"/account"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Reset Password
                  </li>
                </Link>
                <Link to={"/account"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Email Verification
                  </li>
                </Link>
                <Link to={"/account"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    2-setp Verification
                  </li>
                </Link>
                <Link to={"/account"}>
                  <li className="sub-site-link mb-3 hover:text-white sub-menu">
                    Error
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
          <div className="border border-icon_border" />
          <div className="flex justify-between items-center gap-3 mt-4 px-8">
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaTwitter className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaFacebookF className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaPinterest className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaInstagram className="text-heading_text" />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] border border-icon_border hover:bg-purple rounded bg-transparent cursor-pointer duration-500">
              <FaYoutube className="text-heading_text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
