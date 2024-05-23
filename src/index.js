import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import counter from './store/counter'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './store/counter';
import Todolist from './store/todolist';
import Products from './store/products';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[ {
      path:"count",
      element:<Counter></Counter>
     },
    {
      path:"todos",
      element:<Todolist></Todolist>,
     
    },
    {
      path:"pro",
      element:<Products></Products>,
     
    },
    ]
   
  },
 
  
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
     <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
