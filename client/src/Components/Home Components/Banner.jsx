import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

//Data
import { bannerData } from '../../Constants/Constants'
import styled from '@emotion/styled';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Image = styled('img')({
    height: 270,
    width: '100%',
})

export default function Banner() {
  return (
    <Carousel 
        responsive={ responsive }
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={ true }
        autoPlaySpeed={4000}>
        {
            bannerData.map(data => (
                <Image src={ data.url } alt='logo'/>
            ))
        }
    </Carousel>
  )
}
