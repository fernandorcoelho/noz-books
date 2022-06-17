import Image from 'next/image';
import router from 'next/router';

import { removeAuthentication } from 'services/client/api';
import { handleDestroyCookies } from 'utils/destroyCookie';
import { handleRecoverUserDataFromCookies } from 'utils/recoverUserDataFromCookie';

import * as S from './styles';

export const Header = () => {
  const userData = handleRecoverUserDataFromCookies();

  const handleSignOut = async () => {
    try {
      await handleDestroyCookies('userData');
      await handleDestroyCookies('accessToken');
      await handleDestroyCookies('refreshToken');

      removeAuthentication();

      router.push('/');
    } catch (err) {
      alert('Erro ao deslogar');
    }
  };

  return (
    <S.Container>
      <div>
        <Image
          width={105}
          height={36}
          src="/images/black-logo.svg"
          alt="Logo escura Noz Boooks"
        />
        <p>Books</p>
      </div>

      <div>
        <p>
          Bem-vindo(a) <strong>{userData?.name}</strong>!
        </p>
        <button
          type="button"
          aria-label="Deslogar"
          onClick={() => handleSignOut()}
        ></button>
      </div>
    </S.Container>
  );
};
