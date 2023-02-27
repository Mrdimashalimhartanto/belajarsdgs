import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="e-servicing, asuransi ciputra indonesia, aplikasi asuransi ciputra indonesia"
        />
        <link rel="icon" href="/logo71.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="E-Servicing" />
        <meta
          property="og:description"
          content="e-servicing, asuransi ciputra indonesia, aplikasi asuransi ciputra indonesia"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
