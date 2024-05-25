import logo from './logo.svg';
import './App.css';

import { Link, Outlet, } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './store/headers';
function App(props) {
  
  return (
    

    <div className='border border-2 border-success m-2 p-2'>
    
    <div>
      <Header></Header>

    <Outlet></Outlet>
    
    </div>
      
 
     </div>
      
  
    
  );
}
export default connect(store=>store)(App)
