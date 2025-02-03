"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import { TestimonialsCard } from './internal-components/testimonial-card';
import { useEffect, useState } from 'react';
import { getCustomersFeedbackInfoAction } from '@/app/action/google-sheets-feedback/getCustomersFeedbackInfoAction';
import { IFeedbackResponse } from '@/app/services/google-sheets-feedback/getCustomersFeedbackInfoService';
import { Loading } from '@/components/loading';


export const TestimonialsSlider = () => {
    const [sheetTestimonials, setSheetTestimonials] = useState<IFeedbackResponse[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            setIsLoading(true);

            try {
                const response = await getCustomersFeedbackInfoAction();
                // Caso de erro
                if (!response.success) {
                    console.error(response.error);
                    return;
                }

                // Caso de sucesso
                setSheetTestimonials(response.data);
            } catch (error) {
                console.error("Erro ao carregar feedbacks:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeedbacks(); // Chama a função quando o componente for montado
    }, []); // O array vazio [] faz com que o efeito seja executado apenas na montagem do componente

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='w-full h-[680px] swiper-container testimonials'>
            {sheetTestimonials.length > 0 && (
                <Swiper
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1920: { slidesPerView: 5, spaceBetween: 30 } // Telas muito grandes (3xl)
                    }}
                >
                    {sheetTestimonials.map((testimonial, index) =>
                        testimonial.allowPublish === 'Sim' && (
                            <SwiperSlide key={index}>
                                <TestimonialsCard
                                    customer={testimonial.name}
                                    testimonialText={testimonial.experience}
                                    rating={testimonial.rating}
                                    testimonialDate={testimonial.dateFeedback}
                                />
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            )}

            <div className="w-full flex justify-center items-center">
                <div className="text-center text-gray-600 text-lg">
                    <p className="mb-2">{(sheetTestimonials.length === 0 ? 'Aguardando feedbacks, seja o primeiro' : 'Nos envie seu feedback')}</p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdur5EkZfg4xp1jENsaBmOh1owVuyEA1IkSvo8E8Q3_pFGTow/viewform?fbzx=5908592694045959885"
                        className="text-primary-gray font-semibold hover:underline hover:text-primary-red transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Clique aqui
                    </a>
                </div>
            </div>
        </div>
    );
}

