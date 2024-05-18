import logo from './logo.svg';
import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>APP</h1>
      <ul>
        
      <li>
      <Link to="/heroine">Heroine</Link>
      </li>
      <li>
      <Link to="/hero">Hero</Link>
      </li>
      <li>
      <Link to="/bike">My bike</Link>
      </li>
      <li>
      <Link to="/icecream">Icecream</Link>
      </li>
      <li>
        <Link to="/countries">Countries</Link>
        
      </li>
      
      </ul>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
