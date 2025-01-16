import Image from "next/image"

import { TextBlock } from "@/components/about/text-block"
import { PrimaryLinkButton } from "@/components/primary-link-button"

import casteliniDnaStore from '../../../../../../public/images/others/castelini-dna-store.jpg'

export const BusinessModelSection = () => {
    return (
        <section className="w-full py-20 bg-slate-200">
            <div className="w-[80%] m-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 w-full">
                        <Image
                            src={casteliniDnaStore}
                            alt="Loja Castelini Douradina"
                            className="w-full h-auto rounded-lg shadow-2xl object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">Um Modelo Inovador de Negócio</h3>
                        <TextBlock text="Percebendo que para ter sucesso em seus negócios eles precisariam de parceiros, e que o principal limitador de seu crescimento..." hasBorder={true}/>
                        <TextBlock text="Assim nasceu o conceito de lojas associadas, que usavam a mesma marca Castelini, mas não estavam juridicamente subordinadas a uma matriz..." hasBorder={false} />
                        <PrimaryLinkButton linkText="Conheça nossas Lojas" linkRef="/stores" />
                    </div>
                </div>
            </div>
        </section>
    )
}

