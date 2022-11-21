import React from 'react'
import logo from "../../../assets/logo.svg"
import styles from "../auth.module.css"

const Login = () => {
  return (
    <>
    <section className={`${styles['auth-section']}`}>
        <div className="justify-content-center flex d-flex">
          <div className="flex d-flex justify-items-between">
            <img src={logo} alt="" />
            <h1 className={`${styles['logo-tikitoko']}`}>Tikitoko</h1>
          </div>
        </div>
        <p className='flex d-flex justify-content-center fw-bold mt-2'>Please login with your account</p>
        <div className="mt-5 justify-content-center align-items-center flex d-flex">
          <button className={`${styles['btn-customer']}`}>Customer</button>
          <button className={`${styles['btn-seller']}`}>Seller</button>
        </div>
        <form>
          <div className="mt-5">
          <div className={`mb-3 ${styles['form-group']}`}>
            <input type="email" id='email' placeholder='Email'/>
          </div>
          <div className={`${styles['form-group']}`}>
            <input type="password" id='password' placeholder='Password'/>
          </div>
          <div className="mt-3 justify-content-center align-items-center flex d-flex">
            <button className={`${styles['form-button']}`}>Forgot Password?</button>
          </div>
          <div className="mt-3 justify-content-center align-items-center flex d-flex">
            <button className={`${styles['form-login']}`}>LOGIN</button>
          </div>
          <div className="mt-3 justify-content-center align-items-center flex d-flex">
          <p>Don't have a Tikitoko account? <button className={`${styles['button-register-now']}`}>Register</button></p>
          </div>
          </div>
        </form>
    </section>

    </>
  )
}

export default Login