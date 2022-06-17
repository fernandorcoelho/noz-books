/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AxiosError } from 'axios';
import { api, setAuthentication } from 'services/client/api';
import { IPayloadSignIn, IUserData } from 'types/auth';
import { handleSavaDataInCookie } from 'utils/saveDataInCookie';

class AuthService {
  async signIn(payload: IPayloadSignIn): Promise<void> {
    try {
      const { data, headers } = await api.post<IUserData>(
        '/auth/sign-in',
        payload
      );

      setAuthentication(headers.authorization!);

      handleSavaDataInCookie({
        keyCookie: 'userData',
        data: JSON.stringify(data)
      });

      handleSavaDataInCookie({
        keyCookie: 'accessToken',
        data: headers.authorization!
      });

      handleSavaDataInCookie({
        keyCookie: 'refreshToken',
        data: headers.authorization!
      });
    } catch (err) {
      const error = err as AxiosError;

      if (error.isAxiosError) {
        switch (error.response.status) {
          case 401:
            throw new Error('Email e/ou senha incorretos.');
          case 500:
            throw new Error('Infelizmente ocorreu um erro no servidor');
          default:
            throw new Error(error.response.statusText);
        }
      }

      throw new Error(error.message);
    }
  }
}

const authService = new AuthService();

export { authService };
