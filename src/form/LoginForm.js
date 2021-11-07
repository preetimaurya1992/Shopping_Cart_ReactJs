import React from "react";
import styles from './form/login.module.css';
const MyLogin = ()=>{
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
}
export default MyLogin;
