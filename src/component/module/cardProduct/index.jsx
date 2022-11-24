import React, { useEffect, useState } from "react";
import styles from "./cardproduct.module.css";
import mensuit from "../../../assets/mensuit.png";
import icStar from "../../../assets/icStar.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const CardProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/v1/product`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        // router.push('/login')
      });
  }, []);

  const [sort, setSort] = useState("product_id");
  const [asc, setAsc] = useState("asc");
  const [page, setPage] = useState(1);
  useEffect(() => {
    getDataProduct(sort, asc, 3, page);
  }, [sort, asc, page]);
  const getDataProduct = (sort, asc, limit, page) => {
    axios
      .get(
        `http://localhost:4000/v1/product?sortby=${sort}&order=${asc}&limit=${limit}${
          page ? `&page=${page}` : ""
        }`
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        // router.push('/login')
      });
  };

  const handleSorting = () => {
    if (sort == "product_id") {
      setSort("name");
    } else {
      setSort("product_id");
    }
    getDataProduct(sort, asc, 3, page);
  };

  const handleSortasc = () => {
    if (asc == "asc") {
      setAsc("desc");
    } else {
      setAsc("asc");
    }
    getDataProduct(sort, asc, 3, page);
  };

  const NextPage = () => {
    setPage(page + 1);
    getDataProduct(sort, asc, 3, page);
    console.log(page);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
      getDataProduct(sort, asc, 3, page - 1);
    }
  };

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="dropdown mb-5">
        <button
          className={`btn btn-secondary dropdown-toggle ${styles.spanCostumsort}`}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              className="dropdown-item"
              href="#"
              onClick={() => handleSortasc()}
            >
              Sortir berdasarkan{asc}
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              href="#"
              onClick={() => handleSorting()}
            >
              Sortir berdasarkan {sort}
            </Link>
          </li>
        </ul>
      </div>
      <div className="row row-cols-1 row-cols-md-5 gx-0 gy-4">
        {data.length === 0 ? (
          <h3> Data sudah habis </h3>
        ) : (
          data.map((item, index) => (
            <div key={index} className="col">
              <Link
                to={`/v1/product/${item.product_id}`}
                className={styles.cstmLink}
              >
                <div className="card h-100 mx-1">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="imgNew"
                    style={{ height: "250px" }}
                  />
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
        )}
      </div>

      <div className="row">
        <button
          className="btn btn-primary my-5 col-md-2  mx-auto"
          onClick={() => PreviousPage()}
        >
          {" "}
          Prev{" "}
        </button>
        <button className="btn btn-primary my-5 col-md-2  mx-auto">
          {page}
        </button>
        <button
          className="btn btn-primary my-5 col-md-2  mx-auto"
          disabled={data <= 0}
          onClick={() => NextPage()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CardProduct;
