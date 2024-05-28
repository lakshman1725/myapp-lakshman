import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';

function App() {
  return (
   <div>
    <h1 className='text-primary'>
      REACT-TOOL-KIT
      <div>
      <Counter></Counter>
      <Todolist></Todolist>
      </div>
      
    </h1>
   </div>
  );
}

export default App;
