import React from 'react'
import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Components
import Navigation from './Navigation'
import Banner from './Banner'
import styled from '@emotion/styled'
import { getProducts } from '../../Redux/Action/ProductAction'
import Midslide from './Midslide'
import MidBanner from './MidBanner'
import Slide from './Slide'

const Container = styled(Box)`
    width: 1321px;
    margin-top: 4px;
    padding: 14px 14px 14px 14px;
    background: #F2F2F2;
`;

export default function Home() {

  const { products } = useSelector(state => state.getProducts);
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(getProducts())
  }, [Dispatch]);

  return (
    <>
      <Grid container xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box style={{ boxShadow: '0 5px 10px 0 rgba(0,0,0,.16)', height: 110, width: 1349 }}>
            <Navigation/>
        </Box>
        <Container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Banner/>
          </Grid>
            <Midslide products= { products }/>
            <MidBanner/>
            <Slide products={ products }/>
        </Container>
      </Grid>
    </>
  )
}
