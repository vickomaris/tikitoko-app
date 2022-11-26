import React, { useEffect } from 'react'
import styles from "./checkout.module.css"
import Card from '../../component/module/card'
import Navbar from '../../component/module/navbarLogin'
import { useState } from 'react'
import axios from 'axios'

const Checkout = () => {
    const [checkoutState, setCheckoutState] = useState([]);
    const token = localStorage.getItem("token")
    const [address, setAddress] = useState([]);
    const payment = (e) => {
        e.preventDefault();
        try {
            for (let i = 0; i < checkoutState.length; i++) {
            //  let result = await axios.get(`http://localhost:4000/v1/cart/${checkoutState[i].cart_id}`)
            //  console.log(result)
            console.log(checkoutState[i])
            //     .then((response) => {
            //        console.log(response.data)
            //    })
               }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/cart/`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            // console.log(response.data)
            setCheckoutState(response.data)
        })
        .catch((err) => {
            alert("Order not found")
            console.log(err)
        })
    }, [])
    

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/address/`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        .then((response) => {
            // console.log(response.data)
            setAddress(response.data)
        })
        .catch((err) => {
            alert("Account not found")
            console.log(err);
        })
    }, [])

  return (
    <>
    <Navbar/>
    <div className={styles["main"]}>
    <div className="container">
        <h1 className={styles["title"]}>Checkout</h1>
        <p className={styles['sub-title']}>Shipping Adress</p>
        <div className="row">
                    <div className="col-sm-7 mb-4">
                    {
        address.data ?
        address.data.map((item, index) => (
            <>
            <div className={`mb-3 ${styles["card"]}`}>
                    <div className="card-body px-4 py-3">
                        <div className="flex align-items-center">
                            <p className={styles['buyer-name']}>{item.recipient}</p>
                            <p className={styles['buyer-adress']}>{item.residence} {item.city} {item.postcode}</p>
                            <button className={styles['btn-choose']}>Choose another address</button>
                        </div>
                    </div>
            </div>
            </>
        )) : ""
    }    
        {
            checkoutState.data ?
            checkoutState.data.map((item, index) => (
                <Card
                title = {item.name}
                storetitle= {item.seller_name}
                image = {item.image}
                price = {item.price * item.qty}
                qty = {item.qty}
                />
            )) : ""
        }
        </div>
        <div className="col-sm-5 mb-4">
            <div className={styles["card"]}>
                <div className="card-body-right p-4">
                    <h3 className={styles["card-summary"]}>Shopping summary</h3>
                    <h5 className={styles["order"]}>Order<span className="d-flex justify-content-end">$ 40.0</span></h5>
                    <h5 className={styles["delivery"]}>Delivery<span className="d-flex justify-content-end">$ 5.0</span></h5>
                    <hr />
                    <h3 className={styles["card-summary-bottom"]}>Shopping summary<span className="d-flex justify-content-end">$ 45.0</span></h3>
                    <button type="button" onClick={(e) => payment(e)} className={`${styles['buy']}`}>Select payment</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Checkout