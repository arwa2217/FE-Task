import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./styles/reset-css.css";
import "./styles/theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
