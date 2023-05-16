import styled from '@emotion/styled'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveFromCart } from '../../Redux/Action/CartAction'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Address = styled(Box)`
    margin-top: 30px;
    width: 90%;
    background: white;
    height: 70px;
    border-radius: 5px;
`

const ImageBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Image = styled(Box)`
    background: white;
    width: 90%;
    margin-top: 10px;
`

const Block = styled(Box)`
    padding: 30px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    height: 200px;
`

const Details = styled(Box)`
    width: 47%;
    & > p {
        font-size: 15px;
    }
`

const Delivery = styled(Box)`
    width: 32%;
`

const Price = styled(Typography)`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

const Items = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    margin-top: 75px;
`;

const PlaceOrder = styled(Box)`
    background: white;
    height: 60px;
    width: 90%;
    box-shadow: 0 -2px 10px 0 rgba(0,0,0,.1);
    text-align: right;
`;

const Order = styled(Box)`

`;

const ButtonStyle = styled(Button)`
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    color: white;
    padding: 13px 70px;
    border-radius: 1px;
    font-size: 16px;
    font-weight: 600;
    margin: 10px 20px;
`

export default function ImageCart({ cartItems }) {

    const operation = (title) => {
        if (title.length > 40)
            return title.substring(0, 40) + "...";
        return title;
    }

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const deliveryDate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));

    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(RemoveFromCart(id));
    }

  return (
    <Container>
        <Address>

        </Address>
        <Image>
            {
                cartItems.map(product => (
                    <Block>
                        <ImageBox>
                            <img src={ product.url } style={{ width: '100%', height: '66%' }} alt="cart"/>
                            <ButtonGroup variant="outlined">
                                <Button> - </Button>
                                <Button> 1 </Button>
                                <Button> + </Button>
                            </ButtonGroup>
                        </ImageBox>
                        <Details>
                            <Typography> { operation(product.title.longTitle) } </Typography>
                            <Box component='span' style={{ fontSize: 14, color: '#878787', lineHeight: 2.5 }}> Seller: ABCD Retailers </Box>
                            <Box component='span'>
                                <img src={ fassured } style={{ width: 56, verticalAlign: 'middle', marginLeft: 5 }} alt='logo'/>
                            </Box>
                            <Price>
                                <Box component='span' style={{ fontSize: 14, color: '#878787', textDecoration: 'line-through', marginRight: 10 }}> ₹{ product.price.mrp } </Box>
                                <Box component='span' style={{ fontSize: 18, fontWeight: 600, marginRight: 10 }}> ₹{ product.price.cost } </Box>
                                <Box component='span' style={{ fontSize: 14, color: '#388e3c', fontWeight: 600 }}> { product.price.discount } Off </Box>
                            </Price>
                            <Items>
                                <Box component='span' style={{ marginLeft: 5, cursor: 'pointer' }}> SAVE FOR LATER </Box>
                                <Box component='span' style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => remove(product.id) }> REMOVE </Box>
                            </Items>
                        </Details>
                        <Delivery>
                            <Box component='span' style={{ fontSize: 14 }}> Delivery by { deliveryDate.toDateString() } | ₹40 </Box>
                        </Delivery>
                    </Block>
                ))
            }
        </Image>
        <PlaceOrder>
            <Order>
                <ButtonStyle> PLACE ORDER </ButtonStyle>
            </Order>
        </PlaceOrder>
    </Container>
  )
}
