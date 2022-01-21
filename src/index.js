import React from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import {ThemeProvider, createTheme} from '@material-ui/core'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

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

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* Wrap your app with the stripe promise */}
      <Elements stripe={stripePromise}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Elements>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
