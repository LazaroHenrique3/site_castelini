"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

import { ITestimonialProp, TestimonialsCard } from './internal-components/testimonial-card';

const testimonials: ITestimonialProp[] = [
    {
        testimonialText: "Excelente atendimento e produtos de qualidade!",
        customer: "João Silva"
    },
    {
        testimonialText: "Adorei o serviço! A entrega foi rápida e o produto chegou em perfeito estado.",
        customer: "Maria Oliveira"
    },
    {
        testimonialText: "Muito satisfeito com a compra. Superou minhas expectativas!",
        customer: "Carlos Souza"
    },
    {
        testimonialText: "Ótima qualidade e excelente preço. Recomendo a todos!",
        customer: "Ana Costa"
    },
    {
        testimonialText: "Atendimento rápido e eficiente, definitivamente voltarei a comprar.",
        customer: "Fernando Lima"
    },
    {
        testimonialText: "Produto incrível! Exatamente o que eu esperava. Serviço impecável.",
        customer: "Patrícia Pereira"
    },
    {
        testimonialText: "Fiquei impressionado com a rapidez da entrega. Produto de alta qualidade.",
        customer: "Ricardo Almeida"
    },
    {
        testimonialText: "Excelente loja! Super recomendo pela variedade e qualidade dos produtos.",
        customer: "Juliana Santos"
    }
];

export const TestimonialsSlider = () => {
    return (
        <div className='w-full h-[680px]  swiper-container testimonials'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Autoplay, Pagination ]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialsCard customer={testimonial.customer} testimonialText={testimonial.testimonialText} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

