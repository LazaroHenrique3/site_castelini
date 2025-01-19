'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TextBlockPrimary } from "@/components/about/text-block-primary";
import { PrimaryLinkButton } from "@/components/primary-link-button";

import casteliniDnaStore from '../../../../../../public/images/others/castelini-dna-store.jpg';
import { TextBlockSecondary } from "@/components/about/text-block-secondary";

export const BusinessModelSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section className="w-full py-20 bg-slate-200">
            <div className="w-[95%] lg:w-[80%] m-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div data-aos="fade-right" className="flex-1 w-full">
                        <Image
                            src={casteliniDnaStore}
                            alt="Loja castelini Douradina"
                            className="w-full h-auto rounded-lg shadow-2xl object-cover"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div data-aos="fade-left" className="flex flex-col">
                            <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">Um Modelo Inovador de Negócio</h3>
                            <TextBlockPrimary text=" Percebendo que para ter sucesso em seus negócios eles precisariam de parceiros, e que o principal limitador de seu crescimento à época eram recursos humanos para gerenciar as novas lojas, esses empresários criaram uma nova formatação para seu empreendimento, buscando parceiros que aceitassem assumir com eles os riscos de mais lojas." />
                            <TextBlockSecondary text="Assim nasceu o conceito de lojas associadas, que usavam a mesma marca Castelini, mas não estavam juridicamente subordinadas a uma matriz, com total autonomia em compras e gestão, podendo se adaptar aos mercados locais onde estavam inseridas. Esse novo conceito de negócio possibilitou que a empresa crescesse, e chegasse a um total de 25 lojas." />
                        </div>

                        <div className="inline-block mt-4">
                            <PrimaryLinkButton linkText="Conheça nossas Lojas" linkRef="/stores" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



