import { checkClosingTime } from "@/app/utils";
import LocationCard from "@/components/our-stores/location-card"
import { StoreCard } from "@/components/our-stores/store-info"
import { Pagination } from "@/components/pagination";
import { IStoreType } from "@/types/IStoreTypes"
import { useState } from "react";

interface IStoreInfo {
    handleStoreSelection: (storeNumber: string) => void,
    filterStoreData: IStoreType[] | null,
    selectedFilter: string,
    selectedCep: string,
    selectedStoreInfo: IStoreType | null
}

const ITEMS_PER_PAGE = 4; // Número de itens por página

export const StoresInfo: React.FC<IStoreInfo> = ({ handleStoreSelection, filterStoreData, selectedFilter, selectedCep, selectedStoreInfo }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = filterStoreData?.length || 0;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Filtra os itens para a página atual
    const paginatedData = filterStoreData ? filterStoreData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE) : [];

    const handleChangePagination = (page: number) => {
        handleStoreSelection('')
        setCurrentPage(page)
    }

    return (
        <div className="flex flex-col mt-5 ">
            <div className="flex flex-col-reverse md:flex-row gap-1">

                <div className="w-full md:w-[40%] border-l-4 lg:pl-4 lg:border-primary-red max-w-2xl">
                    <div className="w-full flex gap-1 flex-col items-start">
                        {paginatedData.length > 0 ? (
                            <>
                                {paginatedData.map((store) => (
                                    <div
                                        className="w-full cursor-pointer"
                                        key={store.number}
                                        onClick={() => handleStoreSelection(store.number)}
                                    >
                                        <LocationCard
                                            isActive={store.number === selectedStoreInfo?.number}
                                            address={store.address}
                                            city={store.city}
                                            uf={store.uf}
                                            name={store.city}
                                            isOpen={checkClosingTime(store.openingHours.week.endHour, store.openingHours.weekend.endHour)}
                                            statusColor={checkClosingTime(store.openingHours.week.endHour, store.openingHours.weekend.endHour) ? 'text-green-700' : 'text-red-700'}
                                        />
                                    </div>
                                ))}

                                {/* Paginação */}
                                <div className="w-full">
                                    {filterStoreData && totalPages > 1 && (
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPages}
                                            onPageChange={handleChangePagination}
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            !filterStoreData && selectedFilter === 'cep' && selectedCep.length === 9 ? (
                                <div className="font-semibold p-3">
                                    Ops! Ainda não temos uma loja nessa região.
                                </div>
                            ) : (
                                <div className="font-semibold p-3">
                                    Selecione a cidade e estado ou CEP.
                                </div>
                            )
                        )}
                    </div>
                </div>

                {selectedStoreInfo && (
                    <div className='w-full md:w-[60%]' id='store-card'>
                        <StoreCard store={selectedStoreInfo} />
                    </div>
                )}

            </div>
        </div>
    )
}

