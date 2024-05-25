import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // const[rollNo,setRollNo]=useState('003')
  const rollNumbers = [];
  for (let i = 1; i <= 192; i++) {
    rollNumbers.push(i.toString().padStart(3, '0')); // Converts numbers to '001', '002', ..., '190'
  }
  
  return (
    <div className="App">
      <header className=' text-2xl text-center text-blue-400 bg-slate-900'>MVSR DP's</header>
      <div className=' flex flex-wrap w-full justify-center bg-slate-700'>
        {
  
          rollNumbers.map((rollNo)=>(
            <div>
            <img className=' w-32 m-3 rounded-full '
          src={`http://results.mvsrec.edu.in/sbcmsstudent/Frm_StudentPhoto.aspx?StudentCode=${rollNo}`}/>
          <h1 className=' text-center text-gray-300'>{rollNo}</h1>
          </div>
          ))
      
        }
        
      </div>
    </div>
  );
}

export default App;
