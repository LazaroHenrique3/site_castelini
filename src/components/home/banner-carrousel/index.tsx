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
import { IBannerSwipperImagesProps } from '@/types/IBannerSwipperImagesTypes';


export const BannerCarrousel = ({ bannerImages }: { bannerImages: IBannerSwipperImagesProps[]}) => {
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
          {bannerImages.map((image) => (
            <SwiperSlide key={image.description}>
              <Image className="object-contain object-top w-full h-full"  src={image.urlImage} alt={image.description} />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}

