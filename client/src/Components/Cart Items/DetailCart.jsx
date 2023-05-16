import React, { useEffect, useState } from 'react'
import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Conatiner = styled(Box)`
    position: fixed;
    background: white;
    width: 30%;
    margin: 30px;
    height: 55%;
    font-family: Roboto,Arial,sans-serif !important;
`;

const Headear = styled(Box)`
    border-bottom: 1px solid #f0f0f0;
    color: #878787;
    padding: 12px 20px;
`;

const Cell = styled(TableCell)`
    font-size: 15px;
    color: #212121;
    border: none;
    padding: 14px;
    font-family: Roboto,Arial,sans-serif !important;
`

const Amount = styled(Box)`
    border-top: 1px dashed #e0e0e0;
    border-bottom: 1px dashed #e0e0e0;
    font-size: 20px;
    font-weight: 600;
    padding: 18px 14px;
    font-family: Roboto,Arial,sans-serif !important;
`;

export default function DetailCart({ cartItems }) {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const Calculation = () => {
    let disCount = 0;
    let cost = 0;
    cartItems.map(items => {
      cost += items.price.mrp;
      disCount += (items.price.mrp - items.price.cost);
    })
    setPrice(cost);
    setDiscount(disCount);
    setTotalAmount(cost - disCount);
  }

  useEffect(() => {
    Calculation();
  }, [cartItems]);

  return (
    <Conatiner>
        <Headear>
          <Typography style={{ fontWeight: 600 }}> PRICE DETAILS </Typography>
        </Headear>
        <Table>
          <TableBody>
            <TableRow>
              <Cell> Price ({ cartItems.length } items) </Cell>
              <Cell> ₹{ price } </Cell>
            </TableRow>
            <TableRow>
              <Cell> Discount </Cell>
              <Cell style={{ color: '#388e3c' }}> - ₹{ discount } </Cell>
            </TableRow>
            <TableRow>
              <Cell> Coupons for you </Cell>
              <Cell> No Coupons Applied </Cell>
            </TableRow>
            <TableRow>
              <Cell> Delivery Charges </Cell>
              <Cell style={{ color: '#388e3c' }}> ₹40 </Cell>
            </TableRow>
          </TableBody>
        </Table>
        <Amount>
          <Box component='span' style={{ marginRight: 60 }}> Total Amount </Box>
          <Box component='span'> ₹{ totalAmount } </Box>
        </Amount>
        <Typography style={{ color: '#388e3c', fontWeight: 600, padding: '12px 14px' }}> You will save ₹{ discount } on this order </Typography>
    </Conatiner>
  )
}
