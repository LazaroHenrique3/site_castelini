import { ContactForm } from "@/components/contact/contact-form"
import { StoreContactDetails } from "@/components/contact/store-contact-details"
import { IStoreType } from "@/types/IStoreTypes"

interface IStoreContactDetails {
  selectedStoreInfo: IStoreType | null
  onChangeStore: (number: string) => void;
}

export const StoreContactDetailsSection: React.FC<IStoreContactDetails> = ({ onChangeStore, selectedStoreInfo }) => {
  return (
    <section className="py-16">
      <div className="w-[95%] lg:w-[80%] m-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <StoreContactDetails selectedStoreInfo={selectedStoreInfo} storeContactText="Fale conosco" />
          <ContactForm onChangeStore={onChangeStore} />
        </div>
      </div>
    </section>
  )
}

