import React from "react";
import "../../index.css";
import { AiFillHeart, AiOutlineTwitter, AiOutlineRight } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { HiShare } from "react-icons/hi";
import { FaPinterestP, FaLinkedinIn, FaRocket } from "react-icons/fa";
import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { activeBids } from "../../constants/livebids";

const ItemDetail = () => {
  const { id } = useParams();
  console.log(activeBids);

  const activeBidsId = id;
  const activeBid = activeBids.find((item) => item.id === activeBidsId);
  console.log(activeBidsId);

  return (
    <div className="min-h-full bg-secondary font-Poppins">
      <div className="">
        <div className="mb-6">
          <Navbar />
        </div>

        <div className="w-[95%] my-6 flex mx-auto 3xl:w-3/4 justify-between">
          <Link to="/bids-list">
            <h1 className="sm:p-3 p-2 text-gray-300 px-4 sm:px-6 text-xs sm:text-sm rounded-full  hover:bg-[#E039FD] duration-200 bg-[#241F3D] font-semibold">
              GO BACK TO BIDS LIST
            </h1>
          </Link>         
        </div>
      </div>

      {/* container  */}
      <div className="w-[95%] col-span-8 grid gap-2 mx-auto grid-cols-8">
        {/* img */}
        <div className="hidden 3xl:block col-span-1"></div>
        <div className="bg-primary scale-95 rounded-3xl sm:max-md:col-span-8 col-span-8 3xl:col-span-3 lg:col-span-4">
          <img
            className="mx-auto w-full h-full overflow-hidden rounded-3xl -translate-x-2 -translate-y-2"
            src={activeBid.itemImage}
            alt="photo"
          />
        </div>
        {/* text */}
        <div className=" p-3 sm:max-md:col-span-8 sm:max-md:px-8 3xl:col-span-3 col-span-8 lg:col-span-4">
          {/* header  */}
          <div className="flex justify-between">
            <div className="">
              <p className="text-white  items-center flex h-full sm:text-[2rem] tracking-wider text-4xl font-bold">
                {activeBid.title}
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[45px] duration-[0.3s] bg-[#241F3D] hover:bg-[#E039FD] text-white flex justify-center items-center h-[45px]  rounded-full">
                <HiShare />
              </div>
              <div className="sm:ms-4 ms-2 duration-[0.3s] bg-[#241F3D] hover:bg-[#E039FD] text-white text-lg w-[45px] h-[45px] flex justify-center items-center rounded-full">
                <BsThreeDots />
              </div>
            </div>
          </div>
          {/* below header  */}
          <div className="mt-3 flex">
            <p className="text-gray-300 font-bold">
              Owned by <span className=" ms-1 text-[#E039FD]">B14484</span>
            </p>
            <p className="ms-7 font-bold text-gray-300  flex items-center">
              <AiFillHeart className="me-2 text-[#E039FD]" />6 favorites
            </p>
          </div>
          {/* card */}
          <div className="columns-2 mt-6 gap-3 sm:gap-7 ">
            <div className="bg-[#241F3D] shadow-xl md:max-lg:flex-col flex-none  xl:flex rounded-md p-4">
              <img
                className="rounded-full md:max-lg:mx-auto md:max-lg:mb-2 mx-auto xl:mx-0 md:max-lg:w-[50px] h-[50px]"
                src={activeBid.recentOfferProfile}
                alt="girl"
              />
              <div className="md:max-lg:text-center text-center xl:ms-5">
                <h1 className="font-semibold sm:font-bold mt-2 sm:mt-0 text-lg hover:text-[#E039FD] duration-200 text-white">
                  David Michels
                </h1>
                <p className="text-gray-300 xl:text-start">Creators by</p>
              </div>
            </div>
            {/* card  */}
            <div className="bg-[#241F3D] shadow-xl md:max-lg:flex-col flex-none  xl:flex rounded-md p-4">
              <img
                className="rounded-full md:max-lg:mx-auto md:max-lg:mb-2 mx-auto xl:mx-0 md:max-lg:w-[50px] h-[50px]"
                src="https://themebeyond.com/html/nftmak/assets/img/others/mp_avatar02.png"
                alt="girl"
              />
              <div className="md:max-lg:text-center text-center xl:ms-5">
                <h1 className="font-semibold sm:font-bold mt-2 sm:mt-0 duration-200 text-lg hover:text-[#E039FD] text-white">
                  MR. Tartos
                </h1>
                <p className="text-gray-300 xl:text-start">Creators by</p>
              </div>
            </div>
          </div>
          {/* text  */}
          <p className="text-[15px] my-9 text-body_text">
            What even is an NFT? NFT stands for non-fungible token, which
            basically means that it's one-of-kind digital asset that belongs to
            you and you only. The most popular NFTs right now include artwork
            and music also include videos.
          </p>
          {/* block */}
          <div className="grid bg-[#241F3D] p-5  pb-6 rounded-lg mt-5 grid-cols-2 gap-1">
            <div className="md:max-lg:col-span-2 col-span-2 xl:col-span-1">
              <p className=" font-semibold text-white">Highest bid</p>
              <div className="flex mt-5">
                <img
                  className="rounded-full h-[50px]"
                  src="https://themebeyond.com/html/nftmak/assets/img/others/heighest_avatar.png"
                  alt="girl"
                />
                <div className="ms-5">
                  <h1 className="font-semibold duration-200 hover:text-[#E039FD] text-white">
                    Tomas lindahl
                  </h1>
                  <p className="text-gray-300 text-sm ">3.005wETH</p>
                </div>
              </div>
            </div>
            <div className="md:max-lg:col-span-2 col-span-2 xl:col-span-1 md:max-lg:mt-3">
              <p className=" font-semibold text-white">Auction has ended</p>
              <div className="mt-4  rounded-md p-1 bg-gradient-to-r from-[#5338B5] to-[#DF39FD] gap-2">
                <div className="grid p-2 pe-3 rounded-sm bg-[#241F3D] grid-cols-4">
                  <div className="text-white text-center">
                    <p className="font-semibold">
                      {Math.floor(Math.random() * 31) + 1}
                    </p>
                    <p className="text-xs font-light">DAY</p>
                  </div>
                  <div className="text-white text-center">
                    <p className="font-semibold">
                      {Math.floor(Math.random() * 31) + 1}
                    </p>
                    <p className="text-xs font-light">HOURS</p>
                  </div>
                  <div className="text-white text-center">
                    <p className="font-semibold">
                      {Math.floor(Math.random() * 31) + 1}
                    </p>
                    <p className="text-xs font-light">MINUT</p>
                  </div>
                  <div className="text-center text-white">
                    <p className=" font-semibold">
                      {Math.floor(Math.random() * 31) + 1}
                    </p>
                    <p className="text-xs font-light ">SECOND</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bit */}
          <div className="mt-7 border-[3px] border-white duration-200 group hover:border-[#E039FD] p-3 rounded-full justify-center flex">
            <p className="text-lg font-semibold  duration-200 group-hover:text-[#E039FD] text-white">
              PLACE A BID
            </p>
          </div>
        </div>
      </div>
      {/* second container  */}
      <div className="w-[95%] col-span-8 my-8  grid gap-2 mx-auto grid-cols-8">
        <div className="hidden 3xl:block col-span-1"></div>
        {/* scroll */}
        <div className="md:px-3 3xl:col-span-3 px-2 sm:px-6 col-span-8  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto">
          {/* <div className="md:px-3 px-6 col-span-8 md:max-lg:mx-auto  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto"> */}
          <div className="relative overflow-x-scroll sm:rounded-lg">
            <div className="w-full h-[445px]">
              <table className="w-full ">
                <tbody>
                  <tr className="text-white ">
                    <th
                      colSpan={2}
                      className="text-3xl  py-4 ps-3 font-semibold text-start"
                    >
                      Description
                    </th>
                    <td className="text-base font-bold text-gray-300 ">Floor Price</td>
                    <td className="text-base font-bold text-gray-300 ">Owners</td>
                    <td className="text-base font-bold text-gray-300  text-center">
                      Assets
                    </td>
                  </tr>
                  <tr className="bg-[#1D1933] border-[#070B24] border-y-[10px]  mt-4 text-white">
                    <td colSpan={2} className="p-4  items-center">
                      <img
                        src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author01.png"
                        alt=""
                        className="inline"
                      />
                      <h1 className="text-gray-200 text-[15px] font-light inline ms-3">
                        Trading Pet
                      </h1>
                    </td>
                    <td className="text-gray-300 font-light text-sm text-center">
                      +5486%
                    </td>
                    <td className="text-gray-300 font-light text-sm text-center">
                      -965%{" "}
                    </td>
                    <td className=" text-gray-300 font-light text-sm text-center pe-4">
                      2,356 ETH
                    </td>
                  </tr>
                  <tr className="bg-[#1D1933]  border-[#070B24] border-y-[15px]  mt-4 text-white">
                    <td colSpan={2} className="p-4 items-center">
                      <img
                        src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author02.png"
                        alt=""
                        className="inline"
                      />
                      <h1 className="text-[15px] text-gray-200 inline ms-3">
                        Trading Craft
                      </h1>
                    </td>
                    <td className="text-gray-300 text-sm text-center">
                      +5486%
                    </td>
                    <td className="text-gray-300 text-sm text-center">
                      -965%
                    </td>
                    <td className="text-gray-300 text-sm text-center pe-4">
                      2,356 ETH
                    </td>
                  </tr>
                  <tr className="bg-[#1D1933]  border-[#070B24] border-y-[10px]  mt-4 text-white">
                    <td colSpan={2} className="p-4 items-center">
                      <img
                        src="https://themebeyond.com/html/nftmak/assets/img/others/mp_activity_author03.png"
                        alt=""
                        className="inline"
                      />
                      <h1 className="text-[15px] text-gray-200  inline ms-3">
                        Trading Card
                      </h1>
                    </td>
                    <td className="text-gray-300 text-sm text-center">
                      +5486%
                    </td>
                    <td className="text-gray-300 text-sm text-center">
                      -965%
                    </td>
                    <td className="text-gray-300 text-sm text-center pe-4">
                      2,356 ETH
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* right scroll   */}
        <div className=" text-white 3xl:col-span-3 p-3 xl:px-3 px-2 sm:px-6 col-span-8  md:col-span-4 sm:max-md:col-span-8 sm:max-md:mx-auto sm:max-md:px-11">
          <div className="felx">
            <div className="grid grid-cols-8 border-b-2 mb-3 border-gray-800 py-2 pb-4">
              <div className="col-span-3 xl:col-span-2 md:max-lg:col-span-3">
                <NavLink
                  to=" "
                  className={({ isActive }) =>
                    isActive
                      ? "inline font-semibold text-lg  text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                      : " text-lg"
                  }
                >
                  Bid History
                </NavLink>
              </div>
              <div className="col-span-2 xl:col-span-1 md:max-lg:col-span-2">
                <NavLink
                  to="info"
                  className={({ isActive }) =>
                    isActive
                      ? "inline font-semibold text-lg  text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                      : " text-lg"
                  }
                >
                  Info
                </NavLink>
              </div>
              <div className="col-span-1">
                <NavLink
                  to="pro"
                  className={({ isActive }) =>
                    isActive
                      ? "inline font-semibold text-lg  text-transparent bg-clip-text bg-gradient-to-r from-[#5338B5] to-[#DF39FD]"
                      : " text-lg"
                  }
                >
                  Provenance
                </NavLink>
              </div>
            </div>
            <div className="h-[345px] overflow-y-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
