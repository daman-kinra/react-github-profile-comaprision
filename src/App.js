import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [count,counter]=useState(0)
 
     const Incriment=()=>{
      
      counter(count+1);
     }
     const Decriment=()=>{
      
      counter(count-1);
     }
   
  return (
   
   <div className="Daman">
     <div className="Shivam">
     <p>{count}</p>
     <div className="inner">
  
  <button onClick={Decriment}>-ve</button>
  
  <button onClick={Incriment}>+ve</button>
  </div>
  </div>
  </div>
  );
}

export default App;
