import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material'
import { getProductImage } from './ShopItem'

function CartItem({ product_id, name, id, image_url, price, quantity, onRemoveFromCart }) {

  const removeFromCart = () => {
    onRemoveFromCart(id)
  }

  return (
    <Card styles={{display: 'flex'}}>
      <CardMedia
            component="img"
            alt="shop item image"
            height="140"
            image={getProductImage(product_id)}
      />
      <div>
        <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;