import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Todolist from './features/todolist/todolist';
import Counter from './features/counter/counter';
import Products from './features/products/products';
import Posts from './features/posts/posts';
import Addposts from './features/AddPosts/Addposts';
import Editposts from './features/AddPosts/Editpost';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
      path: "/todolist",
    element:<Todolist></Todolist> 
      },
      {
      path: "/counter",
      element:<Counter></Counter>
      },
      {
        path: "/products",
        element:<Products></Products>
      },
      {
         path: "/posts",
        element:<Posts></Posts>
       },
       {
        path: "/addposts",
       element:<Addposts></Addposts>,
       
      },
      {
        path: "/editpost",
       element:<Editposts></Editposts>
       
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
