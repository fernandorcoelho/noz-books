import { setCookie } from 'nookies';

interface ISaveDateInCookieProps {
  keyCookie: string;
  data: string;
  time?: number;
}

export function handleSavaDataInCookie({
  keyCookie,
  data,
  time
}: ISaveDateInCookieProps) {
  setCookie(undefined, `@NozBooks:${keyCookie}`, data, {
    maxAge: time ?? 60 * 60 * 24 * 30, // 30 days
    path: '/'
  });
}
