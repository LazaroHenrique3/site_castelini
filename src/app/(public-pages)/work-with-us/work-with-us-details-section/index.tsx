import { StoreContactDetails } from "@/components/contact/store-contact-details"
import { WorkWithUsForm } from "@/components/work-with-us/work-with-us-form";
import { IStoreType } from "@/types/IStoreTypes"

interface IWorkWithUsDetails {
    selectedStoreInfo: IStoreType | null
    onChangeStore: (number: string) => void;
}

export const WorkWithUsDetailsSection: React.FC<IWorkWithUsDetails> = ({selectedStoreInfo, onChangeStore }) => {
    return (
        <section className="py-16">
            <div className="w-[95%] lg:w-[80%] m-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <StoreContactDetails selectedStoreInfo={selectedStoreInfo} storeContactText="Faça parte da equipe" />
                    <WorkWithUsForm onChangeStore={onChangeStore} />
                </div>
            </div>
        </section>
    )
}

