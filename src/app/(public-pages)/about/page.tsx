import Image from "next/image";
import { FaStore, FaClock, FaUsers, FaRegUser } from 'react-icons/fa';
import { FaBullseye, FaHandshake } from 'react-icons/fa';

import originalFounders from '../../../../public/images/others/original-founders.jpg'
import casteliniDnaStore from '../../../../public/images/others/castelini-dna-store.jpg'
import { PrimaryLinkButton } from "@/components/primary-link-button";

export default function About() {
    return (
        <main className="w-full">
            <section className="w-full py-20">
                <div className="w-[80%] m-auto">
                    <div className="mx-auto px-4 text-center mb-10">
                        <div className="inline-block mb-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-primary-red">NOSSA HISTÓRIA</h2>
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
                <div className="w-[80%] m-auto">
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

            <section className="bg-primary-red text-white py-6 mt-20 mb-36">
                <div className="w-full text-center">
                    <h3 className="text-2xl font-semibold uppercase my-4">E HOJE SOMOS</h3>
                </div>

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
                        <h4 className="text-2xl md:text-3xl font-semibold mt-2">200+</h4>
                        <p className="text-sm md:text-base">Funcionários</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                        <FaRegUser size={40} />
                        <h4 className="text-2xl md:text-3xl font-semibold mt-2">50.000+</h4>
                        <p className="text-sm md:text-base">Clientes</p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-20 mb-36">
                <div className="container mx-auto px-6 md:px-10">
                    <h2 className="text-4xl font-bold text-primary-red mb-8 text-center">Nossa Missão, Visão e Valores</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                            <FaBullseye size={40} className="mx-auto text-primary-red mb-4" />
                            <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center uppercase">Missão</h3>
                            <p className="text-lg text-primary-gray text-justify">
                                A CASTELINI dedica-se à comercialização de artigos de confecção e calçados de qualidade reconhecida. Os produtos ofertados refletem as tendências da moda atualizada e são ofertados a preços justos que garantam a satisfação dos clientes, fornecedores, colaboradores e acionistas.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                            <FaHandshake size={40} className="mx-auto text-primary-red mb-4" />
                            <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center uppercase">Visão</h3>
                            <p className="text-lg text-primary-gray text-justify">
                                Ser reconhecida como empresa referência em qualidade e preços justos no setor em que atua em todas as cidades que fixar suas lojas.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                            <FaUsers size={40} className="mx-auto text-primary-red mb-4" />
                            <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center uppercase">Valores</h3>
                            <ul className="list-disc pl-3 text-lg text-primary-gray space-y-1">
                                <li><span className="font-semibold">Amiga </span>em sua relação com as pessoas;</li>
                                <li><span className="font-semibold">Ética </span>nas relações institucionais;</li>
                                <li><span className="font-semibold">Familiar </span>em sua relação com colaboradores;</li>
                                <li><span className="font-semibold">Séria </span>nas suas relações societárias;</li>
                                <li><span className="font-semibold">Progressiva </span>na sua relação com seus parceiros;</li>
                                <li><span className="font-semibold">Inovadora </span>na sua relação com as tendências da moda.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}