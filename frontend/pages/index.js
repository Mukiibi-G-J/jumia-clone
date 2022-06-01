import { ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Product from '../models/Product';
import db from '../utils/db';
import { theme } from '../utils/theme';

export default function Home(props) {
  const { products } = props;
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Feed products={products} />
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  await db.connect();
  // //! the lean funciton is used to serializer the document from the mongodb
  const products = await Product.find({}).lean();
  // const products = res.JSON;
  console.log(products);
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
