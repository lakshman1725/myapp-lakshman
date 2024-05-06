import { useState } from 'react';
import './App.css';
import Parent from './communication/parent';
import { Mycontext } from './communication/context';


function App() {
  var x={
    firstname:"jagga",
    age:22,
    place:"rcpm"
  }
  
  var[mydetails,setMydetails]=useState("KOLAPTI")
  return (
    <Mycontext.Provider value={{x}}>
  <div className='border border-2 border-info'>
    
      <h1>APP:{mydetails}</h1>
      <Parent></Parent>
      </div>
      </Mycontext.Provider>
  );
}

    
export default App;
