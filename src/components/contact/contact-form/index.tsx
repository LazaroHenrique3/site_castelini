import { useState } from "react";
import { Formik } from "formik";
import { validationContactFormSchema } from "./yupValidation";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InputSelect } from "@/components/input-select";
import { Input } from "@/components/input";
import { InputPhone } from "@/components/input-phone";
import { InputTextarea } from "@/components/input-textarea";
import { PrimaryButton } from "@/components/primary-button";
import { initialValuesContactForm } from "@/data/ContactFormData";
import { IContactFormType } from "@/types/IContactFormDataType";
import { mapCitiesToSelectOptions, mapStatesToSelectOptions, mapStoresToSelectOptions } from "@/app/utils";
import { brazilCities } from "@/data/CityData";
import { brazilStates } from "@/data/StatesData";
import { stores } from "@/data/StoresData";

interface IContactForm {
  onChangeStore: (number: string) => void;
}

export const ContactForm: React.FC<IContactForm> = ({ onChangeStore }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUf, setSelectedUf] = useState<string | null>(null);

  const onSubmit = (values: IContactFormType, { resetForm }: { resetForm: () => void }) => {
    const isFormValid = true;
    setIsLoading(true)

    if (isFormValid) {
      setIsLoading(false)
      toast.success('Mensagem enviada com sucesso!');
      resetForm();
    } else {
      setIsLoading(false)
      toast.error('Ocorreu um erro ao enviar a mensagem, volte mais tarde!');
    }
  };

  return (
    <Formik
      initialValues={initialValuesContactForm}
      validationSchema={validationContactFormSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => {

        const handleSelectUfChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange(event);
          setSelectedUf(event.target.value);
        };

        const handleSelectStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange(event);
          onChangeStore(event.target.value);
        };

        return (
          <div className="flex-1 w-full shadow-2xl rounded-lg bg-white p-10">
            <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 lg:grid-cols-6 gap-6">
              <div className="flex flex-col col-span-6 lg:col-span-6">
                <InputSelect
                  name="store"
                  id="store"
                  value={String(values.store)}
                  onChange={handleSelectStoreChange}
                  onBlur={handleBlur}
                  options={mapStoresToSelectOptions(stores)}
                  placeholder="Selecione a Loja"
                  disabled={isLoading}
                />
                {touched.store && errors.store && <small className="text-red-500">{errors.store}</small>}
              </div>

              <div className="flex flex-col col-span-6 lg:col-span-2">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Digite seu nome"
                  disabled={isLoading}
                />
                {touched.name && errors.name && <small className="text-red-500">{errors.name}</small>}
              </div>

              <div className="flex flex-col col-span-6 lg:col-span-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Digite seu email"
                  disabled={isLoading}
                />
                {touched.email && errors.email && <small className="text-red-500">{errors.email}</small>}
              </div>

              <div className="flex flex-col col-span-6 lg:col-span-2">
                <InputPhone
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Digite seu telefone"
                  disabled={isLoading}
                />
                {touched.phone && errors.phone && <small className="text-red-500">{errors.phone}</small>}
              </div>

              <div className="flex flex-col col-span-6 lg:col-span-3">
                <InputSelect
                  name="state"
                  id="state"
                  value={values.state}
                  onChange={handleSelectUfChange}
                  onBlur={handleBlur}
                  options={mapStatesToSelectOptions(brazilStates)}
                  placeholder="Selecione o Estado"
                  disabled={isLoading}
                />
                {touched.state && errors.state && <small className="text-red-500">{errors.state}</small>}
              </div>

              <div className="flex flex-col col-span-6 lg:col-span-3">
                <InputSelect
                  name="city"
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={mapCitiesToSelectOptions(brazilCities, selectedUf)}
                  placeholder="Selecione a Cidade"
                  disabled={isLoading}
                />
                {touched.city && errors.city && <small className="text-red-500">{errors.city}</small>}
              </div>

              <div className="flex flex-col col-span-6 md:col-span-6">
                <InputTextarea
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Digite sua mensagem"
                  disabled={isLoading}
                  rows={3}
                />
                {touched.message && errors.message && <small className="text-red-500">{errors.message}</small>}
              </div>

              <div className="flex flex-col col-span-2">
                <PrimaryButton type="submit" disabled={isLoading} linkText={isLoading ? 'Enviando...' : 'Enviar'} />
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};
