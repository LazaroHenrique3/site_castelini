'use client'
import { useState } from "react";

import workWithUsBanner from '../../../../public/images/others/work-with-us-banner.jpg';

import { PageHeaderWithBgImage } from "@/components/page-header-with-bg-image";
import { IStoreType } from "@/types/IStoreTypes";
import { storesData } from "@/data/StoresData";
import { WorkWithUsDetailsSection } from "./work-with-us-details-section";

export default function WorkWithUs() {
   /* Armazena as informações da loja selecionada */
   const [selectedStoreInfo, setSelectedStoreInfo] = useState<IStoreType | null>(null);

   const handleStoreSelection = (storeNumber: string) => {
       const selectedStore = storesData.find((store) => store.number === storeNumber);
       setSelectedStoreInfo(selectedStore || null); // Define `null` caso não encontre a loja
   };

   return (
       <main className="bg-slate-200">
           <PageHeaderWithBgImage bgImage={workWithUsBanner} pageTitle="Trabalhe Conosco" pageDescription="Venha construir sua carreira conosco! Envie seu currículo e explore nossas oportunidades para fazer parte de uma equipe apaixonada e dedicada. Estamos à procura de talentos como você para crescer juntos."/>
           <WorkWithUsDetailsSection selectedStoreInfo={selectedStoreInfo} onChangeStore={handleStoreSelection} />
       </main>
   )
}

