import logo from './logo.svg';
import './App.css';
import Counter from './store/counter';
import Todos from './store/todolist';
import Products from './store/products';



function App() {
  return (
    <div className='border border-2 border-warning m-2 p-2'>
     
     <h1>APP</h1> 
     
     <Counter></Counter>
     <Todos></Todos>
    <Products></Products>
    </div>
  );
}

export default App;
