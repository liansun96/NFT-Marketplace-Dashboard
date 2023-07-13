import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { AuthorsPf } from "./Users";
import AuthorCard from "./AuthorCard";

const Authors = () => {
  return (
    <div className="w-full lg:w-[49%]">
      <div className="flex flex-col justify-between gap-3 px-5 pt-5 category-bg rounded-xl">
        <h5 className="text-md text-heading_text font-semibold">Authors</h5>

        <div className="block lg:hidden">
          <div className="flex items-center creator-swiper mobile">
            <Swiper
              slidesPerView={4}
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
              {AuthorsPf?.map((author) => (
                <SwiperSlide key={author?.id}>
                  <AuthorCard author={author} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="hidden lg:block 3xl:hidden">
          <div className="flex items-center creator-swiper">
            <Swiper
              slidesPerView={7}
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
              {AuthorsPf?.map((author) => (
                <SwiperSlide key={author?.id}>
                  <AuthorCard author={author} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="hidden 3xl:block">
          <div className="flex items-center creator-swiper">
            <Swiper
              slidesPerView={11}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {AuthorsPf?.map((author) => (
                <SwiperSlide key={author?.id}>
                  <AuthorCard author={author} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
