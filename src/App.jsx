import logo from './logo.svg';
import './App.css';
import Todolist from './component/todolist';

function App() {
  return (
    <div className='border boredr-2 border-info m-2 p-2'>
      <h1 style={{color:"purple"}}>TODO LIST:</h1>
      <Todolist></Todolist>
    
  
    </div>
  )

}

export default App;
