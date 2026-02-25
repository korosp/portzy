// pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Dev Fullstack — Next.js, Express, Python, FastAPI" />
        <meta property="og:title" content="Dev Portfolio | Fullstack Developer" />
        <meta property="og:description" content="Membangun aplikasi web modern dari frontend hingga backend." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
