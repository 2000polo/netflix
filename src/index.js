import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Viewmovie from './Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <Viewmovie>
      <App />
    </Viewmovie>
  </React.StrictMode>,
  document.getElementById('root')
);

