import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(
  req: NextRequest,
  res: NextResponse,
  ev: NextFetchEvent
) {
  const url = req.nextUrl.clone();
  const token = req.cookies['@NozBooks:accessToken'];

  if (url.pathname === '/' && token) {
    url.pathname = '/livros';

    return NextResponse.redirect(url);
  }

  if (url.pathname === '/livros' && !token) {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
