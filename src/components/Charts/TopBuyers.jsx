import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { TopBuyersPf } from "./Users";
import BuyerCard from "./BuyerCard";

const TopBuyers = () => {
  return (
    <div className="w-[49%]">
      <div className="flex flex-col justify-between gap-3 px-5 pt-5 bg-secondary rounded-xl">
        <h5 className="text-md text-heading_text font-semibold">Top Buyers</h5>

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
            {TopBuyersPf?.map((buyer) => (
              <SwiperSlide key={buyer?.id}>
                <BuyerCard buyer={buyer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopBuyers;
