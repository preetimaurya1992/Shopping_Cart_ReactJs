import './App.css';
import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import ItemBody from './card/ItemBody';
import {Route,Routes} from 'react-router-dom';

function App() {
  const [category,setCategory]=useState('Home');
  return (
    <div className="App">
      <Navbar setCategory={setCategory} category={category}/>
      <Routes>
        <Route path="/" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/home" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/mobile" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/laptop" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/cloth" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/camera" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/book" element={<ItemBody setCategory={setCategory} category={category}/>} />
        <Route path="/login" element = {<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;
