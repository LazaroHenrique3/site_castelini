import { ResponsiveVideo } from "@/components/about/responsive-video"

export const CompanyMilestonesSection = () => {
    return (
        <section className="w-full py-12">
            <div className="w-[80%] m-auto">
                <div className="container flex flex-col items-center mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-4xl font-bold text-primary-red mb-8 uppercase">Castelini: Uma História de Dedicação e Sucesso</h2>
                    <ResponsiveVideo src="https://www.youtube.com/embed/qPFkBFjMa3o?si=vsKh27C8hoQd7mml" />
                </div>
            </div>
        </section>
    )
}

