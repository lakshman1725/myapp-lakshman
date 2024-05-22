import logo from './logo.svg';
import './App.css';
import Counter from './store/counter';
import Todos from './store/todolist';
import Products from './store/products';
import { connect } from 'react-redux';



function App(props) {
  console.log(props)
  return (
    <div className='border border-2 border-warning m-2 p-2'>
     
     <h1>Cart:{props.Productreducer.cart.length}</h1> 
     <Products></Products>
     <Counter></Counter>
     <Todos></Todos>
  
    </div>
  );
}

export default connect(store=>store) (App);
