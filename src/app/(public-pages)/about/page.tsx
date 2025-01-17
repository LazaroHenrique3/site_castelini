import Image from "next/image";
import { FaStore, FaClock, FaUsers, FaRegUser } from 'react-icons/fa';
import originalFounders from '../../../../public/images/others/original-founders.jpg';
import casteliniDnaStore from '../../../../public/images/others/castelini-dna-store.jpg'

import mission from '../../../../public/images/others/mission.jpg';
import vision from '../../../../public/images/others/vision.jpg';
import purpose from '../../../../public/images/others/purpose.jpg';
import values from '../../../../public/images/others/values.jpg'

import hanger from '../../../../public/images/others/hanger.png';

import { PrimaryLinkButton } from "@/components/primary-link-button";

export default function About() {
    return (
        <main className="w-full">
            <section className="w-full py-20">
                <div className="w-[95%] lg:w-[80%] m-auto">
                    <div className="mx-auto px-4 text-center mb-24">
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl font-bold text-primary-red uppercase">Nossa Trajetória</h2>
                            <div className="h-[3px] w-6 bg-primary-gray"></div>
                        </div>

                        <p className="text-lg md:text-xl text-primary-gray max-w-3xl mx-auto leading-relaxed">
                            Desde 1985, a Castelini Confecções cresce ao lado de seus parceiros, levando moda e inovação para diversas cidades do Brasil.
                            Venha conhecer mais sobre essa trajetória de sucesso!
                        </p>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">
                                    O Início de um Sonho
                                </h3>

                                <div className="border-l-4 pl-4 border-primary-red max-w-2xl">
                                    <p className="text-lg text-primary-gray font-semibold leading-relaxed text-justify">
                                        Em setembro de 1985, na cidade de Douradina-PR, dois casais da mesma família decidiram empreender juntos,
                                        nascia a Castelini Confecções. Com o passar do tempo o negócio começou a crescer, e novas unidades
                                        começaram a serem abertas, nas cidades próximas, como Ivaté-PR em 1992 e Icaraíma-PR em 1993.
                                    </p>
                                </div>

                                <div className="mt-4 max-w-2xl">
                                    <p className="text-lg text-primary-gray font-normal leading-relaxed text-justify">
                                        Esses empresários, logo compreenderam que para continuar crescendo de forma sustentável, precisariam ir mais longe, e
                                        uma nova fronteira foi então vencida, e a Castelini passava a buscar novos mercados no estado do Mato Grosso do Sul,
                                        e posteriormente no estado do Mato Grosso.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <Image
                                src={originalFounders}
                                alt="Fundadores da Castelini"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-20 bg-slate-200">
                <div className="w-[95%] lg:w-[80%] m-auto">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 w-full">
                            <Image
                                src={casteliniDnaStore}
                                alt="Loja castelini Douradina"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">
                                    Um Modelo Inovador de Negócio
                                </h3>

                                <div className="border-r-4 pr-4 border-primary-red max-w-2xl">
                                    <p className="text-lg text-primary-gray font-semibold leading-relaxed text-justify">
                                        Percebendo que para ter sucesso em seus negócios eles precisariam de parceiros, e que o principal
                                        limitador de seu crescimento à época eram recursos humanos para gerenciar as novas lojas, esses
                                        empresários criaram uma nova formatação para seu empreendimento, buscando parceiros que aceitassem
                                        assumir com eles os riscos de mais lojas.
                                    </p>
                                </div>

                                <div className="mt-4 max-w-2xl">
                                    <p className="text-lg text-primary-gray font-normal leading-relaxed text-justify">
                                        Assim nasceu o conceito de lojas associadas, que usavam a mesma marca Castelini, mas não estavam
                                        juridicamente subordinadas a uma matriz, com total autonomia em compras e gestão, podendo se adaptar
                                        aos mercados locais onde estavam inseridas. Esse novo conceito de negócio possibilitou que a empresa
                                        crescesse, e chegasse a um total de 25 lojas.
                                    </p>
                                </div>
                            </div>

                            <div className="inline-block mt-4">
                                <PrimaryLinkButton linkText="Conheça nossas Lojas" linkRef="/stores" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="w-[80%] m-auto">
                    <div className="container flex flex-col items-center mx-auto px-6 md:px-10 text-center">
                        {/* Título */}
                        <h2 className="text-4xl font-bold text-primary-red mb-8 uppercase">Castelini: Uma História de Dedicação e Sucesso</h2>

                        {/* Vídeo Responsivo */}
                        <div className="w-full max-w-xl">
                            <div className="relative pb-[56.25%] h-0">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/qPFkBFjMa3o?si=vsKh27C8hoQd7mml"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 mb-36">
                <div className="w-full flex justify-center">
                    <div className="inline-block mb-4">
                        <h2 className="text-xl md:text-2xl font-bold text-primary-gray uppercase">E hoje somos</h2>
                        <div className="h-[3px] w-6 bg-primary-red"></div>
                    </div>
                </div>

                <div className="bg-primary-red text-white py-6">
                    <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                            <FaStore size={40} />
                            <h4 className="text-2xl md:text-3xl font-semibold mt-2">25</h4>
                            <p className="text-sm md:text-base">Lojas</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                            <FaClock size={40} />
                            <h4 className="text-2xl md:text-3xl font-semibold mt-2">+ de 39 anos</h4>
                            <p className="text-sm md:text-base">De história</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                            <FaUsers size={40} />
                            <h4 className="text-2xl md:text-3xl font-semibold mt-2">400+</h4>
                            <p className="text-sm md:text-base">Colaboradores</p>
                        </div>

                        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                            <FaRegUser size={40} />
                            <h4 className="text-2xl md:text-3xl font-semibold mt-2">100.000+</h4>
                            <p className="text-sm md:text-base">Clientes</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-200 py-20 mb-36">
                <div className="w-[90%] lg:w-[80%] m-auto">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16 mb-16">
                        <div className="flex-1 w-full">
                            <Image
                                src={mission}
                                alt="Nossa missão"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <Image src={hanger} alt="Logo cabide" className="w-24" />
                                <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                                    Nossa <span className="block ml-6 text-primary-gray">Missão</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16 mb-16">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <Image src={hanger} alt="Logo cabide" className="w-24" />
                                <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                                    Nosso <span className="block ml-6 text-primary-gray">Propósito</span>
                                </h3>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <Image
                                src={purpose}
                                alt="Nosso propósito"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16 mb-16">
                        <div className="flex-1 w-full">
                            <Image
                                src={values}
                                alt="Nossa missão"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <Image src={hanger} alt="Logo cabide" className="w-24" />
                                <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                                    Nossos <span className="block ml-6 text-primary-gray">Valores</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-16">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <Image src={hanger} alt="Logo cabide" className="w-24" />
                                <h3 className="text-4xl md:text-6xl font-bold text-primary-red mb-4 uppercase">
                                    Nossa <span className="block ml-6 text-primary-gray">Visão</span>
                                </h3>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <Image
                                src={vision}
                                alt="Nosso propósito"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}