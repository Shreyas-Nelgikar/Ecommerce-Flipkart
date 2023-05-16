import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';

//Components
import { getProductDetails } from '../../Redux/Action/ProductAction';
import { useSelector } from 'react-redux';
import ImageView from './ImageView';
import styled from '@emotion/styled';
import Information from './Information';

const Wrapper = styled(Grid)`
  display: flex;
`;

const LeftBox = styled(Grid)`
  width: 1300px;
`;

const RightBox = styled(Grid)`
  width: 65px;
  padding: 20px 20px 20px 0px;
`;

export default function DetailView() {

    const { loading } = useSelector(state => state.getProductDetails)
    const { product } = useSelector(state => state.getProductDetails); 
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
      if (product && id !== product.id)
        dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

  return (
    <Box>
      { product && Object.keys(product).length && 
        <Wrapper container xl={12} lg={12} md={12} sm={12} xs={12}>
            <LeftBox item xl={4.8} lg={4.8} md={4.8} sm={4.8} xs={4.8}>
              <ImageView product={ product }/>
            </LeftBox>
            <RightBox item xl={7.2} lg={7.2} md={7.2} sm={7.2} xs={7.2}>
              <Information product={ product } />
            </RightBox>
        </Wrapper>
      }   
    </Box>
  )
}