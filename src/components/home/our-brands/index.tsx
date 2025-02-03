"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

import acostamento from '../../../../public/images/brands/acostamento.png'
import adidas from '../../../../public/images/brands/adidas.png'
import baumgarten from '../../../../public/images/brands/baumgarten.png'
import beiraRio from '../../../../public/images/brands/beira-rio.png'
import brandili from '../../../../public/images/brands/brandili.png'
import carinhoso from '../../../../public/images/brands/carinhoso.png'
import dakota from '../../../../public/images/brands/dakota.png'
import chenson from '../../../../public/images/brands/chenson.png'
import enfim from '../../../../public/images/brands/enfim.png'
import ferracini from '../../../../public/images/brands/ferracini.png'
import karsten from '../../../../public/images/brands/karsten.png'
import kyly from '../../../../public/images/brands/kyly.png'
import lezALez from '../../../../public/images/brands/lez-a-lez.png'
import lunender from '../../../../public/images/brands/lunender.png'
import malwee from '../../../../public/images/brands/malwee.png'
import moleca from '../../../../public/images/brands/moleca.png'
import ogochi from '../../../../public/images/brands/ogochi.png'
import paco from '../../../../public/images/brands/paco.png'
import viaMarte from '../../../../public/images/brands/via-marte.png'
import vizzano from '../../../../public/images/brands/vizzano.png'
import westCoast from '../../../../public/images/brands/west-coast.png'
import klin from '../../../../public/images/brands/klin.png'
import hering from '../../../../public/images/brands/hering.png'
import olympikus from '../../../../public/images/brands/olympikus.png'
import piccadilly from '../../../../public/images/brands/piccadilly.png'
import fila from '../../../../public/images/brands/fila.png'

interface IBransSwiperImagesType {
    urlImage: StaticImageData;
    description: string;
}

const bannerImages: IBransSwiperImagesType[] = [
    { urlImage: acostamento, description: 'logo-acostamento' },
    { urlImage: ogochi, description: 'logo-ogochi' },
    { urlImage: paco, description: 'logo-paco' },
    { urlImage: adidas, description: 'logo-adidas' },
    { urlImage: baumgarten, description: 'logo-baumgarten' },
    { urlImage: beiraRio, description: 'logo-beira-rio' },
    { urlImage: brandili, description: 'logo-brandili' },
    { urlImage: carinhoso, description: 'logo-carinhoso' },
    { urlImage: dakota, description: 'logo-dakota' },
    { urlImage: chenson, description: 'logo-chenson' },
    { urlImage: enfim, description: 'logo-enfim' },
    { urlImage: ferracini, description: 'logo-ferracini' },
    { urlImage: karsten, description: 'logo-karsten' },
    { urlImage: kyly, description: 'logo-kyly' },
    { urlImage: lezALez, description: 'logo-lez-a-lez' },
    { urlImage: lunender, description: 'logo-lunender' },
    { urlImage: malwee, description: 'logo-malwee' },
    { urlImage: moleca, description: 'logo-moleca' },
    { urlImage: viaMarte, description: 'logo-via-marte' },
    { urlImage: vizzano, description: 'logo-vizzano' },
    { urlImage: westCoast, description: 'logo-west-coast' },
    { urlImage: klin, description: 'logo-klin' },
    { urlImage: hering, description: 'logo-hering' },
    { urlImage: olympikus, description: 'logo-olympikus' },
    { urlImage: piccadilly, description: 'logo-piccadily' },
    { urlImage: fila, description: 'logo-fila' },
];

export const OurBrands = () => {
    return (
        <div className="text-center h- mb-16 px-7 flex flex-col justify-center">
            <div className="mb-8">
                <p className="text-xl font-bold text-gray-800">
                    Trabalhamos com marcas de <span className="text-4xl font-extrabold text-primary-red">referência no mercado</span>
                </p>
                <p className="text-xl text-gray-600 mt-2">
                    Garantindo qualidade, confiança e inovação para nossos clientes
                </p>
            </div>

            <div className="w-full brand-swiper flex items-center">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 8,
                        },
                    }}
                >
                    {bannerImages.map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="h-full p-4 flex justify-center items-center">
                                <Image
                                    width={120}  // Ajustável conforme necessidade
                                    height={80}  // Ajustável conforme necessidade
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                                    src={image.urlImage}
                                    alt={image.description}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
