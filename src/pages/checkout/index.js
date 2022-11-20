import React from 'react'
import styles from "./checkout.module.css"
import Card from '../../component/module/card'

const Checkout = () => {
  return (
    <div className={styles["main"]}>
    <div className="container">
        <h1 className={styles["title"]}>Checkout</h1>
        <p className={styles['sub-title']}>Shipping Adress</p>
        <div className="row">
            <div className="col-sm-7 mb-4">
            <div className={styles["card"]}>
                    <div className="card-body px-4 py-3">
                        <div className="flex align-items-center">
                            <p className={styles['buyer-name']}>Andreas Jane</p>
                            <p className={styles['buyer-adress']}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                            <button className={styles['btn-choose']}>Choose another address</button>
                        </div>
                    </div>
            </div>
            <Card/>
        </div>
        <div className="col-sm-5 mb-4">
            <div className={styles["card"]}>
                <div className="card-body-right p-4">
                    <h3 className={styles["card-summary"]}>Shopping summary</h3>
                    <h5 className={styles["order"]}>Order<span className="d-flex justify-content-end">$ 40.0</span></h5>
                    <h5 className={styles["delivery"]}>Delivery<span className="d-flex justify-content-end">$ 5.0</span></h5>
                    <hr />
                    <h3 className={styles["card-summary-bottom"]}>Shopping summary<span className="d-flex justify-content-end">$ 45.0</span></h3>
                    <button className={`${styles['buy']}`}>Select payment</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Checkout