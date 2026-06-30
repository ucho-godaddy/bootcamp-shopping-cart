import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem'

function ShoppingItemList() {

  // this is the state we will use to hold the response from the api
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect( () => {
    /* fetch list of products here */
    /* update product state with response */
    fetch(`http://localhost:8000/v1/products`)
        .then(res => res.json())
        .then(data => setProducts(data))
  }, [])

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
  }

  return (
    <Grid container direction="row" spacing={1}>

       {products.map(product =>
        <Grid item xs>
          <ShopItem 
            key={product.id}
            product_id={product.id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            is_on_sale={product.is_on_sale}
            sale_price={product.sale_price}
            onAddToCart={handleAddToCart}
          />
          </Grid>
       )}
    </Grid>
  )
}

export default ShoppingItemList;