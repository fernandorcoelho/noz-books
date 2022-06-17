import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';

import router from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { Input } from 'components/Input';
import { InputError } from 'components/InputError';
import MetaTags from 'components/MetaTags';
import { Tooltip } from 'components/Tooltip';
import { authService } from 'services/useCases/AuthService';
import { signInSchema } from 'shared/validators/index';
import * as S from 'styles/home';

interface IValuesFormSignIn {
  email: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  async function handleSignIn(values: IValuesFormSignIn) {
    try {
      setIsLoading(true);

      await authService.signIn(values);

      router.push('/livros');
    } catch (err) {
      const error = err as AxiosError;

      setErrorRequest(error.message);

      setTimeout(() => {
        setErrorRequest(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <MetaTags
        title="Login | Noz Books"
        description="Bem-vindo(a) à Noz Books, o único lugar que você encontra os melhores livros para desenvolvimento pessoal e profissional."
        image="/images/favicon.png"
        url=""
        keywords="noz books desenvolvimento pessoal profissional login sign in"
      />

      <S.Main>
        <S.Section>
          <div>
            <img src="images/white-logo.svg" alt="Logo branca Noz Boooks" />
            <p>Books</p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {errors.email ? (
              <InputError type={errors.email.type} field="email" />
            ) : null}

            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              {...register('password')}
              isButton={
                <button type="submit" disabled={isLoading}>
                  {isLoading ? <LoadingIcon size={20} /> : 'Entrar'}
                </button>
              }
            />
            {errors.password ? (
              <InputError type={errors.password.type} field="password" />
            ) : null}

            {!!errorRequest && <Tooltip text={errorRequest} />}
          </form>
        </S.Section>
      </S.Main>
    </>
  );
}
