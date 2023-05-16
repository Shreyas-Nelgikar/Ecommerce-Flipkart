import React from 'react'
import { navData } from '../../Constants/Constants'
import { Box, Typography, styled } from '@mui/material'

const NavWrapper = styled(Box)`
    display: flex;
    padding: 10px 70px 0px 70px;
    justify-content: space-between;
`;

const Container = styled(Box)`
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

export default function Navigation() {
  return (
    <NavWrapper>
        {
            navData.map(data => (
                <Container>
                    <img src={ data.url } style={{ width: 64 }} alt='logo'/>
                    <Text> { data.text } </Text>
                </Container>
            ))
        }
    </NavWrapper>
  )
}
