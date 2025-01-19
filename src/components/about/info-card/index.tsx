export interface IInfoCard {
    icon: React.ReactNode; 
    title: string; 
    description: string;
}

export const InfoCard: React.FC<IInfoCard> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 w-60 bg-white text-primary-red rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="mb-2">{icon}</div>
            <h4 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h4>
            <p className="text-sm md:text-base">{description}</p>
        </div>
    );
};