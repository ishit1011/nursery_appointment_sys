import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import customerAvatar from '../../assets/images/customer-avatar.png';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={customerAvatar} alt="Customer Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Armaan Shanu
                </h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components here as needed */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
