import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Products from './features/products/products';

function App() {
  return (
   <div>
    <h1 className='classname'>
      REACT-TOOL-KIT
      <div>
      {/* <Counter></Counter>
      <Todolist></Todolist> */}
      {/* <Countries></Countries> */}
      <Products></Products>
      </div>
      
    </h1>
   </div>
  );
}

export default App;
