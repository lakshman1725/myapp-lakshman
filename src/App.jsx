import logo from './logo.svg';
import './App.css';

import { Link, Outlet, } from 'react-router-dom';
import { connect } from 'react-redux';
function App(props) {
  
  return (
    

    <div className='border border-2 border-secondary m-2 p-2'>
    
    <Link to="count">COUNTER</Link><br/>
     <Link to="todos">TODOLIST</Link><br/>
     <Link to="pro">PRODUCTS</Link><br/>
     <h1>
             Cart:{props.Productreducer.cart.length}
      </h1> 
      
      
     <Outlet></Outlet>
     
     </div>
      
  
    
  );
}
export default connect(store=>store)(App)
