import React from 'react';
import {AppBar, Toolbar, Typography, Box, styled} from '@mui/material';
import { Link } from 'react-router-dom';

//Components
import Search from './Search';
import CustomButtons from './CustomButtons';

const HeaderStyle = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    box-shadow: none;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0px;
    text-decoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusLogo = styled('img')({
    height: 10,
    width: 10,
    marginLeft: 2,
})

const ButtonWrapper = styled(Box)`
    margin-left: 10px;
`;

export default function Header() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <HeaderStyle>
        <Toolbar style={{ minHeight: 55 }}>
            <Component to={ '/' }>
                <img src={logoURL} alt='logo' style={{ width: 75 }}/>
                <Box componenet="span" style={{ display: 'flex' }}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                    </SubHeading>
                    <PlusLogo src={subURL} alt="sub-logo"/>
                </Box>
            </Component>
            <Search/>
            <ButtonWrapper>
                <CustomButtons/>
            </ButtonWrapper>
        </Toolbar>
    </HeaderStyle>
  )
}
