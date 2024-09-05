// pages/_app.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import '../styles/custom.module.css';
import '../styles/tailwind.css';

// Importação do CSS do FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import { HelmetProvider } from 'react-helmet-async';

// Evita que o CSS seja automaticamente adicionado pelo FontAwesome
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
