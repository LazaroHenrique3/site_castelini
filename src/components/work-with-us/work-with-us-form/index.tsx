import { useRef, useState } from "react";
import { Formik } from "formik";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validationWorkWithUsFormSchema } from "./yupValidation";

import { InputSelect } from "@/components/inputs/input-select";
import { Input } from "@/components/inputs/input";
import { InputPhone } from "@/components/inputs/input-phone";
import { InputTextarea } from "@/components/inputs/input-textarea";
import { PrimaryButton } from "@/components/buttons/primary-button";
import { initialValuesWorkWithUsForm } from "@/data/WorkWithUsFormData";
import { mapCitiesToSelectOptions, mapStatesToSelectOptions, mapStoresToSelectOptions } from "@/app/utils";
import { brazilCities } from "@/data/CityData";
import { brazilStates } from "@/data/StatesData";
import { storesData } from "@/data/StoresData";
import { InputFile } from "@/components/inputs/input-file";
import { IWorkWithUsFormType } from "@/types/IWorkWithUsFormDataType";
import { sendWorkWithUsEmailAction } from "@/app/action/email/sendWorkWithUsAction";

interface IWorkWithUsForm {
  onChangeStore: (number: string) => void;
}

export const WorkWithUsForm: React.FC<IWorkWithUsForm> = ({ onChangeStore }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUf, setSelectedUf] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (values: IWorkWithUsFormType, { resetForm }: { resetForm: () => void }) => {
    if (!values.curriculum) {
        console.error('Nenhum currículo foi selecionado');
        return;
    }

    const reader = new FileReader();

    reader.onloadend = async () => {
        const base64File = reader.result as string;

        // Enviar o e-mail com o arquivo em base64
        const response = await sendWorkWithUsEmailAction({
            ...values,
            curriculumBase64: base64File, // Adicionar o arquivo em base64
        });

        setIsLoading(false);

        /* Caso de erro */
        if (!response.success) {
            toast.error('Erro ao enviar mensagem, tente novamente mais tarde!!');
            console.error(response.error);
            return;
        }

        /* Caso de tudo certo */
        resetForm();
        toast.success('Mensagem enviada com sucesso!');

        // Reseta o campo de arquivo manualmente
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Limpa o valor do input
        }
    };

    // Inicia a leitura do arquivo
    reader.readAsDataURL(values.curriculum);
};

  return (
    <Formik
      initialValues={initialValuesWorkWithUsForm}
      validationSchema={validationWorkWithUsFormSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, handleChange, handleBlur, handleSubmit, errors, touched }) => {

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
                  options={mapStoresToSelectOptions(storesData)}
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


              <div className="flex flex-col col-span-6 lg:col-span-6">
                <InputFile
                  ref={fileInputRef} // Referência para o campo de arquivo
                  typesAccept="image/jpeg, image/png, image/jpg, application/pdf"
                  name="curriculum"
                  id="curriculum"
                  onChange={(event) => {
                    // Pegando o arquivo selecionado
                    const file = event.target.files?.[0] || null;
                    setFieldValue("curriculum", file); // Atualizando o estado do Formik
                  }}
                  onBlur={handleBlur}
                  placeholder="Adicione seu currículo"
                  disabled={isLoading}
                />
                {touched.curriculum && errors.curriculum && (
                  <small className="text-red-500">{errors.curriculum}</small>
                )}
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
