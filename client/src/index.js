import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@material-ui/core'
import './index.css';
import App from './App';

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

function Main () {
  return (
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);