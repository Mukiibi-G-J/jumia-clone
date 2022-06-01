import nc from 'next-connect';
// import Product from '../../models/Product';
import db from '../../utils/db';

import data, { products } from '../../Library/data';
import Product from '../../models/Product';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();

  await Product.deleteMany();
  //! insertMany allows array
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
