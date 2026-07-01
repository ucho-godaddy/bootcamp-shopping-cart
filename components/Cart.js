import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material'
import CartItem from './CartItem';
import { useRouter } from 'next/router'

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    const router = useRouter();

    useEffect( () => {
        fetch(`http://localhost:8000/v1/cartitems`)
        .then(res => res.json())
        .then(data => setCartItems(data))
  }, [])

    const handleDeleteFromCart = async (id) => {
        const body = JSON.stringify({ id });

        const response = await fetch(`http://localhost:8000/v1/cartitems/${id}`, {
            method: "DELETE",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            setCartItems(cartItems.filter((item) => item.id !== id));
        } else {
            alert(`Failed to delete ${id}: ${response.status}`);
        }
    };

    const totalPrice = cartItems.map(item => item.quantity * item.price)
        .reduce((a, b) => a + b, 0)
    
    return (
        <div>
            <Grid container direction="column" spacing={1}>
                {cartItems.map(item =>
                    <Grid item xs={6}>
                        <CartItem
                        product_id={item.product_id}
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        quantity={item.quantity}
                        onRemoveFromCart={handleDeleteFromCart}
                        />
                    </Grid>
                )}
            </Grid>
            <div style={{"padding-top": "20px"}}>
                <Typography variant="h3">
                    Total: ${totalPrice}
                </Typography>
            </div>
        </div>
    );
}

export default Cart;