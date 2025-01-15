import { FaUser } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

export interface ITestimonialProp {
    testimonialText: string;
    customer: string;
}

export const TestimonialsCard: React.FC<ITestimonialProp> = ({ customer, testimonialText }) => {
    return (
        <div className="cursor-pointer text-lg w-[320px] md:w-[380px] h-[220px] p-4 rounded-lg bg-slate-100 gap-5 shadow-xl transition-transform duration-300 hover:scale-105 relative">
            <div className="flex items-center justify-center border-8 border-primary-red bg-slate-100 h-[100px] w-[100px] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FaUser size={32} className="text-primary-gray" />
            </div>

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

            <div className="text-primary-red text-lg font-extrabold mt-2">
                {customer}
            </div>
        </div>
    )
}

