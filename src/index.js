import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { ToogleContext } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseContext from './Context/UseContext';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseContext>
<ToastContainer></ToastContainer>
<div><Toaster/></div>


    <App />

    </UseContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
