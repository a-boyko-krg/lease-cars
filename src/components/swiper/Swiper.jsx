import { EffectFade, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Slider() {
  return (
    <div className="swiper">
      <Swiper
        className="swiper-wrapper"
        modules={[EffectFade, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{ clickable: true }}
      >
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: 'url(/images/hero-1.avif)' }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: 'url(/images/hero-2.avif)' }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: 'url(/images/hero-3.avif)' }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: 'url(/images/hero-4.avif)' }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;
