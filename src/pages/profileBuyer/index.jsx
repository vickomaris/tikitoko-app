import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./profilebuyer.module.css";
import pencil from "../../assets/pencil-icon.svg";
import user from "../../assets/user-icon.svg";
import location from "../../assets/location-icon.svg";
import order from "../../assets/order-icon.svg";
import Navbar from "../../component/module/navbar";
import Card from "../../component/module/card";

const ProfileBuyer = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const [viewPage, setViewPage] = useState(0);
  const [viewCollapse, setViewCollapse] = useState(0);

  const data = [
    {
      id: 1,
      name: "Johan Annabele",
      username: "johannaja",
      email: "johan@gmail",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={`container-fluid bg-light ${styles.customContainer}`}>
        <div className="row">
          <div className={`col-md-3 bg-white py-4 px-5`}>
            <div className="col-md-12 mt-5 ">
              <div className="row ">
                <div className="col-md-3">
                  <img
                    src={require("../../assets/dummy.jpg")}
                    alt=""
                    width={55}
                    height={55}
                    className="rounded-circle"
                  />
                </div>
                <div className="col-md-6 my-2">
                  <h6 className="mt-1">
                    {data.map((item) => {
                      return item.name;
                    })}
                  </h6>
                  <p>
                    {/* <i className="text-muted">Ubah profile</i> */}
                    <img src={pencil} width={12} height={12} alt="profile" />
                    <small className="text-muted"> Ubah profile</small>
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <small>
                  <img
                    src={user}
                    alt="usericon"
                    className={`rounded-circle ${styles.bgBlue} text-white p-2`}
                  ></img>
                  <span className="ms-2" onClick={() => setViewPage(0)}
                  style={{cursor: 'pointer'}}
                  >
                    My Account
                  </span>
                </small>
              </div>
              <div className="col-md-12 mt-3">
                <small>
                  <img
                    src={location}
                    alt="locationIcon"
                    className={`rounded-circle ${styles.bgOrange} text-white p-2`}
                  ></img>
                  <span className="ms-2" onClick={() => setViewPage(1)}
                  style={{cursor: 'pointer'}}
                  >
                    Shipping Address
                  </span>
                </small>
              </div>
              <div className="col-md-12 mt-3">
                <small>
                  <img
                    src={order}
                    alt="orderIcon"
                    className={`rounded-circle ${styles.bgPink} text-white p-2`}
                  ></img>
                  <span className="ms-2" onClick={() => setViewPage(2)}
                  style={{cursor: 'pointer'}}
                  >
                    My Order
                  </span>
                </small>
              </div>
            </div>
          </div>
          {/* my accout */}
          {
          viewPage === 0 ? (
            <div
              className={`col-md-8 bg-white p-5 my-5 border rounded ${styles.customMobileSection}`}
              id="account"
            >
              <div className="col-md-12">
                <h5>My Profile</h5>
                <p className="text-muted">Manage your profile information</p>
                <hr />
              </div>
              <div className="row">
                <div className="col-md-9">
                  <div className="row my-4">
                    <div className="col-md-3">
                      <label htmlFor="username" className="text-muted">
                        Name
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Masukkan nama"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-3">
                      <label htmlFor="email" className="text-muted">
                        Email
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-3">
                      <label htmlFor="phone" className="text-muted">
                        Phone
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                  </div>

                  <div className="row my-4">
                    <div className="col-md-3">
                      <label htmlFor="gender" className="text-muted">
                        Gender
                      </label>
                    </div>
                    <div className="col-md-6 my-2">
                      <div className="d-flex flex-row">
                        <p className="mx-2 text-muted">
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="pria"
                          />{" "}
                          Pria
                        </p>
                        <p className="mx-2 text-muted">
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="perempuan"
                          />{" "}
                          Perempuan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-3">
                      <label htmlFor="date" className="text-muted">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control text-muted"
                      />
                    </div>
                  </div>
                  <div className="row mt-4 mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-8">
                      <button
                        type="btn"
                        className="btn btn-danger px-4 rounded-pill"
                      >
                        save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 bg-white mt-3">
                  <div className="col-md-12 text-center border-start">
                    <img
                      src={require("../../assets/dummy.jpg")}
                      alt=""
                      width={120}
                      height={120}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <button
                      onClick={handleClick}
                      className="btn btn-outline-danger rounded-pill text-muted"
                    >
                      Select image
                    </button>

                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="form-control"
                      // onChange={handleChange}
                      ref={hiddenFileInput}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : viewPage === 1 ? (
            <div
              className={`col-md-8 bg-white p-5 my-5 border rounded ${styles.customMobileSection}`}
              id="address"
            >
              <div className="col-md-12">
                <h5 className="fw-bold">Choose another address</h5>
                <p className="text-muted">Manage your shipping address</p>
                <hr />
              </div>
              <div className="col-md-12 p-4">
                <div className={`col-md-12 ${styles.customNewAdd}`}>
                  <button
                    className={`text-center text-muted p-4 ${styles.customAddBtn}`}
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Add new address
                  </button>
                  <div class="modal p-3 " id="myModal">
                    <div class={`modal-dialog`}>
                      <div class={`modal-content p-4 ${styles.customCollapse}`}>
                        <div class={`modal-header`}>
                          <h4 class="modal-title">Add New Address</h4>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        <div class="modal-body">
                          <div className="col-md-12 my-2">
                            <label htmlFor="rumah" className="text-muted">
                              Save address as (ex : home address, office
                              address)
                            </label>
                          </div>
                          <div className="col-md-12 my-2">
                            <input
                              type="text"
                              name="rumah"
                              id="rumah"
                              className="p-2 form-control"
                              placeholder="Rumah"
                            />
                          </div>
                          <div className="row my-2">
                            <div className="col-md-6 my-2">
                              <div className="col-md-12">
                                <label htmlFor="nama" className="text-muted">
                                  Recipient's name
                                </label>
                              </div>
                              <div className="col-md-12 mt-2">
                                <input
                                  type="text"
                                  name="nama"
                                  id="nama"
                                  className="p-2 form-control"
                                  placeholder="Masukkan nama"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 my-2">
                              <div className="col-md-12">
                                <label htmlFor="phone" className="text-muted">
                                  Phone number
                                </label>
                              </div>
                              <div className="col-md-12 mt-2">
                                <input
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  className="p-2 form-control"
                                  placeholder="Masukkan nomor telepon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-md-8 my-2">
                              <div className="col-md-12">
                                <label htmlFor="address" className="text-muted">
                                  Address
                                </label>
                              </div>
                              <div className="col-md-12 mt-2">
                                <input
                                  type="text"
                                  name="address"
                                  id="address"
                                  className="p-2 form-control"
                                  placeholder="Masukkan alamat"
                                />
                              </div>
                            </div>
                            <div className="col-md-4 my-2">
                              <div className="col-md-12">
                                <label
                                  htmlFor="postalCode"
                                  className="text-muted"
                                >
                                  Postal Code
                                </label>
                              </div>
                              <div className="col-md-12 mt-2">
                                <input
                                  type="text"
                                  name="postalCode"
                                  id="postalCode"
                                  className="p-2 form-control"
                                  placeholder="Masukkan kode pos"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col-md-6 my-2">
                              <div className="col-md-12">
                                <label htmlFor="city" className="text-muted">
                                  City of Subdistrict
                                </label>
                              </div>
                              <div className="col-md-12 mt-2">
                                <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  className="p-2 form-control"
                                  placeholder="Masukkan kota"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-check">
                            <input
                              id="gridCheck"
                              type="checkbox"
                              className={styles.accent}
                            />
                            <label
                              className="form-check-label px-2 text-muted"
                              for="gridCheck"
                            >
                              Make it the primary address
                            </label>
                          </div>
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-outline-danger text-muted w-25 rounded-pill"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger w-25 rounded-pill"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-12 ${styles.customAdd}`}>
                  <div className="col-md-12 px-3 pt-4">
                    <h6>Johan Kost</h6>
                  </div>
                  <div className="col-md-12 px-3 py-1">
                    <small className="">
                      Perumahan manggis merdu, Jl. Kost Johan no. 1 Perumahan
                      manggis merdu, Jl. Kost Johan no. 1 Perumahan manggis
                      merdu, Jl. Kost Johan no. 1 Perumahan manggis merdu, Jl.
                      Kost Johan no. 1
                    </small>
                  </div>
                  <div className="col-md-12 px-3 py-1 pb-4">
                    <h6 className="text-danger">Change address</h6>
                  </div>
                </div>
              </div>
            </div>
          ) : viewPage === 2 ? (
            <div className={`col-md-8 bg-white p-5 my-5 border rounded ${styles.customMobileSection}`}>
              {
              viewCollapse === 0 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-danger me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  style={{
                    borderBottom: "2px solid red",
                    // color: "red !important",
                    
                  }}
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-muted me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-muted me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                  <div className="collapse multi-collapse" id="allItem">
                  <div className="mt-3">
                    <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                  </div>
                </div>
              ) : viewCollapse === 1 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-danger me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  style={{
                    borderBottom: "2px solid red",
                    color: "red",
                    
                  }}
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-muted me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                <div className="collapse multi-collapse" id="notPaid">
                  <div className="container mt-5">
                  <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                </div>
                </div>
              ) : viewCollapse === 2 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-muted me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-danger me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  style={{
                    borderBottom: "2px solid red",
                    color: "red",
                    
                  }}
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-muted me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                <div className="collapse multi-collapse" id="packed">
                  <div className="container mt-5">
                  <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                </div>
                </div>
              ) : viewCollapse === 3 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-muted me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-danger me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  style={{
                    borderBottom: "2px solid red",
                    color: "red",
                    
                  }}
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                <div className="collapse multi-collapse" id="sent">
                  <div className="container mt-5">
                  <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                </div>
                </div>
              ) : viewCollapse === 4 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-muted me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-muted me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-danger me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  style={{
                    borderBottom: "2px solid red",
                    color: "red",
                    
                  }}
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                <div className="collapse multi-collapse" id="completed">
                  <div className="container mt-5">
                  <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                </div>
                </div>
              ) : viewCollapse === 5 ? (
                <div
                  className="col-md-12"
                  id="address"
                >
                  <div className="col-md-12">
                    <h5 className="fw-bold">My order</h5>
                  </div>
                  <p className="mt-3">
                <Link
                  class="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#allItem"
                  onClick={() => setViewCollapse(0)}
                >
                  All items
                </Link>
                <Link
                  className="btn text-muted me-4 ms-3"
                  data-bs-toggle="collapse"
                  to="#notPaid"
                  onClick={() => setViewCollapse(1)}
                >
                  Not yet paid
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#packed"
                  onClick={() => setViewCollapse(2)}
                >
                  Packed
                </Link>
                <Link
                  className="btn text-muted me-4 ms-4"
                  data-bs-toggle="collapse"
                  to="#sent"
                  onClick={() => setViewCollapse(3)}
                >
                  Sent
                </Link>
                <Link
                  className="btn text-muted me-4 "
                  data-bs-toggle="collapse"
                  to="#completed"
                  onClick={() => setViewCollapse(4)}
                >
                  Completed
                </Link>
                <Link
                  className="btn text-danger me-4 "
                  data-bs-toggle="collapse"
                  to="#cancel"
                  style={{
                    borderBottom: "2px solid red",
                    color: "red",
                    
                  }}
                  onClick={() => setViewCollapse(5)}
                >
                  Order cancel
                </Link>
              </p>
              <hr />
                <div className="collapse multi-collapse" id="cancel">
                  <div className="container mt-5">
                  <div className={styles["card"]}>
                        <div className="card-body px-4 py-4">
                            <div className={styles["product"]}>
                                <div className="d-flex align-items-center">
                                    <img className={styles["product-img"]} src={require('../../assets/Mask Group.png')} alt="suite" />
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
                </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* add address */}

          {/* my order */}
        </div>
      </div>
    </>
  );
};

export default ProfileBuyer;
