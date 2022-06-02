import React from 'react';
import { Container, ThemeProvider } from '@material-ui/core';

import Footer from './Footer';

import Header from './Header';
import { theme } from '../utils/theme';

import SmallCards from './SmallCards';
import Category from './Category';
import Advertises from './Advertises';

import Feed from './Feed';

const Main = ({ products }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="bg-[#EAEDED]">
        <Container className="pt-10" maxWidth="lg">
          <Feed />
          <SmallCards />
          <Category products={products} />
          <Advertises />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Main;
