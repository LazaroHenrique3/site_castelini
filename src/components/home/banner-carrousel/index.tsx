"use client"
import Image, { StaticImageData } from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imageOne from '../../../../public/images/banner/banner-image-1.jpg';
import imageTwo from '../../../../public/images/banner/banner-image-2.jpg';
import imageThree from '../../../../public/images/banner/banner-image-3.jpg';
import imageFour from '../../../../public/images/banner/banner-image-4.jpg';
import imageFive from '../../../../public/images/banner/banner-image-5.jpg';

interface IBannerSwipperImagesType {
  urlImage: StaticImageData;
  description: string;
}

const bannerImages: IBannerSwipperImagesType[] = [
  { urlImage: imageOne, description: 'Mulher com jaqueta' },
  { urlImage: imageTwo, description: 'Mulher com bolsa e cadernos' },
  { urlImage: imageThree, description: 'Mulher com jaqueta e regata branca' },
  { urlImage: imageFour, description: 'Mulher com roupa dourada' },
  { urlImage: imageFive, description: 'Mulher com chapéu e calça bege' }
]

export const BannerCarrousel = () => {
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

