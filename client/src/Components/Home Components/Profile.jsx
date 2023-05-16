import React from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 2px;
`;

const Logout = styled(Typography)`
    font-size: 16px;
    margin-left: 6px;
    cursor: pointer;
`;

export default function Profile({ Account, setAccount }) {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logOutUser = () => {
        setAccount('');
    }

  return (
    <>
        <Box onClick={ handleClick } style= {{ cursor: 'pointer' }}>
            <Typography style={{ margin: '3px 0px 0px 30px', fontWeight: 600 }}> { Account } </Typography>
        </Box>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}>
                <MenuItem onClick={() => {handleClose(); logOutUser();}}>
                    <PowerSettingsNewIcon color='primary' fontSize='small'/>
                    <Logout> Logout </Logout>
                </MenuItem>
        </Component>
    </>
  )
}