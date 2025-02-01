"use client"
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IBannerSwipperImagesType } from '@/types/IBannerSwipperImagesType';

export const BannerCarrousel = ({ bannerImages }: { bannerImages: IBannerSwipperImagesType[] }) => {
  return (
    <div className='w-full h-full swiper-container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <>
          {bannerImages.map((image, key) => (
            <SwiperSlide key={key} className="flex items-center justify-center">
              <Image
                src={image.urlImage}
                alt={image.description}
                width={1920}
                height={800}
                className="w-full h-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}

