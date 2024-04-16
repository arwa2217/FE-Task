import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { BrowserRouter,HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./styles/reset-css.css";
import "./styles/theme.css";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
