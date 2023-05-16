import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

//Components

const Rating = styled(Typography)`
  background-color: green;
  color: #FFFFFF;
  font-weight: 600;
  width: 4%;
  font-size: 14px;
  padding: 0px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Reviews = styled(Typography)`
  color: #878787;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;

const Offers = styled(Typography)`
    font-size: 14px;
    line-height: 2.3;
    display: flex;
    align-items: center;
`;

const TC = styled(Typography)`
    font-weight: 600;
    color: blue;
    font-size: 14px;
    margin-left: 29px;
`;

const Column = styled(TableRow)`
    & > td {
        border: none;
    }
`

const Title = styled(TableCell)`
    color: #878787;
    font-weight: 600; 
`;

const Seller = styled(Typography)`
    font-size: 14px;
    line-height: 2.6;
`;

export default function Information({ product }) {

    const date = new Date(new Date().getTime()+(7 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <Box>
        <Typography style={{ fontSize: 19 }}> { product.title.longTitle } </Typography>
              <Box style={{ display: 'flex' }}> 
                <Rating> 2.3 <StarRateIcon fontSize='inherit' /> </Rating>
                <Reviews> 7,440 Ratings & 656 Reviews </Reviews>
              </Box>
        <Typography style={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto,Arial,sans-serif', margin: '12px 0px 8px 0px' }}>
            <Box component='span' style={{ fontSize: 28 }}> ₹{product.price.cost} </Box>
            <Box component='span' style={{ fontSize: 16, marginLeft: 14, color: '#878787', textDecoration: 'line-through' }}> ₹{product.price.mrp} </Box>
            <Box component='span' style={{ fontSize: 16, marginLeft: 14, color: '#388e3c', fontWeight: 600}}> {product.price.discount} off </Box>
        </Typography>
        <Typography style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}> Available Offers </Typography>
        <Box>
            <Offers>
                <LocalOfferIcon fontSize='small' style={{ color: '#26a541', marginRight: 8}} />
                <Box component='span' style={{ fontWeight: 600, marginRight: 5 }}> Bank Offer </Box>
                <Box component='span' style={{ marginRight: 5 }}> Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above </Box>
            </Offers>
            <TC> T&C </TC>
            <Offers>
                <LocalOfferIcon fontSize='small' style={{ color: '#26a541', marginRight: 8}} />
                <Box component='span' style={{ fontWeight: 600, marginRight: 5 }}> Bank Offer </Box>
                <Box component='span' style={{ marginRight: 5 }}> Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above </Box>
            </Offers>
            <TC> T&C </TC>
            <Offers>
                <LocalOfferIcon fontSize='small' style={{ color: '#26a541', marginRight: 8}} />
                <Box component='span' style={{ fontWeight: 600, marginRight: 5 }}> Bank Offer </Box>
                <Box component='span' style={{ marginRight: 5 }}> 5% Cashback on Flipkart Axis Bank Card </Box>
                <TC style={{ marginLeft: 5 }}> T&C </TC>
            </Offers>
            <Offers>
                <LocalOfferIcon fontSize='small' style={{ color: '#26a541', marginRight: 8}} />
                <Box component='span' style={{ fontWeight: 600, marginRight: 5 }}> Partner Offer </Box>
                <Box component='span' style={{ marginRight: 5 }}> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500 </Box>
                <TC style={{ marginLeft: 5 }}> T&C </TC>
            </Offers>
        </Box>
        <Box style={{ fontSize: 14 }}>
            <Table>
                <TableBody>
                    <Column>
                        <Title> Warranty </Title>
                        <TableCell> No Warranty </TableCell>
                    </Column>
                    <Column>
                        <Title> Delivery </Title>
                        <TableCell> Deliverd By { date.toDateString() } | ₹40 </TableCell>
                    </Column>
                    <Column>
                        <Title> Seller </Title>
                        <TableCell style={{ lineHeight: 2.4 }}>
                            <Box component='span' style={{ color: '#2874f0', fontWeight: 600 }}> Retail Net </Box>
                            <Box component='span' style={{ background: '#2874f0', color: 'white', fontSize: 12, padding: '2px 5px 2px 5px', borderRadius: 10 }}> 4.6 <StarRateIcon style={{ fontSize: 12 }}/> </Box>
                            <Seller> 7 Days Service Center Replacement/Repair </Seller>
                            <Seller> GST invoice available </Seller>
                            <Seller style={{ fontWeight: 600, color: '#2874f0' }}> See Other sellers </Seller>
                        </TableCell>
                    </Column>
                    <Column>
                        <TableCell colSpan={2}>
                            <img src={ adURL } alt='coin' style={{ width: 390 }} />
                        </TableCell>
                    </Column>
                    <Column>
                        <Title> Description </Title>
                        <TableCell> { product.description } </TableCell>
                    </Column>
                </TableBody>
            </Table>
        </Box>
    </Box>
  )
}
