import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material'

const images=[
    "",
    "",
    ""
]

function ShopItem({product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart}) {

  const addToCart = () => {
     onAddToCart({ product_id, name, price, quantity: 1})
  }

  return (
    <Card style={{height: "400px"}}>
       <CardMedia
        component="img"
        alt="shop item image"
        height="140"
        image={images[product_id]}
      />
    <CardContent>
        <Typography variant="h4">{name}</Typography>   
        <Typography variant="subtitle2">{description}</Typography>
        <Typography variant="h5">${is_on_sale ? sale_price: price}</Typography>

    </CardContent>
      <CardActions>
        <Button onClick={addToCart} size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;