import { FiArrowRight, FiClock, FiMap, FiMapPin, FiPhone } from "react-icons/fi"

import { FooterLinks } from "@/components/footer"
import { IStoreType } from "@/types/IStoreTypes"

interface IStoreContactDetails {
    storeContactText: string,
    selectedStoreInfo: IStoreType | null
}

export const StoreContactDetails: React.FC<IStoreContactDetails> = ({ storeContactText, selectedStoreInfo }) => {
    return (
        <div className="flex flex-col md:w-96">
            <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-primary-gray mb-4 uppercase">
                    { storeContactText }
                </h3>

                <div className="border-l-4 pl-4 mt-5 border-primary-red max-w-2xl">
                    <div className="flex flex-col items-start gap-4 p-4" key={selectedStoreInfo?.number}>
                        {selectedStoreInfo ? (
                            <>
                                <div className="flex items-center gap-2 font-semibold text-primary-gray mb-5">
                                    <FiMap className="text-xl text-primary-red" />
                                    <span>{`${selectedStoreInfo.city}, ${selectedStoreInfo.uf}`}</span>
                                </div>

                                <div className="flex items-center gap-2 font-semibold text-primary-gray">
                                    <FiPhone className="text-xl text-primary-red" />
                                    <span>{selectedStoreInfo.cellPhone}</span>
                                </div>

                                <div className="flex items-center gap-2 font-semibold text-primary-gray">
                                    <FiMapPin className="text-xl text-primary-red" />
                                    <span>{selectedStoreInfo.address}</span>
                                </div>

                                <div className="flex flex-col gap-2 font-semibold text-primary-gray">
                                    <div className="flex gap-2">
                                        <FiClock className="text-xl text-primary-red" />
                                        <span>{`${selectedStoreInfo.openingHours.week.startDay} a ${selectedStoreInfo.openingHours.week.endDay}: ${selectedStoreInfo.openingHours.week.startHour} às ${selectedStoreInfo.openingHours.week.endHour}`}</span>
                                    </div>
                                    <span className="ml-7">{`${selectedStoreInfo.openingHours.weekend.startDay} ${selectedStoreInfo.openingHours.weekend.startHour} às ${selectedStoreInfo.openingHours.weekend.endHour}`}</span>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-2 font-semibold text-primary-gray uppercase">
                                <span>Selecione a Loja </span>
                                <FiArrowRight className="hidden lg:inline-flex text-xl text-primary-red" />
                            </div>
                        )}
                    </div>

                    <div className="w-full flex gap-2 mt-3 p-4">
                        {FooterLinks.map((link, index) => (
                            <a key={index} href={link.linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ir para ${link.linkUrl}`}>
                                <div className="inline-block p-1 bg-white rounded-full hover:shadow-lg hover:scale-105 hover:shadow-primary-red transition duration-300">
                                    {link.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

