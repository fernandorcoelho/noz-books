import { GetServerSidePropsContext } from 'next';

import axios from 'axios';
import { parseCookies } from 'nookies';

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const { '@NozBooks:accessToken': accessToken } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://books.appnoz.com.br/api/v1'
  });

  if (accessToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }

  return api;
}

export const api = setupAPI();

export const setAuthentication = (accessToken: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const removeAuthentication = () => {
  api.defaults.headers.common['Authorization'] = '';
};
