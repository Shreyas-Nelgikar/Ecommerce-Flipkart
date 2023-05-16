import { useContext, useState } from 'react';
import { Badge, Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import LoginDialog from './Login/LoginDialog';
import { DataContext } from '../Context/Dataprovider';
import Profile from './Home Components/Profile';

const Wrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        font-weight: 600;
    }
`;

const ButtonType = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 4px 40px;
    border-radius: 2px;
    height: 30px;
    box-shadow: none;
`;

const Container = styled(Link)`
    display: flex;
    margin-top: 2px;
    text-decoration: none;
    color: white;
`

export default function CustomButtons() {

    const [open, setOpen] = new useState(false);
    const {Account, setAccount} = useContext(DataContext);

    const { cartItems } = useSelector(state => state.getCart);

    const DailogBox = () => {
        setOpen(true);
    }

  return (
    <Grid container lg={12} md={12} sm={12} xs={12}> 
        <Wrapper>
            {
                Account ? <Profile Account={Account} setAccount={setAccount}/>
                :
                <ButtonType variant="contained" onClick={ DailogBox }>Login</ButtonType>
            }
            <Typography style={{ marginTop: 3 }}> Become a Seller </Typography>
            <Typography style={{ marginTop: 3 }}> More </Typography>
            <Container to='/cart'>
                <Badge badgeContent={ cartItems?.length } color='warning' style={{ color: 'white' }}>
                    <ShoppingCartIcon/>
                </Badge>
                <Typography style={{ fontWeight: 600 }}> Cart </Typography>
            </Container>
            <Grid item lg={12} md={12} sm={12} xs={12}> 
                <LoginDialog open={ open } setOpen = { setOpen }/>
            </Grid>
        </Wrapper>
    </Grid>
  )
}
