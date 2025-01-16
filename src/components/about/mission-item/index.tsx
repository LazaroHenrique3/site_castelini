import { FaBullseye } from "react-icons/fa"

export const MissionItem = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
            <FaBullseye size={40} className="mx-auto text-primary-red mb-4" />
            <h3 className="text-2xl font-semibold text-primary-red mb-4 text-center uppercase">Missão</h3>
            <p className="text-lg text-primary-gray text-justify">
                A CASTELINI dedica-se à comercialização de artigos de confecção e calçados de qualidade reconhecida...
            </p>
        </div>
    )
}

