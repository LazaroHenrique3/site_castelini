import Image from "next/image"

import vestidoCaneladoColcci from '../../../../public/images/products/vestido-canelado.png';
import vestidoCaneladoColcciHover from '../../../../public/images/products/vestido-canelado-hover.png';

export const ProductCardSlider = () => {
    return (
        <div className='shadow-xl rounded-lg bg-white w-64 transition-transform duration-300 hover:scale-105'>
            <div className="group relative w-64 h-96 bg-gray-200 overflow-hidden rounded-tl-lg rounded-tr">
                <Image
                    src={vestidoCaneladoColcci}  // Imagem padrão
                    alt="Imagem Padrão"
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 group-hover:opacity-0"
                />
                <Image
                    src={vestidoCaneladoColcciHover}  // Imagem ao passar o mouse
                    alt="Imagem ao Hover"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
                />
            </div>

            <div className="p-3">
                <p className="uppercase font-semibold">
                    Vestido Canelado Colcci
                </p>

                <div className="w-full mt-5 flex-col flex items-start justify-start">
                    <p className="text-xs text-gray-600 mr-2">Marca:</p>
                    <span className="bg-primary-gray text-white font-bold text-sm rounded-md py-1 px-3">
                        Colcci
                    </span>
                </div>
            </div>
        </div>
    )
}

