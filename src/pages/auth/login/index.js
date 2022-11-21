import React from 'react'
import logo from "../../../assets/logo.svg"
import styles from "../auth.module.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [role, setRole] = useState("Buyer");
  const navigate = useNavigate();

    const [form, setform] = useState({
        email: '',
        password: '',
    })

    const [form2, setform2] = useState({
        email: '',
        password: '',
    })

    const onSubmit1 = (e) => {
        e.preventDefault();
        console.log(form)

        axios.post(`http://localhost:4000/v1/buyer/login`, form)
        .then((response) => {
            console.log(response)
            if (response.data.status !== "success") {
              alert(response.data.message)
            } else {
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("data", JSON.stringify(response.data.data.buyer));
              localStorage.setItem("email", JSON.stringify(response.data.data.buyer.email));
              console.log(response)
              alert ("Login Success")
              return navigate ("/")
            }
        })
        .catch((err) => {
            alert("Account not found")
            console.log(err);
        })
    }

    const onSubmit2 = (e) => {
        e.preventDefault();
        console.log(form2)

        axios.post(`http://localhost:4000/v1/seller/login`, form2)
        .then((response) => {
            console.log(response)
            if (response.data.status !== "success") {
              alert(response.data.message)
            } else {
              localStorage.setItem("token", response.data.data.token);
              localStorage.setItem("data", JSON.stringify(response.data.data.seller));
              localStorage.setItem("email", JSON.stringify(response.data.data.seller.email));
              console.log(response)
              alert ("Login Success")
              return navigate ("/")
            }
        })
        .catch((err) => {
          alert("Account not found")
            console.log(err);
        })
    }

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
          {
          role === "Buyer" ?
          <>
          <button onClick={() => setRole("Buyer")} className={`${styles.active} ${styles['btn-customer']}`}>Customer</button>
          <button onClick={() => setRole("Seller")} className={`${styles['btn-seller']}`}>Seller</button>
          </>           
          :
          role === "Seller" ?
          <>
          <button onClick={() => setRole("Buyer")} className={`${styles['btn-customer']}`}>Customer</button>
          <button onClick={() => setRole("Seller")} className={`${styles.active} ${styles['btn-seller']}`}>Seller</button>
          </>
          :
          ""
          }
        </div>
        {
          role === "Buyer" ?
          <form onSubmit={onSubmit1}>
          <div className="mt-5">
          <div className={`mb-3 ${styles['form-group']}`}>
            <input name='email' type="email" id='email' onChange={(e) => setform({...form, email: e.target.value})} placeholder='Email'/>
          </div>
          <div className={`${styles['form-group']}`}>
            <input name='password' type="password" id='password' onChange={(e) => setform({...form, password: e.target.value})} placeholder='Password'/>
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
        :
        role === "Seller" ?
        <form onSubmit={onSubmit2}>
          <div className="mt-5">
          <div className={`mb-3 ${styles['form-group']}`}>
            <input name='email' type="email" id='email' onChange={(e) => setform2({...form2, email: e.target.value})} placeholder='Email'/>
          </div>
          <div className={`${styles['form-group']}`}>
            <input name='password' type="password" id='password' onChange={(e) => setform2({...form2, password: e.target.value})} placeholder='Password'/>
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
        :
        ""
        }
        
        
    </section>

    </>
  )
}

export default Login