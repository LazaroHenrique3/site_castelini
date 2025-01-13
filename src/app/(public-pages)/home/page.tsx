import Link from "next/link.js";
import Image from 'next/image';

import { FaBlog } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';

import { BannerCarrousel } from "@/components/home/banner-carrousel";
import { OurBrands } from "@/components/home/our-brands";

import founders from '../../../../public/images/others/founders.png';
import ourStores from '../../../../public/images/others/our-stores.png';

import vestidoCaneladoColcci from '../../../../public/images/products/vestido-canelado.png';
import vestidoCaneladoColcciHover from '../../../../public/images/products/vestido-canelado-hover.png';
import { TestimonialsSlider } from "@/components/home/testimonials-slider";

export default function Home() {
    return (
        <>
            <section>
                <div className="w-full h-[80vh] mb-3">
                    <BannerCarrousel />
                </div>

                <div className="w-full flex gap-4 justify-start md:justify-center overflow-x-scroll scrollbar-hide pl-4 pr-4 hide-scrollbar">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Ir para blog Castelini">
                        <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                            <BsGrid size={32} className="text-slate-600" />
                            <p className="font-semibold text-base text-slate-600">Conheça nosso catálogo online</p>
                        </div>
                    </a>

                    <a href="https://www.blogcastelini.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Ir para blog Castelini">
                        <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                            <FaBlog size={32} className="text-slate-600" />
                            <p className="font-semibold text-base text-slate-600">Fique por dentro das novidades no Blog Castelini</p>
                        </div>
                    </a>

                    <a href="https://crediario.castelini.com.br/login" target="_blank" rel="noopener noreferrer" aria-label="Ir para blog Castelini">
                        <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                            <FaWallet size={32} className="text-slate-600" />
                            <p className="font-semibold text-base text-slate-600">Pague sua fatura no crediário online</p>
                        </div>
                    </a>
                </div>
            </section>

            <section className="my-16">
                <div className="text-center mb-16">
                    <p className="text-xl font-bold text-gray-800">
                        Mais de <span className="text-4xl font-extrabold text-primary-red">39 anos</span> de tradição
                    </p>
                    <p className="text-xl text-gray-600 mt-2">
                        Oferecendo moda e conforto para toda a família
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex items-center gap-10">
                        <div className="max-w-[500px]">
                            <div className="mb-6">
                                <p className="text-2xl font-bold text-gray-800 uppercase">
                                    O início...
                                </p>
                                <div className="h-[3px] w-6 bg-primary-red"></div>
                            </div>

                            <p className="text-justify text-lg mb-6">
                                Em setembro de 1985, na cidade de Douradina-PR, dois casais da mesma família decidiram
                                empreender juntos, nascia a Castelini Confecções. Com o passar do tempo o negócio começou a crescer,
                                e novas unidades começaram a serem abertas, nas cidades próximas, como Ivaté-PR em 1992 e Icaraíma-PR em
                                1993.
                            </p>

                            <Link className="font-semibold border-2 border-primary-red text-primary-red rounded-md px-4 py-2 uppercase hover:bg-primary-red hover:text-white transition-all" href="/about">
                                Conheça nossa Trajetória
                            </Link>
                        </div>
                        <Image className="w-[550px]" src={founders} alt="founders-photo" />
                    </div>
                </div>

            </section>

            <section className="w-full py-16 bg-slate-200">
                <div className="text-center mb-16">
                    <p className="text-xl font-bold text-gray-800">
                        São <span className="text-4xl font-extrabold text-primary-red">25 lojas</span> espalhadas por <span className="text-4xl font-extrabold text-primary-red">3 estados</span>: PR, MS e MT
                    </p>
                    <p className="text-xl text-gray-600 mt-2">
                        Levando qualidade e variedade para mais pessoas
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="flex items-center gap-10">
                        <Image className="w-[550px]" src={ourStores} alt="founders-photo" />

                        <div className="max-w-[500px]">
                            <div className="mb-6">
                                <p className="text-2xl font-bold text-gray-800 uppercase">
                                    Espalhados por 3 Estados
                                </p>
                                <div className="h-[3px] w-6 bg-primary-red"></div>
                            </div>

                            <p className="text-justify text-lg mb-6">
                                Ao longo dos anos, a marca expandiu sua presença, chegando a 25 lojas em três estados: Paraná (PR),
                                Mato Grosso do Sul (MS) e Mato Grosso (MT). Cada uma dessas lojas foi cuidadosamente planejada para oferecer
                                aos nossos clientes uma experiência única, com moda de qualidade e conforto para toda a família.
                            </p>

                            <Link className="font-semibold border-2 border-primary-red text-primary-red rounded-md px-4 py-2 uppercase hover:bg-primary-red hover:text-white transition-all" href="/lojas">
                                Conheça nossas Lojas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16">
                <OurBrands />

                <div className="w-full">
                    <div className="w-[80%] m-auto">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 uppercase">
                                PRODUTOS EM DESTAQUE
                            </h2>
                            <div className="h-[3px] w-6 bg-primary-red"></div>
                        </div>

                        <div className='shadow-xl rounded-lg bg-white w-64 transition-transform duration-300 hover:scale-105'>
                            <div className="group relative w-64 h-96 bg-gray-200 overflow-hidden rounded-tl-lg rounded-tr">
                                <Image
                                    src={vestidoCaneladoColcci}  // Imagem padrão
                                    alt="Imagem Padrão"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-all duration-500 group-hover:opacity-0"
                                />
                                <Image
                                    src={vestidoCaneladoColcciHover}  // Imagem ao passar o mouse
                                    alt="Imagem ao Hover"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                                />
                            </div>

                            <div className='p-3'>
                                <p className="uppercase font-semibold">
                                    Vestido Canelado Colcci
                                </p>

                                <div className='w-full mt-5'>
                                    <p className='text-xs text-gray-600'>Marca:</p>
                                    <span className='bg-primary-gray text-white font-bold text-sm rounded-md py-1 px-3'>
                                        Colcci
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-slate-200">
                <div className="w-full">
                    <div className="w-[80%] m-auto">
                        <div className="text-center mb-16">
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
        </>
    )
}