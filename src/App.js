import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [openDiv, setOpenDiv] = useState(false);
  const openConfig =(e) =>  {
      const tableConfig =document.querySelector('.table__config');

      if (openDiv === false){
      tableConfig.classList.add('active')
      setOpenDiv(true);
    }


    else {
       tableConfig.classList.remove('active');
       setOpenDiv(false);
    }

}



  return (
    <div className="app">
      <div className="container">
    <button onClick={openConfig} className="open__button">Open Config</button>
    <div className="table__config">
      
    
    </div>
    </div>
    </div>
  );
}

export default App;
