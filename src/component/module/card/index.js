import React from 'react'
import styles from "./card.module.css"

const Card = () => {
    return (
        <div className="mt-3">
                    <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../../assets/Mask Group.png')} alt="suite" />
                                    <div className={styles["brand"]}>
                                        <h5>Men's formal suit - Black</h5>
                                        <p>Zalora</p>
                                    </div>
                                </div>
                                <p className={styles["price"]}>$ 20.0</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Card;