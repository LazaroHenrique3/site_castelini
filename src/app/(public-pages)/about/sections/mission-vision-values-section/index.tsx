import { MissionItem } from "@/components/about/mission-item"
import { ValuesItem } from "@/components/about/values-item"
import { VisionItem } from "@/components/about/vision-item"

export const MissionVisionValuesSection = () => {
  return (
    <section className="bg-slate-100 py-20 mb-36">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold text-primary-red mb-8 text-center">Nossa Missão, Visão e Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionItem />
          <VisionItem />
          <ValuesItem />
        </div>
      </div>
    </section>
  )
}

