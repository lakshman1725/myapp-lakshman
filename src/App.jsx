import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Products from './features/products/products';
import Posts from './features/posts/posts';
import { Outlet } from 'react-router-dom';
import Header from './features/shared/Header';

function App() {
  return (
   <div >
    <Header></Header>
    <h1 className='text-danger' >
      REDUX-TOOL-KIT
      </h1>
      <div>
      <Outlet></Outlet>
      </div>
      
    
   </div>
  );
}

export default App;
