import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preconnect to Tailwind UI */}
          <link rel='preconnect' href='https://tailwindui.com' />
          <link rel='dns-prefetch' href='https://tailwindui.com' />

          {/* Preconnect to jsdelivr CDN */}
          <link rel='preconnect' href='https://cdn.jsdelivr.net' />
          <link rel='dns-prefetch' href='https://cdn.jsdelivr.net' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
