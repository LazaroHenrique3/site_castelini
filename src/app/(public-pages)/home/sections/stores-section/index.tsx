'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { PrimaryLinkButton } from "@/components/buttons/primary-link-button";

import ourStores from '../../../../../../public/images/others/our-stores.png';

export function StoresSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="w-full py-16 bg-slate-200">
            <div className="text-center mb-16 px-2">
                <p className="text-xl font-bold text-gray-800">
                    São <span className="text-4xl font-extrabold text-primary-red">25 lojas</span> espalhadas por <span className="text-4xl font-extrabold text-primary-red">3 estados</span>: PR, MS e MT
                </p>
                <p className="text-xl text-gray-600 mt-2">
                    Levando qualidade e variedade para mais pessoas
                </p>
            </div>

            <div className="w-full">
                <div className="w-[80%] m-auto flex justify-center">
                    <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
                        <div data-aos="fade-right" className="flex-1 w-full">
                            <Image className="w-full h-auto rounded-lg object-cover" src={ourStores} alt="Foto das lojas no mapa" />
                        </div>

                        <div data-aos="fade-left" className="max-w-[500px] 3xl:max-w-[800px]">
                            <div className="mb-6">
                                <p className="text-2xl font-bold text-gray-800 uppercase">
                                    Espalhados por 3 Estados
                                </p>
                                <div className="h-[3px] w-6 bg-primary-red"></div>
                            </div>

                            <p className="text-justify text-lg mb-6 leading-relaxed">
                                Ao longo dos anos, a marca expandiu sua presença, chegando a 25 lojas em três estados: Paraná (PR),
                                Mato Grosso do Sul (MS) e Mato Grosso (MT). Cada uma dessas lojas foi cuidadosamente planejada para oferecer
                                aos nossos clientes uma experiência única, com moda de qualidade e conforto para toda a família.
                            </p>

                            <PrimaryLinkButton linkText="Conheça nossas Lojas" linkRef="/stores" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}