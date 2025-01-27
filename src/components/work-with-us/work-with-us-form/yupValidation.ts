import * as Yup from 'yup';
import { IWorkWithUsFormType } from '@/types/IWorkWithUsFormDataType';

export const validationWorkWithUsFormSchema: Yup.Schema<IWorkWithUsFormType> = Yup.object().shape({
  store: Yup.string().required('Selecione a loja').test('is-greater-than-zero', 'Loja inválida', (value) => {
    // Converte o valor para número
    const numericValue = Number(value);

    // Verifica se o valor convertido é um número válido e maior que 0
    return !isNaN(numericValue) && numericValue > 0;
  }),
  name: Yup.string().required('Digite seu nome').transform(value => (value ? value.trim() : '')).min(3).max(100),
  email: Yup.string().email('Email inválido').min(5, 'Email inválido').max(100, 'Email inválido').matches(/^[\w!#$%&'*+/=?`{|}~.-]+@([\w-]+\.)+[\w-]{2,4}$/, 'Ex: exemplo@dominio.com').required('Digite seu email'),
  phone: Yup.string().required('Digite seu telefone').matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  state: Yup.string().required('Selecione o Estado'),
  city: Yup.string().required('Selecione a Cidade'),
  message: Yup.string().required('Digite sua mensagem'),
  curriculum: Yup.mixed<File>()
    .required('Envie seu currículo')
    .test('isImageOrPdf', 'O currículo deve ser uma imagem (JPEG, PNG, JPG) ou PDF', (value: File | null) => {

      if (!value) {
        return false; // Nenhum arquivo foi enviado
      }

      // Verificando se o valor é um arquivo
      if (!(value instanceof File)) {
        return false; // Não é um arquivo válido
      }

      // Verificando o formato do currículo
      const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!supportedFormats.includes(value.type)) {
        return false; // Formato inválido
      }

      // Verificando o tamanho do arquivo (max 2MB)
      const maxSize = 2 * 1024 * 1024; // 2MB em bytes
      if (value.size > maxSize) {
        return false; // Tamanho maior que 2MB
      }

      return true; // Validação bem-sucedida
    }),
});
