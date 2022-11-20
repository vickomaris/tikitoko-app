import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./searchCategory.module.css"

import Navbar from '../../component/module/navbarLogin'
import CardProduct from '../../component/module/cardProduct'


const SearchCategory = () => {
  return (
    <>
      <Navbar/>
      <section className={`mt-5 ${styles.main}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="d-flex flex-row">
                <p className={`me-3 ${styles.textInfocategory}`}>Home</p>
                <p className={`me-3 ${styles.textInfocategory}`}> > </p>
                <p className={`me-3 ${styles.textInfocategory}`}>Category</p>
                <p className={`me-3 ${styles.textInfocategory}`}> > </p>
                <p className={`me-3 ${styles.textInfocategory}`}>T-Shirt</p>
              </div>
            </div>
            <p className={`mt-3 ${styles.textTitleCategory}`}> T-Shirt </p>
            <div className="row row-cols-1 row-cols-md-5 gx-0 gy-4">
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchCategory