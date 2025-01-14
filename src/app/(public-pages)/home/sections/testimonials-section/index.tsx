import { TestimonialsSlider } from "@/components/home/testimonials-slider";

export function TestimonialsSection() {
    return (
        <section className="w-full py-16 bg-slate-200">
            <div className="w-full">
                <div className="w-[80%] m-auto">
                    <div className="text-center mb-16 px-2">
                        <p className="text-xl font-bold text-gray-800">
                            O que nossos <span className="text-4xl font-extrabold text-primary-red">clientes dizem</span>
                        </p>
                        <p className="text-xl text-gray-600 mt-2">
                            Histórias de satisfação e confiança que mostram por que somos referência em qualidade e atendimento.
                        </p>
                    </div>

                    <TestimonialsSlider />
                </div>
            </div>
        </section>
    );
}