import React from 'react'
import { midBannerData } from '../../Constants/Constants'
import { Box, Grid } from '@mui/material'
import styled from '@emotion/styled'

const Wrapper = styled(Grid)`
    margin-top: 8px;
    justify-content: space-between;
`;

export default function MidBanner() {
  return (
    <Wrapper container lg={12} sm={12} md={12} xs={12}
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        {
            midBannerData.map(data => (
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <img src= { data } style={{ width: '98%' }} alt='banner'/>
                </Grid>
            ))
        }
    </Wrapper>
  )
}
