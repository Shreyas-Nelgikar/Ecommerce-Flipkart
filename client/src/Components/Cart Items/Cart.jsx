import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DetailCart from './DetailCart';
import { useDispatch, useSelector } from 'react-redux';
import ImageCart from './ImageCart';
import EmptyCart from './EmptyCart';

const Wrapper = styled(Grid)`
    width: 1365px;
    display: flex;
    background-color: #f1f3f6;
`;

const LeftWrapper = styled(Grid)`

`;

const RightWrapper = styled(Grid)`

`;

export default function Cart() {

  const { cartItems } = useSelector(state => state.getCart);

  return (
    <>
      { 
        cartItems.length ? 
          <Wrapper container xl={12} lg={12} md={12} sm={12} xs={12}>
            <LeftWrapper item xl={7.8} lg={7.8} md={7.8} sm={7.8} xs={7.8}>
              <ImageCart cartItems={ cartItems } />
            </LeftWrapper>
            <RightWrapper xl={4.2} lg={4.2} md={4.2} sm={4.2} xs={4.2}>
              <DetailCart cartItems={ cartItems } />
            </RightWrapper>
          </Wrapper>
        :
          <EmptyCart/>
      }
    </>
  )
}
