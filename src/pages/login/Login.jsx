import React, { useState } from 'react'
import styles from './login.module.scss';
import logo from "../../assets/images/logo.png"
import {EmailIcon, PasswordIcon } from '../../assets/SvgComponents';
import Button from '../../components/button/Button';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { localStorage.setItem("Email", email); }
    
   
  return (
    <>
      <form className={styles.mainContainer} onSubmit={handleLogin}>
          <div className={styles.container}>
            <img src={logo} className={styles.logoContainer} alt="error display to logo" />
          <div className={styles.formContainer}>
            {/* email */}
            <div className={styles.inputContainer}>
              <EmailIcon width='25px' height='25px' />
              <input type='email' name="email" className={styles.inputFieldContainer} placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {/* password */}
             <div className={styles.inputContainer}>
              <PasswordIcon width='25px' height='25px' />
              <input type='password' name="password" className={styles.inputFieldContainer} placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            </div>
          <Button type="submit" buttonName="Login" customClass={styles.buttonStyle} />
        </div>
        </form>
    </>
  )
}

export default Login

