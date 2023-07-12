import React from "react";
import "./Charts.css";
import { autions } from "./Activity";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import TrendingCard from "./TrendingCard";

const TrendingActions = () => {
  return (
    <div className="flex flex-col gap-5 justify-between py-5 ps-5 bg-secondary rounded-xl w-full lg:w-[49%] 2xl:w-[49%]">
      <div className="flex items-center gap-1">
        <div className="">
          <img
            src="http://funto.designing-world.com/img/core-img/fire2.png"
            alt=""
          />
        </div>
        <h5 className="text-xl text-white font-semibold">Trending Actions</h5>
      </div>

      <div className="hidden lg:block 3xl:hidden trending overflow-hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper hidden lg:block"
        >
          {autions?.map((aution) => (
            <SwiperSlide key={aution?.id}>
              <TrendingCard aution={aution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:hidden trending overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper hidden lg:block"
        >
          {autions?.map((aution) => (
            <SwiperSlide key={aution?.id}>
              <TrendingCard aution={aution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden 3xl:block trending overflow-hidden">
        <Swiper
          slidesPerView={2.2}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper hidden lg:block"
        >
          {autions?.map((aution) => (
            <SwiperSlide key={aution?.id}>
              <TrendingCard aution={aution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingActions;
