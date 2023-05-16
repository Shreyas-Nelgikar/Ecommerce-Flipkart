import React, { useEffect } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Components
import { getProducts } from '../Redux/Action/ProductAction';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 34%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`;

const SearchField = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`;

const ListWrapper = styled(List)`
    color: black;
    position: absolute;
    background-color: #FFFFFF;
    margin-top: 34px;
    box-shadow: 2px 3px 5px -1px rgba(0,0,0,.5);
    width: 32.75%;
    border-top: 1px solid #f0f0f0;
`;

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 14px;
`;

export default function Search() {

    const [text, setText] = useState('');

    const changeText = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const clearText = () => {
        setText('');
    }

  return (
    <SearchContainer>
        <SearchField placeholder='Search for products, brands and more'
            onChange={ changeText }
            value={text}
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        {
            text &&
            <ListWrapper>
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                            <LinkWrapper to={ `/products/${product.id}`}
                                onClick={ clearText }
                            > 
                                { product.title.longTitle }
                            </LinkWrapper>
                        </ListItem>
                    ))
                }
            </ListWrapper>
        }
    </SearchContainer>
  )
}
