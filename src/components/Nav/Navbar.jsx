import React from "react";
import { BiSearch } from "react-icons/bi";
import { PiBell, PiMoon } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import { stateContextCustom } from "../../context/StateContext";
import uk from "../../assets/icons8-great-britain-96.png";
import Theme from "./Theme";
import Languages from "./Languages";
import Notification from "./Notification";
import Profile from "./Profile";
import MobileMenu from "../mobileMenu/MobileMenu";

const Navbar = () => {
  const {
    show,
    setShow,
    toggleShow,
    showLanguage,
    toggleLanguage,
    image,
    showNoti,
    toggleNoti,
    showSetting,
    toggleSetting,
    showProfile,
    toggleProfile,
    isOpen,
    setIsOpen
  } = stateContextCustom();
  console.log(image);
  const closeSideBars = () => {
    showNoti && toggleNoti();
    showSetting && toggleSetting();
    showProfile && toggleProfile();
  };

  return (
    <>
      <main className="bg-[#070b24ec] bg- flex relative w-full items-center justify-center md:justify-between md:px-10 p-5 shadow-lg">
        <div className="hidden relative w-[287.5px] md:flex items-center shadow rounded-md">
          <input
            type="text"
            className="bg-[#131129] text-white border border-dashed border-slate-600 text-sm w-full outline-none rounded-full py-2.5 px-4"
            placeholder="Search..."
          />
          <button className=" p-2 text-white rounded-lg absolute right-1">
            <BiSearch className="text-gray-400" />
          </button>
        </div>
        <div className="absolute top-0 right-0 block lg:hidden">
          <MobileMenu  isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="flex">
          {/* Select Theme */}
          <div onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt3 className="block lg:hidden cursor-pointer text-white text-4xl ms-auto" />
          </div>
          <div className="relative mx-5">
            <button onClick={toggleShow} className="nav-btn">
              <PiMoon className="" />
            </button>
            <div
              onClick={() => setShow(false)}
              className={`${
                !show ? "scale-y-0" : "scale-y-1"
              } transform transition origin-top duration-200 absolute right-0 z-10`}
            >
              <Theme />
            </div>
          </div>
          {/* Select Languages */}
          <div className="relative">
            <button onClick={toggleLanguage} className="nav-btn">
              <img src={image ? image : uk} alt="" className="w-[30px]" />
            </button>
            <div
              className={`${
                !showLanguage ? "scale-y-0" : "scale-y-1"
              } transform transition origin-top duration-200 absolute right-0 z-10`}
            >
              <Languages />
            </div>
          </div>
          {/* closed sidebar  */}
          <div
            onClick={closeSideBars}
            className={
              showNoti || showSetting || showProfile
                ? "w-full h-screen ml-[110px] fixed top-0 right-0 bg-transparent z-10"
                : null
            }
          ></div>
          <div className="flex gap-5 px-5">
            {/* Notification */}
            <div className="relative">
              <button onClick={toggleNoti} className="nav-btn">
                <PiBell />
                <span className="text-xs bg-gradient-to-r from-[#df2cff] to-[#6345ed] rounded-full text-white px-1.5 absolute -top-2 -right-3 z-10">
                  9+
                </span>
              </button>
              <div
                className={`${
                  !showNoti ? "scale-y-0" : "scale-y-1"
                } transform transition origin-top duration-200 absolute right-0 z-10`}
              >
                <Notification />
              </div>
            </div>
          </div>
          {/* Profile */}
          <div className="relative cursor-pointer">
            <div
              onClick={toggleProfile}
              className="w-[40px] h-[40px] rounded-full overflow-hidden ml-5"
            >
              <img
                className=""
                src="http://funto.designing-world.com/img/bg-img/u2.jpg"
                alt=""
              />
            </div>
            <span className="w-3 h-3 absolute right-0 bottom-0 border border-white rounded-full bg-green-500"></span>
            <div
              className={`${
                !showProfile ? "scale-y-0" : "scale-y-1"
              } transform transition origin-top duration-200 z-10 absolute right-0`}
            >
              <Profile />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
