import '../styles/globals.css'
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Projects by Tobias Løfgren</title>
      <meta name="description" content="Portfolio of side projects made by Tobias Løfgren" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
