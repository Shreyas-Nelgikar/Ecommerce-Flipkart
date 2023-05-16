import React, { useContext } from 'react'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Box, Button, Grid, TextField, Typography, styled } from '@mui/material';

//Components
import { authenticateSignUp } from '../../Service/Api';
import { DataContext } from '../../Context/Dataprovider';
import { authenticateLogin } from '../../Service/Api';

const Container = styled(Box)`
        display: flex;
        flex-direction: row;
        height: 80vh;
        width: 50vw;
        overflow: unset;
    `;

    const Image = styled(Box)`
        padding: 37px 80px 0px 32px;
        width: 58%;
        height: 494px;
        background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
        & > p {
            color: #fff;
            margin-top: 20px;
        }
    `;

    const Login = styled(Typography)`
        font-size: 26px;
        color: #fff;
        font-weight: 600;        
    `;

    const Wrapper = styled(Box)`
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 87.5%;
        width: 84%;
    `;

    const Buttons = styled(Button)`
        color: white;
        background: #fb641b;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
        text-transform: none;
        height: 50px;
    `;

    const Account = styled(Typography)`
        font-size: 13px;
        color: #2874f0;
        text-align: center;
        cursor: pointer;
        font-weight: 600;
    `;

    const Error = styled(Typography)`
        color: red;
        font-size: 14px;
        font-weight: 600;
    `;

const accountIntialisation = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
};

const userDetails = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phoneno: ''
};

const userLogin = {
    username: '',
    password: ''
};

export default function LoginDialog({ open, setOpen }) {

    const [account, toggleAccount] = useState(accountIntialisation.login);
    const [signUp, setSignUp] = useState(userDetails);
    const {setAccount} = useContext(DataContext);
    const [login, setLogin] = useState(userLogin);
    const [error, setError] = useState(false);

    const DialogClose = () => {
        setOpen(false);
        setError(false);
        toggleAccount(accountIntialisation.login);
    }

    const toggle = () => {
        toggleAccount(accountIntialisation.signup);
    }

    const onInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }

    const createAccount = async () => {
        let response = await authenticateSignUp(signUp);
        console.log(response);
        if (response.status === 401)
            return;
        DialogClose();
        setAccount(signUp.firstname);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const LogIn = async () => {
        let response = await authenticateLogin(login);
        if (response.status === 200) {
            DialogClose();
            setAccount(response.data.data.firstname);
        }
        else
            setError(true);
    }

  return (
    <Grid container lg={12} md={12} sm={12} xs={12}>
        <Dialog open={ open } onClose={ DialogClose } PaperProps={{ sx: { maxWidth: 'unset', maxHeight: 'unset' } }}> 
                <Container>
                    <Grid item lg={4.6} md={4.6} sm={4.6} xs={4.6}> 
                        <Image>
                            <Login variant="h5"> { account.heading } </Login>
                            <Typography> { account.subHeading } </Typography>
                        </Image>
                    </Grid>
                    <Grid item lg={7.4} md={7.4} sm={7.4} xs={7.4}> 
                    { account.view === 'login' ? 
                        <Wrapper>
                            { error &&  
                            <Error> Enter Valid Username or Password! </Error>
                            }
                            <TextField variant='standard' onChange={ onValueChange } name='username' label='Enter Email/Mobile Number'/>
                            <TextField variant="standard" onChange={ onValueChange } name='password' label="Enter Password"/>
                            <Typography style={{ fontSize: 12 }}> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Typography>
                            <Buttons onClick={ LogIn }> Login </Buttons>
                            <Typography style={{ textAlign: 'center' }}> OR </Typography>
                            <Buttons> Request OTP </Buttons>
                            <Account onClick={ toggle }> New to Flipkart? Create an account </Account>
                        </Wrapper>
                    :
                        <Wrapper>
                            <TextField variant="standard" onChange={onInputChange } name='firstname' label='Enter First Name' />
                            <TextField variant="standard" onChange={ onInputChange } name='lastname' label="Enter Lastname" />
                            <TextField variant="standard" onChange={ onInputChange} name='username' label="Enter Username" />
                            <TextField variant="standard" onChange={ onInputChange } name='email' label="Enter Email" />
                            <TextField variant="standard" onChange={ onInputChange } name='password' label="Enter Password" />
                            <TextField variant="standard" onChange={ onInputChange } name='phoneno' label="Enter Phone number" />
                            <Buttons onClick={ createAccount }> Continue </Buttons>
                        </Wrapper> 
                    }
                    </Grid>
                </Container>
        </Dialog>
    </Grid>
  )
}
