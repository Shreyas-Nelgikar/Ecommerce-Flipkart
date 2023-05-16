import React from 'react'
import Slide from './Slide'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const Container = styled(Box)`
    display: flex;
`;

const Items = styled(Box)`
    width: 80%;
`;

const Add = styled(Box)`
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    width: 20%;
    margin-left: 6px;
    padding: 12px 6px 0px 6px;
    margin-top: 8px;
`;

export default function Midslide({ products }) {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Container>
        <Items>
            <Slide products={ products }/>
        </Items>
        <Add>
            <img src={ adURL } alt="ad" style={{ width: '234px', height: '97%' }}/>
        </Add>
    </Container>
  )
}
