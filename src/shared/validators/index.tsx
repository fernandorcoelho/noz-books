import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória')
});
