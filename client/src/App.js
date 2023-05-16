import logo from './logo.svg';
import './App.css';

// Componenets
import Header from './Components/Header';
import { Box, Grid } from '@mui/material';
import Home from './Components/Home Components/Home';
import Dataprovider from './Context/Dataprovider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './Components/Details/DetailView';
import Cart from './Components/Cart Items/Cart';

function App() {
  return (
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12}> 
      <Dataprovider>
        <BrowserRouter>
          <Header/>
          <Box style={{ marginTop: 56 }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/products/:id' element={ <DetailView/> } />
                <Route path='/cart' element={ <Cart/> } />
              </Routes>
            </Grid>
          </Box>
        </BrowserRouter>
      </Dataprovider>
    </Grid>
  );
}

export default App;
