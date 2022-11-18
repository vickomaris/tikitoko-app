import React from 'react'
import styles from "./cardproduct.module.css"
import mensuit from '../../../assets/mensuit.png'
import icStar from '../../../assets/icStar.svg'

const CardProduct = () => {
    return (
        <>
            
                <div class="col">
                    <div class="card h-100">
                        <img src={mensuit} class="card-img-top" alt="imgNew" />
                        <div class="card-body">
                            <h5 class={styles.cardTitle}>Men's formal suit - Black & White</h5>
                            <p class={styles.textPricecard}>$ 40.0</p>
                            <p class={styles.textBrand}>Zalora Cloth</p>
                            <div className="d-flex flex-row">
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <img src={icStar} alt="icStar" />
                                <div class={`ms-2 ${styles.textStar}`}>(10)</div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default CardProduct