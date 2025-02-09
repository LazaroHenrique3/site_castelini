'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import founders from "../../../../../../public/images/others/founders.png";
import { PrimaryLinkButton } from "@/components/buttons/primary-link-button";

export const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="my-16">
            <div className="text-center mb-16 px-2">
                <p className="text-xl font-bold text-gray-800">
                    Mais de <span className="text-4xl font-extrabold text-primary-red">39 anos</span> de tradição
                </p>
                <p className="text-xl text-gray-600 mt-2">Oferecendo moda e conforto para toda a família</p>
            </div>

            <div className="w-full">
                <div className="w-[80%] m-auto flex">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-16 w-full">
                        <div data-aos="fade-right" className="max-w-[500px] 3xl:max-w-[800px]">
                            <div className="mb-6">
                                <p className="text-2xl font-bold text-gray-800 uppercase">O início...</p>
                                <div className="h-[3px] w-6 bg-primary-red"></div>
                            </div>

                            <p className="text-justify text-lg mb-6 leading-relaxed">
                                Em setembro de 1985, na cidade de Douradina-PR, dois casais da mesma família
                                decidiram empreender juntos, nascia a Castelini Confecções. Com o passar do tempo
                                o negócio começou a crescer, e novas unidades começaram a serem abertas, nas
                                cidades próximas, como Ivaté-PR em 1992 e Icaraíma-PR em 1993.
                            </p>
                            <PrimaryLinkButton linkText="Conheça nossa Trajetória" linkRef="/about" />
                        </div>

                        <div data-aos="fade-left" className="flex-1 w-full">
                            <Image className="w-full h-auto rounded-lg object-cover" src={founders} alt="Foto dos fundadores" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};