import { destroyCookie, parseCookies } from 'nookies';

export async function handleDestroyCookies(keyCookie: string) {
  await new Promise((resolve, reject) => {
    const key = `@NozBooks:${keyCookie}`;

    destroyCookie(undefined, key);

    const { key: cookie } = parseCookies();

    if (!cookie) resolve(true);

    reject;
  });
}
