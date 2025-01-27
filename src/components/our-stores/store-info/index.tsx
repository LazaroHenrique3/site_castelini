import { IStoreType } from "@/types/IStoreTypes";
import Image from "next/image";

type StoreCardProps = {
    store: IStoreType;
};

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
    const {
        primaryImage,
        mapSrc,
        city,
        uf,
        number,
        address,
        openingHours: { week, weekend },
    } = store;

    return (
        <div className="w-full bg-slate-100 border border-slate-300 p-4 rounded-md">
            <div className="flex flex-col gap-2 w-full">
                {/* Informações do local e imagem */}
                <div className="flex justify-between">
                    <div>
                        <div className="flex flex-col gap-1 font-semibold text-primary-gray">
                            <div className="font-semibold text-black">{`${city} - ${uf}`}</div>
                            <div>{`${address} N°${number} - Centro`}</div>
                        </div>

                        {/* Horários de funcionamento */}
                        <div className="font-semibold text-black">Funcionamento</div>
                        <div className="flex flex-col gap-1 font-semibold text-primary-gray">
                            <div className="flex gap-2">
                                <span>
                                    {`${week.startDay} a ${week.endDay}: ${week.startHour} às ${week.endHour}`}
                                </span>
                            </div>
                            <span>
                                {`${weekend.startDay}: ${weekend.startHour} às ${weekend.endHour}`}
                            </span>
                        </div>
                    </div>

                    {/* Imagem da loja */}
                    {primaryImage && (
                        <Image
                            src={primaryImage}
                            alt={`Imagem da loja ${city}`}
                            className="hidden lg:block mr-2 h-44 max-w-64 object-cover rounded-lg shadow-2xl"
                        />
                    )}
                </div>

                {/* Divisor */}
                <div className="flex my-1 h-1 items-center justify-center">
                    <div className="w-[80%] h-1 bg-primary-red opacity-20"></div>
                </div>

                {/* Mapa */}
                <div className="w-full h-56">
                    <iframe
                        src={mapSrc}
                        width="600"
                        height="450"
                        style={{ border: 0, width: "100%", height: "220px" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};