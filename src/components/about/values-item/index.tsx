import { FaUsers } from "react-icons/fa"

export const ValuesItem = () => {
  return (
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
  )
}

