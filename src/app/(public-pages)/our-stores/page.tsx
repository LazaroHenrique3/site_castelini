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
import Image from 'next/image';

import store from '../../../../public/images/stores/store-brasnorte.jpeg'

const filterType: SelectOption[] = [
    { value: 'cep', label: 'CEP' },
    { value: 'city/state', label: 'CIDADE/ESTADO' },
];

export default function OurStores() {
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
            <PageHeaderWithBgImage bgImage={contactImageBanner} pageTitle="Nossas lojas" pageDescription="Com 25 lojas espalhadas por três estados – Paraná, Mato Grosso e Mato Grosso do Sul – estamos sempre perto de você. Cada uma de nossas unidades é pensada para oferecer os melhores produtos e um atendimento de excelência." />
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
                        <div className="flex gap-1">

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

                            <div className='w-full bg-slate-100 p-4'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <div className='flex flex-col gap-1 font-semibold text-primary-gray'>
                                                <div className="font-semibold text-black">Icaraíma</div>
                                                <div className="">Avenida Hermes Vissoto N°944 - Centro</div>
                                                <div className="">Icaraíma - PR</div>
                                            </div>

                                            <div className="font-semibold text-black">Funcionamento</div>

                                            <div className="flex flex-col gap-1 font-semibold text-primary-gray">
                                                <div className="flex gap-2">
                                                    <span>Seg a Sex: 08:30 às 18h</span>
                                                </div>
                                                <span>Sáb 08:00 às 14h</span>
                                            </div>
                                        </div>

                                        <Image src={store} alt='loja-brasnorte' className='h-44 object-cover rounded-lg shadow-2xl' />
                                    </div>

                                    <div className="flex my-1 h-1 items-center justify-center">
                                        <div className="w-[80%] h-1 bg-primary-red opacity-20"></div>
                                    </div>

                                    <div className='w-full h-56'>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.80210896582588!2d-58.00331152520066!3d-12.123525500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a4cf83ebedd921%3A0x542c21a1f0d871d3!2sCastelini%20Brasnorte!5e0!3m2!1spt-BR!2sbr!4v1737684916931!5m2!1spt-BR!2sbr"
                                            width="600"
                                            height="450"
                                            style={{ border: 0, width: '100%', height: '220px' }}
                                            allowFullScreen={true} // Define como booleano
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}