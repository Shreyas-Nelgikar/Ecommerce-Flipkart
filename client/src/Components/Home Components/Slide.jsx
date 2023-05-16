import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const Container = styled(Box)`
    background: #FFFFFF;
    margin-top: 8px;
  `;

  const Deal = styled(Box)`
    display: flex;
    align-items: center;
    padding: 12px 28px;
    border-bottom: 3px solid #F2F2F2;
  `;

  const DealText = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    width: 16%;
  `;

  const Timer = styled(Box)`
    display: flex;
  `;

  const Time = styled(AccessAlarmIcon)`
    width: 35px;
    height: 27px;
    margin: 0px 8px 0px 30px;
  `;

  const View = styled(Button)`
    background-color: #2874f0;
    margin-left: auto;
    height: 35px;
    border-radius: 1px;
    color: #FFFFF;
  `;

  const Product = styled(Carousel)`
    margin-top: 8px;
  `;

  const Image = styled('img')({
    height: '150px',
    width: 'auto',
    marginBottom: 18
  })

  const Title = styled(Typography)`
    line-height: 30px;
  `;

export default function Slide({ products }) {

    const renderer = ({hours, minutes, seconds}) => {
        return <span style={{ padding: 2, color: '#7f7f7f' }}>{hours}:{minutes}:{seconds} Left</span>;
    }

  return (
    <Container>
        <Deal>
            <DealText> Deals of the Day </DealText>
            <Timer>
                <Time/>
                <Countdown date={ Date.now() + 8.64e+7 } renderer={ renderer }>
                </Countdown>
            </Timer>
            <View variant= 'contained' color='primary'> VIEW ALL </View>
        </Deal>
        <Product 
            responsive={ responsive }
            swipeable={true}
            draggable={false}
            infinite={true}
            autoPlay={ false }
            autoPlaySpeed={4000}>
            {
                products.map(product => (
                  <Link to={ `products/${product.id}` } style={{ textDecoration: 'none', color: 'black' }}> 
                    <Box textAlign="center" style={{ padding: '25px 15px' }}> 
                        <Image src={ product.url } alt='product'/>
                        <Title style={{ fontSize: 15, fontWeight: 600 }} > { product.title.shortTitle } </Title>
                        <Title style={{ color: 'green' }} > { product.discount } </Title>
                        <Title style={{ fontSize: 14, color: '#121212', opacity: '0.6' }} > { product.tagline } </Title>
                    </Box>
                  </Link>
                ))
            }
        </Product>
    </Container>
  )
}
