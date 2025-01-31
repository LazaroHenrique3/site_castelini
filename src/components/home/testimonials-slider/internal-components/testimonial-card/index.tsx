import { FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

export interface ITestimonialProp {
    testimonialText: string;
    customer: string;
    rating: number;
    testimonialDate: string;
}

export const TestimonialsCard: React.FC<ITestimonialProp> = ({ customer, testimonialText, rating, testimonialDate }) => {
    return (
        <div className="cursor-pointer text-lg w-[320px] md:w-[380px] h-[250px] p-4 rounded-lg bg-slate-100 gap-5 shadow-xl transition-transform duration-300 hover:scale-105 relative">
            {/* Ícone do Usuário */}
            <div className="flex items-center justify-center border-8 border-primary-red bg-slate-100 h-[100px] w-[100px] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FaUser size={32} className="text-primary-gray" />
            </div>

            {/* Depoimento */}
            <div className="flex flex-col mt-8">
                <span className="flex justify-start items-start text-primary-gray">
                    <FaQuoteLeft />
                </span>
                <p className="w-full text-center text-primary-gray line-clamp-3" title={testimonialText}>
                    {testimonialText}
                </p>
                <div className="flex justify-end items-end text-primary-gray">
                    <FaQuoteRight />
                </div>
            </div>

            {/* Nome do Cliente e Data */}
            <div className="flex flex-col items-center mt-2">
                <div className="text-primary-red text-lg font-extrabold">{customer}</div>
                <div className="text-primary-gray text-xs">{testimonialDate}</div>
            </div>

            {/* Avaliação por Estrelas */}
            <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, index) => (
                    index < rating ? (
                        <FaStar key={index} className="text-yellow-400" />
                    ) : (
                        <FaRegStar key={index} className="text-gray-400" />
                    )
                ))}
            </div>
        </div>
    )
}

