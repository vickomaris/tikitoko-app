import React, { useEffect, useState } from 'react'
import styles from "./cardproduct.module.css"
import mensuit from '../../../assets/mensuit.png'
import icStar from '../../../assets/icStar.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CardProduct = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/v1/product`)
            .then((response) => {
                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch((error) => {
                console.error(error)
                // router.push('/login')
            })
    }, [])
    return (
        <>
            {/* {JSON.stringify(data)} */}
            {
                data.map((item, index) => (
                    <div key={index} className="col">
                        <Link to={`/v1/product/${item.product_id}`} className={styles.cstmLink}> 
                        <div className="card h-100 mx-1">
                            <img src={item.image} className="card-img-top" alt="imgNew" style={{height:"250px"}} />
                            <div className="card-body">
                                <h5 className={styles.cardTitle}>{item.name}</h5>
                                <p className={styles.textPricecard}>Rp. {item.price}</p>
                                <p className={styles.textBrand}>{item.seller_name}</p>
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
                        </Link>
                    </div>
                ))
            }

        </>

    )
}

export default CardProduct