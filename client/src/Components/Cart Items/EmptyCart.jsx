import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Grid)`
    background-color: #f1f3f6;
    width: 1366px;
    height: 607px;
`

const Empty = styled(Box)`
    display: flex;
    width: 92%;
    height: 70%;
    background: white;
    margin: 40px 60px 0px 60px;
    align-items: center;
    flex-direction: column;
    border-radius: 3px;
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
`;

const Login = styled(Button)`
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    color: white;
    padding: 12px 68px;
    font-size: 14px;
`;

const Footer = styled(Box)`
    width: 100%;
    padding: 21px;
    border-top: 1px solid #ddd;
    font-size: 14px;
`;

export default function EmptyCart() {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <Container container xl={12} lg={12} md={12} sm={12} xs={12}>
        <Empty>
            <img src={ imgurl } style={{ width: '22%', height: '46%' }} alt='empty'/>
            <Typography style={{ fontSize: 18 }}> Missing Cart items? </Typography>
            <Typography style={{ fontSize: 13 }}> Login to see items you added previously </Typography>
            <Login> Login </Login>
        </Empty>
        <Footer>
            <Box component='span' style={{ marginLeft: 75 }}> Policies: Returns Policy | Terms of use | Security | Privacy | Infringement </Box>
            <Box component='span' style={{ marginLeft: 30 }}> © 2007-2023 Flipkart.com </Box>
            <Box component='span' style={{ marginLeft: 225 }}> Need help? Visit the Help Center or Contact Us </Box>
        </Footer>
    </Container>
  )
}
