import logo from './logo.svg';
import './App.css';

import { Link, Outlet, } from 'react-router-dom';

function App() {
  
  return (
    <div>

    <div className='border border-2 border-secondary m-2 p-2'>
     
     {/* <h1>Cart:{props.Productreducer.cart.length}</h1>  */}
     <Link to="count">COUNTER</Link><br/>
     <Link to="todos">TODOLIST</Link><br/>
     <Link to="pro">PRODUCTS</Link><br/>
     </div>
      <Outlet></Outlet>
      
    </div>
    
  );
}

export default App
