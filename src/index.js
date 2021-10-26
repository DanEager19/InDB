import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Head';
import Foot from './Foot';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <Foot />
  </React.StrictMode>,
  document.getElementById('root')
);