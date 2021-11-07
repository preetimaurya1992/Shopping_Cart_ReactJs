import './App.css';
import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import ItemBody from './card/ItemBody';
//import MyLogin from './form/LoginForm';
import styles from './form/login.module.css';

function App() {
  const [category,setCategory]=useState('Home');
  return (
    <div className="App">
      <Navbar setCategory={setCategory} category={category}/>
      {
        category === 'Login' ? (<div>
          <div className={styles.formContainer}>
<h1 className={styles.login}>Login Page</h1>
  <form className={styles.formMain}>
    <div className="red">
  
    <input type="email" name="email" placeholder="Email" className={styles.inputs}/><br/>

    <input type="password" name="passwoed"  /><br/>
    <button className={styles.button}>Login</button>
    </div>
  </form>
</div>

          </div>) : <ItemBody setCategory={setCategory} category={category}/>
      }
    </div>
  );
}

export default App;
