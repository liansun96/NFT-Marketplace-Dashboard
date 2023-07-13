import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { BsHammer, BsFillGridFill, BsSpeedometer } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import "./Sitebar.css";

const Sidebar = () => {
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

  const isActiveAccount = location.pathname.startsWith("/account");

  return (
    <div className=" h-screen overflow-y-scroll bg-primary text-body_text sticky top-0 left-0 custom-dark-shadow">
      <Link to={'/'}>
        <div className="flex justify-between px-4 py-6">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
            className="mx-auto scale-125 my-2"
            alt=""
          />
        </div>
      </Link>
      <div className="px-4 py-6">
        <div className="bg-secondary custom-light-shadow p-5 rounded-xl">
          <h6 className="text-lg font-semibold text-center">Current Balance</h6>
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
              <Link to={"/"}>
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
              className={`${showBids && "-rotate-180"} text-lg duration-300`}
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
              showCollection ? "min-h-max opacity-100" : "h-0 opacity-0 hidden"
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
              className={`${showWallet && "-rotate-180"} text-lg duration-300`}
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
            <NavLink to={"/wallet"}>
              <li className="sub-site-link mb-3 hover:text-white sub-menu">
                Recharge
              </li>
            </NavLink>
          </ul>
        </li>
        <li onClick={() => setShowAuth(!showAuth)}>
          <Link
            className={`${
              isActiveAccount
                ? "active flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full"
                : ""
            }flex items-center justify-between hover:bg-gradient-to-r from-[#2a2846] to-[#23203d] py-4 px-4 rounded-full`}
          >
            <div className="flex gap-3 2xl:gap-4">
              <RiSettings4Fill className="text-lg" />
              <p className="text-sm font-semibold">Settings</p>
            </div>
            <FaAngleDown
              className={`${showAuth && "-rotate-180"} text-lg duration-300`}
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
    </div>
  );
};

export default Sidebar;
