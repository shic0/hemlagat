import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@material-ui/core'
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const theme = createTheme({
  palette: {
      primary: {
          main: '#61dafb'
      },
      secondary: {
          main: '#00ff00'
      }
  }
});

const stripePromise = loadStripe(
  "pk_test_51JZsdSEUI9kk9AxtuDRxlKWT3RWFRuKcvNGU1P3LYhrMVRyExpLdYlBtlE25wD1eSPXzWS5ZI9sufngFnnbxMudo00iTiaLYfI"
);

function Main () {
  return (
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>  
      </ThemeProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);