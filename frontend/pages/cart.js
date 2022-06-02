import React, { useContext } from 'react';
import {
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  TableContainer,
  Card,
  List,
  ListItem,
} from '@material-ui/core';
import NextLink from 'next/link';

import Main from '../components/Main';
import Layout from '../components/Layout';
import { Store } from '../context/store';
import Image from 'next/image';
import { DeleteOutline } from '@material-ui/icons';
import EmptyChart from '../components/EmptyChart';

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, quantity) => {
    // const { data } = await axios.get(`/api/products/${item._id}`);
    // if (data.countInStockInStock <= 0) {
    //   window.alert('Sorry product is out of stock');
    //   return;
    // }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <Layout>
      {cartItems.length === 0 ? (
        <EmptyChart />
      ) : (
        <>
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>
              <Card>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <NextLink href={`/products/${item.slug}`} passHref>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                ></Image>
                              </Link>
                            </NextLink>
                          </TableCell>

                          <TableCell>
                            <NextLink href={`/products/${item.slug}`} passHref>
                              <Link>
                                <Typography>{item.name}</Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Select
                              value={item.quantity}
                              onChange={(e) =>
                                updateCartHandler(item, e.target.value)
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </TableCell>
                          <TableCell align="right">UGX{item.price}</TableCell>
                          <TableCell align="right">
                            <Button
                              color="secondary"
                              onClick={() => removeItemHandler(item)}
                            >
                              <DeleteOutline />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h6">
                      Subtotal (
                      {cartItems.reduce((a, c) => a + c.quantity, 0) || 0}
                      items) : UGX
                      {cartItems.reduce(
                        (a, c) => a + c.quantity * c.price,
                        0
                      ) || 0}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={checkoutHandler}
                      fullWidth
                    >
                      Check Out
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Layout>
  );
};

export default Cart;
