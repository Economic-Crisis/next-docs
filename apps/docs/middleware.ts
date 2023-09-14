import { NextResponse, type NextRequest } from 'next/server'

const allowed = ['ui', 'headless', 'hoi4']

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  if (
    pathname.startsWith('/docs/') &&
    !allowed.includes(pathname.split('/')[2])
  ) {
    const url = new URL(
      '/docs/headless/' + pathname.slice('/docs/'.length),
      req.url
    )

    return NextResponse.redirect(url)
  }

  if (pathname === '/docs') {
    return NextResponse.redirect(new URL('/docs/headless', req.url))
  }

  if (pathname === '/hoi4') {
    return NextResponse.redirect(new URL('/docs/hoi4', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/docs/:path*']
}
