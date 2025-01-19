import * as Yup from 'yup';

import { IContactFormType } from '@/types/IContactFormDataType';

// Definindo o esquema de validação com Yup
export const validationContactFormSchema: Yup.Schema<IContactFormType> = Yup.object().shape({
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
});

