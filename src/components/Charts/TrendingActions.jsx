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
    <div className="flex flex-col gap-5 justify-between p-5 lg:py-5 lg:ps-5 category-bg rounded-xl w-full lg:w-[49.3%]">
      <div className="flex items-center gap-1">
        <div className="">
          <img
            src="http://funto.designing-world.com/img/core-img/fire2.png"
            alt=""
          />
        </div>
        <h5 className="text-xl text-white font-semibold">Trending Actions</h5>
      </div>

      <div className="hidden lg:block 2xl:hidden trending overflow-hidden">
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

      <div className="hidden 2xl:block 3xl:hidden trending overflow-hidden">
        <Swiper
          slidesPerView={2.3}
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

      <div className="hidden 3xl:block 4xl:hidden trending overflow-hidden">
        <Swiper
          slidesPerView={2.8}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
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

      <div className="hidden 4xl:block trending overflow-hidden">
        <Swiper
          slidesPerView={3.7}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
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
