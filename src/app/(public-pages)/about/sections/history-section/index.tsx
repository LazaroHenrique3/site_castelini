import Image from "next/image"

import { SectionTitle } from "@/components/about/section-title"
import { TextBlock } from "@/components/about/text-block"

import originalFounders from '../../../../../../public/images/others/original-founders.jpg'

export const HistorySection = () => {
  return (
    <section className="w-full py-20">
            <div className="w-[80%] m-auto">
                <SectionTitle
                    title="Nossa Trajetória"
                    subtitle="Desde 1985, a Castelini Confecções cresce ao lado de seus parceiros, levando moda e inovação para diversas cidades do Brasil."
                />
                <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                    <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-gray mb-4 uppercase">O Início de um Sonho</h3>
                        <TextBlock text="Em setembro de 1985, na cidade de Douradina-PR, dois casais da mesma família decidiram empreender juntos, nascia a Castelini Confecções. Com o passar do tempo o negócio começou a crescer..." hasBorder={true} />
                        <TextBlock text="Esses empresários, logo compreenderam que para continuar crescendo de forma sustentável, precisariam ir mais longe..." hasBorder={false} />
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
  )
}

