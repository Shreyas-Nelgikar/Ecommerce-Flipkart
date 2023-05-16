import React, { useState } from 'react'
import { Box, Button, Grid } from '@mui/material'
import styled from '@emotion/styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Components
import { AddToCart } from '../../Redux/Action/CartAction';
import { payTmPayment } from '../../Service/Api';
import { post } from '../../Utils/paytm';

const Wrapper = styled(Grid)`
    margin: 30px;
    display: flex;
    flex-direction: column;
    width: 35%;
    position: fixed;
`;

const Container = styled(Box)`
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f0f0f0;
`;

const Bottom = styled(Box)`
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
`;

const Buttons = styled(Button)`
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: #fff;
    border-radius: 2px;
    font-weight: 600;
`;

export default function ImageView({ product }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const moveToCart = () => {
        dispatch(AddToCart(product.id, quantity));
        navigate('/cart');
    }

    const buyNow = async () => {
        let response = await payTmPayment({ amount: 500, email: 'abc@gmail.com' });
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        };
        post(information);
    }

  return (
    <Wrapper container xl={12} lg={12} md={12} sm={12} xs={12}>
        <Container> 
            <img src={ product.detailUrl } alt='product'/>
        </Container>
        <Bottom>
            <Buttons variant='contained' onClick={ moveToCart } style={{ background: '#ff9800', padding: '15px 50px' }}> <ShoppingCartIcon/> ADD TO CART </Buttons>
            <Buttons variant='contained' onClick={ () => buyNow() } style={{ background: '#fb641b', padding: '15px 62px' }}> <FlashOnIcon/> BUY NOW </Buttons>
        </Bottom>
    </Wrapper>
  )
}
