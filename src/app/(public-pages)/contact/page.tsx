"use client"
import { useState } from "react";


import contactImageBanner from '../../../../public/images/others/contact-image-banner.jpg';

import { IStoreType } from "@/types/IStoreTypes";
import { storesData } from "@/data/StoresData";
import { StoreContactDetailsSection } from "./sections/contact-details-section";
import { PageHeaderWithBgImage } from "@/components/page-header-with-bg-image";

export default function Contact() {
    /* Armazena as informações da loja selecionada */
    const [selectedStoreInfo, setSelectedStoreInfo] = useState<IStoreType | null>(null);

    const handleStoreSelection = (storeNumber: string) => {
        const selectedStore = storesData.find((store) => store.number === storeNumber);
        setSelectedStoreInfo(selectedStore || null); // Define `null` caso não encontre a loja
    };

    return (
        <main className="bg-slate-200">
            <PageHeaderWithBgImage bgImage={contactImageBanner} pageTitle="Contato" pageDescription="Entre em contato com nossa equipe através do formulário abaixo para enviar suas perguntas, sugestões ou feedbacks."/>
            <StoreContactDetailsSection selectedStoreInfo={selectedStoreInfo} onChangeStore={handleStoreSelection}/>
        </main>
    )
}