import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'

import { Container, Typography } from '@mui/material'

export const CartPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Cart</Typography>
    </div>
    <div>
      <Link href="/shop">View shop</Link>
    </div>
    <Cart />
  </Container>
);

export default CartPage;