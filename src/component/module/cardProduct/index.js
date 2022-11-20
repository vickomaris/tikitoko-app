import React from 'react'
import styles from "./cardproduct.module.css"
import mensuit from '../../../assets/mensuit.png'
import icStar from '../../../assets/icStar.svg'

const CardProduct = () => {
    return (
        <>
                <div className="col">
                    <div className="card h-100 mx-1">
                        <img src={mensuit} className="card-img-top" alt="imgNew" />
                        <div className="card-body">
                            <h5 className={styles.cardTitle}>Men's formal suit - Black & White</h5>
                            <p className={styles.textPricecard}>$ 40.0</p>
                            <p className={styles.textBrand}>Zalora Cloth</p>
                            <div className="d-flex flex-row">
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <div className={`ms-2 ${styles.textStar}`}>(10)</div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default CardProduct