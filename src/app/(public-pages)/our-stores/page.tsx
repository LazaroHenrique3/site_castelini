'use client'
import contactImageBanner from '../../../../public/images/others/castelini-dna-store.jpg';

import { PageHeaderWithBgImage } from "@/components/page-header-with-bg-image";
import { useState } from 'react';
import { mapStoreWithFilters } from '@/app/utils';
import { IStoreType } from '@/types/IStoreTypes';
import { storesData } from '@/data/StoresData';

import { InputFilter } from './sections/input-filters';
import { StoresInfo } from './sections/stores-info';

export default function OurStores() {
    const [isLoading, setIsLoading] = useState(false);

    const [selectedUf, setSelectedUf] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<string>('city/state');
    const [selectedCep, setSelectedCep] = useState<string>('');

    /* Armazena as informações de todas as lojas que foram filtradas */
    const [filterStoreData, setFilterStoreData] = useState<IStoreType[] | null>(null)

    /* Armazena as informações da loja selecionada */
    const [selectedStoreInfo, setSelectedStoreInfo] = useState<IStoreType | null>(null);

    const handleStoreSelection = (storeNumber: string) => {
        const selectedStore = storesData.find((store) => store.number === storeNumber);
        setSelectedStoreInfo(selectedStore || null); // Define `null` caso não encontre a loja

        // Faz o scroll suave até o local desejado
        const scrollToSection = () => {
            const section = document.getElementById("store-card");
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth", // Rola suavemente
                    block: "end",       // Garante que rola até o final do elemento
                });
                return true; // Retorna true indicando que o scroll foi executado
            }
            return false; // Retorna false caso o elemento não exista
        };

        if (window.innerWidth <= 640) {
            // Tenta rolar imediatamente, caso o elemento já esteja presente
            if (!scrollToSection()) {
                // Se o elemento ainda não foi criado, observa as mudanças no DOM
                const observer = new MutationObserver(() => {
                    if (scrollToSection()) {
                        observer.disconnect(); // Desativa o observer após encontrar o elemento
                    }
                });

                // Observa o corpo do documento por mudanças no DOM
                observer.observe(document.body, {
                    childList: true, // Monitora adição/remoção de elementos filhos
                    subtree: true,   // Monitora mudanças em todos os níveis do DOM
                });
            }
        }
    };

    const handleChangeFilter = (newSelectedFilter: string) => {
        setSelectedFilter(newSelectedFilter);

        /* Para filtrar todas as lojas */
        if (newSelectedFilter === 'all') {
            setFilterStoreData(storesData);
            return;
        }

        /* Deve limpar todas as informações quando o tipo de filtro for alterado */
        setFilterStoreData(null);
        setSelectedStoreInfo(null);
        setSelectedCep('');
        setSelectedUf('');
        setSelectedCity('');
    }

    /* Aplicando os filtros ao mudar cada um dos inputs */
    const handleChangeCep = (selectedCep: string) => {
        setSelectedCep(selectedCep);

        /* Só filtra depois que todo o CEP for informado */
        if (selectedCep.length < 9) {
            setFilterStoreData(null);/* Para limpar quando apagar e já prepara para o próximo */
            setSelectedStoreInfo(null); /* Para limpar o state que armazena as informações da loja selecionada */
        } else if (selectedCep.length === 9) {
            setFilterStoreData(mapStoreWithFilters(storesData, selectedUf, selectedCity, selectedCep, selectedFilter))
        }
    }

    const handleChangeCity = (selectedCity: string) => {
        setSelectedCity(selectedCity)
        setSelectedStoreInfo(null); /* Para limpar o state que armazena as informações da loja selecionada */
        setFilterStoreData(mapStoreWithFilters(storesData, selectedUf, selectedCity, selectedCep, selectedFilter))
    }

    const handleChangeUf = (selectedUf: string) => {
        setSelectedUf(selectedUf)
        setSelectedStoreInfo(null); /* Para limpar o state que armazena as informações da loja selecionada */
        setFilterStoreData(mapStoreWithFilters(storesData, selectedUf, selectedCity, selectedCep, selectedFilter))
    }

    return (
        <main className="bg-slate-200">
            <PageHeaderWithBgImage bgImage={contactImageBanner} pageTitle="Nossas lojas" pageDescription="Com 25 lojas espalhadas por três estados – Paraná, Mato Grosso e Mato Grosso do Sul – estamos sempre perto de você. Cada uma de nossas unidades é pensada para oferecer os melhores produtos e um atendimento de excelência." />
            <section className='py-16'>
                <div className='w-[95%] lg:w-[80%] m-auto'>

                    <InputFilter
                        handleChangeCep={handleChangeCep}
                        handleChangeCity={handleChangeCity}
                        handleChangeUf={handleChangeUf}
                        handleChangeFilter={handleChangeFilter}
                        isLoading={isLoading}
                        selectedCep={selectedCep}
                        selectedCity={selectedCity}
                        selectedUf={selectedUf}
                        selectedFilter={selectedFilter}
                    />

                    <StoresInfo
                        handleStoreSelection={handleStoreSelection}
                        filterStoreData={filterStoreData}
                        selectedCep={selectedCep}
                        selectedFilter={selectedFilter}
                        selectedStoreInfo={selectedStoreInfo}
                    />
                </div>
            </section>
        </main>
    )
}