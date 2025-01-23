'use client'
import contactImageBanner from '../../../../public/images/others/castelini-dna-store.jpg';

import { PageHeaderWithBgImage } from "@/components/page-header-with-bg-image";
import { InputSelect, SelectOption } from '@/components/input-select';
import { useState } from 'react';
import { mapCitiesToSelectOptions } from '@/app/utils';
import { brazilCities } from '@/data/CityData';
import { storeStateData } from '@/data/StoreStateData';
import { Input } from '@/components/input';
import { FiClock, FiMap, FiMapPin, FiPhone } from 'react-icons/fi';
import { IStoreType } from '@/types/IStoreTypes';
import { stores } from '@/data/StoresData';

const filterType: SelectOption[] = [
    { value: 'cep', label: 'CEP' },
    { value: 'city/state', label: 'CIDADE/ESTADO' },
];

export default function ourStores() {
    const [isLoading, setIsLoading] = useState(false);

    const [selectedUf, setSelectedUf] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [selectedCep, setSelectedCep] = useState<string>('');

    /* Armazena as informações da loja selecionada */
    const [selectedStoreInfo, setSelectedStoreInfo] = useState<IStoreType | null>(null);

    const handleStoreSelection = (storeNumber: string) => {
        const selectedStore = stores.find((store) => store.number === storeNumber);
        setSelectedStoreInfo(selectedStore || null); // Define `null` caso não encontre a loja
    };

    return (
        <main className="bg-slate-200">
            <PageHeaderWithBgImage bgImage={contactImageBanner} pageTitle="Nossas lojas" pageDescription="Com mais de 25 lojas espalhadas por três estados – Paraná, Mato Grosso e Mato Grosso do Sul – estamos sempre perto de você. Cada uma de nossas unidades é pensada para oferecer os melhores produtos e um atendimento de excelência." />
            <section className='py-16'>
                <div className='w-[95%] lg:w-[80%] m-auto'>

                    <div className='flex flex-col'>
                        <h3 className="text-xl md:text-2xl font-bold text-primary-gray mb-4 uppercase">
                            Conheça nossas lojas
                        </h3>

                        <div className='w-full grid grid-cols-1 lg:grid-cols-8 gap-6'>
                            <div className="flex flex-col col-span-6 lg:col-span-2">
                                <InputSelect
                                    name="filter"
                                    id="filter"
                                    value={selectedFilter}
                                    options={filterType}
                                    onChange={(event) => setSelectedFilter(event.target.value)}
                                    placeholder="Filtrar por"
                                    disabled={isLoading}
                                />
                            </div>

                            {selectedFilter === 'city/state' && (
                                <>
                                    <div className="flex flex-col col-span-6 lg:col-span-2">
                                        <InputSelect
                                            name="state"
                                            id="state"
                                            options={storeStateData}
                                            placeholder="Selecione o Estado"
                                            onChange={(event) => setSelectedUf(event.target.value)}
                                            value={selectedUf}
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="flex flex-col col-span-6 lg:col-span-2">
                                        <InputSelect
                                            name="city"
                                            id="city"
                                            value={selectedCity}
                                            options={mapCitiesToSelectOptions(brazilCities, selectedUf)}
                                            onChange={(event) => setSelectedCity(event.target.value)}
                                            placeholder="Selecione a Cidade"
                                            disabled={isLoading}
                                        />
                                    </div>
                                </>
                            )}

                            {selectedFilter === 'cep' && (
                                <div className="flex flex-col col-span-6 lg:col-span-2">
                                    <Input
                                        type="text"
                                        name="cep"
                                        id="cep"
                                        value={selectedCep}
                                        onChange={(event) => setSelectedCep(event.target.value)}
                                        placeholder="Digite o CEP"
                                        disabled={isLoading}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col mt-5 ">
                        <div className="flex">

                            <div className="w-[780px] border-l-4 pl-4 border-primary-red max-w-2xl">
                                <div className="flex flex-col items-start bg-slate-50">

                                    <div className="flex items-center text-sm space-x-4 p-4 border-b-2">
                                        <div>
                                            <div className="font-semibold">Douradina</div>
                                            <div className="font-semibold">Avenida Barão do Rio Branco N°682 - CENTRO</div>
                                            <div className="font-light">Douradina - PR</div>
                                        </div>

                                        <div className="flex h-6 items-center justify-center">
                                            <div className="w-[1px] h-[90%] bg-primary-red"></div>
                                        </div>

                                        <div className="font-semibold whitespace-nowrap">
                                            714 Km
                                        </div>
                                    </div>

                                    <div className="flex items-center text-sm space-x-4 p-4 border-b-2">
                                        <div className='w-full'>
                                            <div className="font-semibold">Icaraíma</div>
                                            <div className="font-semibold">Avenida Hermes Vissoto N°944 - Centro</div>
                                            <div className="font-light">Icaraíma - PR</div>
                                        </div>

                                        <div className="flex h-6 items-center justify-center">
                                            <div className="w-[1px] h-[90%] bg-primary-red"></div>
                                        </div>

                                        <div className="font-semibold whitespace-nowrap">
                                            714 Km
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='w-full bg-slate-100'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div>
                                        <div className="font-semibold">Icaraíma</div>
                                        <div className="">Avenida Hermes Vissoto N°944 - Centro</div>
                                        <div className="">Icaraíma - PR</div>
                                    </div>

                                    <div className="font-semibold">Funcionamento</div>

                           {/*          <div className="flex items-center gap-2 font-semibold text-primary-gray mb-5">
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
                                    </div> */}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}