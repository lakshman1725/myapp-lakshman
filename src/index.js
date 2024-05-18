import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    Router,
    RouterProvider,
  } from "react-router-dom";
import Fzv3 from './react router dom/fzv3';
import Poojahegde from './react router dom/poojahegde';
import Pawankalyan from './react router dom/pawankalyan';
import Blackcurrent from './react router dom/black current';
import Countries from './react router dom/restcountries';
import CountryDetails from './react router dom/countryDetails';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/bike",
            element:<Fzv3></Fzv3>
        },
        {
            path:"/heroine",
            element:<Poojahegde></Poojahegde>
        },
        {
            path:"/hero",
            element:<Pawankalyan></Pawankalyan>
        },
        {
            path:"/icecream",
            element:<Blackcurrent></Blackcurrent>
        },
        {
          path:"/countries",
          element:<Countries></Countries>,
         
      },
      {
        path:"/countrydetails/:cname",
        element:<CountryDetails></CountryDetails>
       
    },
       ]
    }
   ]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
