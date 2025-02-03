"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './styles.css';

import { ProductCardSlider } from '../product-card-slider';

export const ProductsSlider = () => {
  return (
    <>
      <div className="w-full products">
        <Swiper
          slidesPerView={4} // Valor padrão para telas grandes
          spaceBetween={20} // Espaço entre os slides
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5500, // Tempo entre as transições automáticas (ms)
            disableOnInteraction: false, // Continuar o autoplay após interação
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Para telas pequenas
            768: { slidesPerView: 2, spaceBetween: 20 }, // Para telas médias
            1024: { slidesPerView: 4, spaceBetween: 30 }, // Para telas grandes
            1920: { slidesPerView: 5, spaceBetween: 30 } // Telas muito grandes (3xl)
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCardSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

