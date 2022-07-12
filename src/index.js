import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from "webfontloader";

const root = ReactDOM.createRoot(document.getElementById('root'))
WebFont.load({
  google: {
      families: ['Poppins', "Saira:300,700", "Source Code Pro:500,400,700"]
  }
});
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
