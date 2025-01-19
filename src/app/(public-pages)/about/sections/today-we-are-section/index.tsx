import { IInfoCard, InfoCard } from "@/components/about/info-card";
import { FaClock, FaRegUser, FaStore, FaUsers } from "react-icons/fa";

const infoCards: IInfoCard[]  = [
    {
        icon: <FaStore size={40} />,
        title: '25',
        description: 'Lojas',
    },
    {
        icon: <FaClock size={40} />,
        title: '+ de 39 anos',
        description: 'De história',
    },
    {
        icon: <FaUsers size={40} />,
        title: '400+',
        description: 'Colaboradores',
    },
    {
        icon: <FaRegUser size={40} />,
        title: '100.000+',
        description: 'Clientes',
    },
];

export const TodayWeAreSection = () => {
    return (
        <section className="mt-20 mb-36">
            <div className="w-full flex justify-center">
                <div className="inline-block mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-gray uppercase">E hoje somos</h2>
                    <div className="h-[3px] w-6 bg-primary-red"></div>
                </div>
            </div>

            <div className="bg-primary-red text-white py-6">
                <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {infoCards.map((card, index) => (
                        <InfoCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

