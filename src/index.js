import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
//import App from './App';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
