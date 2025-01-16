interface ISectionTitle {
    title: string, 
    subtitle: string
}

export const SectionTitle: React.FC<ISectionTitle> = ({ title, subtitle }) => {
    return (
        <div className="mx-auto px-4 text-center mb-24">
            <div className="inline-block mb-4">
                <h2 className="text-2xl md:text-4xl font-bold text-primary-red uppercase">{title}</h2>
                <div className="h-[3px] w-6 bg-primary-gray"></div>
            </div>
            <p className="text-lg md:text-xl text-primary-gray max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
    )
}

