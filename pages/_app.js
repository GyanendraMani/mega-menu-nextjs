import React from 'react';
import "tailwindcss/tailwind.css"
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  console.log(Component)
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>


  );
}

export default MyApp;