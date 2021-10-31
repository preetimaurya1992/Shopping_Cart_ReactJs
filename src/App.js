import './App.css';
import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import ItemBody from './card/ItemBody';

function App() {
  const [category,setCategory]=useState('Home');
  return (
    <div className="App">
      <Navbar setCategory={setCategory} category={category}/>
      <ItemBody setCategory={setCategory} category={category}/>
    </div>
  );
}

export default App;
