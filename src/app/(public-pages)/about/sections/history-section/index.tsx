'use client'
import Image from "next/image"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { SectionTitle } from "@/components/about/section-title"
import { TextBlockPrimary } from "@/components/about/text-block-primary"

import originalFounders from '../../../../../../public/images/others/original-founders.jpg'
import { TextBlockSecondary } from "@/components/about/text-block-secondary"

export const HistorySection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="w-full py-20">
            <div className="w-[80%] m-auto">
                <SectionTitle
                    title="Nossa Trajetória"
                    subtitle="Desde 1985, a Castelini Confecções cresce ao lado de seus parceiros, levando moda e inovação para diversas cidades do Brasil."
                />
                <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                    <div data-aos="fade-right" className="flex flex-col max-w-[650px] 3xl:max-w-[880px]">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">O Início de um Sonho</h3>
                        <TextBlockPrimary text="Em setembro de 1985, na cidade de Douradina-PR, dois casais da mesma família decidiram empreender juntos, nascia a Castelini Confecções. Com o passar do tempo o negócio começou a crescer, e novas unidades começaram a serem abertas, nas cidades próximas, como Ivaté-PR em 1992 e Icaraíma-PR em 1993." borderLeftOrRight="left" />
                        <TextBlockSecondary text="Esses empresários, logo compreenderam que para continuar crescendo de forma sustentável, precisariam ir mais longe, e uma nova fronteira foi então vencida, e a Castelini passava a buscar novos mercados no estado do Mato Grosso do Sul, e posteriormente no estado do Mato Grosso." />
                    </div>
                    <div data-aos="fade-left" className="flex-1 w-full">
                        <Image
                            src={originalFounders}
                            alt="Fundadores da Castelini"
                            className="w-full h-auto rounded-lg shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

