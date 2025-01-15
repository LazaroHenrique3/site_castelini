import Image from "next/image";
import founders from "../../../../../../public/images/others/founders.png";
import { PrimaryLinkButton } from "@/components/primary-link-button";

export const AboutSection = () => (
    <section className="my-16">
        <div className="text-center mb-16 px-2">
            <p className="text-xl font-bold text-gray-800">
                Mais de <span className="text-4xl font-extrabold text-primary-red">39 anos</span> de tradição
            </p>
            <p className="text-xl text-gray-600 mt-2">Oferecendo moda e conforto para toda a família</p>
        </div>

        <div className="w-full">
            <div className="w-[80%] m-auto flex justify-center">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                    <div className="max-w-[500px]">
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
                    <Image className="w-[550px]" src={founders} alt="Foto dos fundadores" />
                </div>
            </div>
        </div>
    </section>
);