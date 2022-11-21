import React, { useState } from "react";
import styles from "./profileSeller.module.css";
import pictureUser from "../../assets/user-icon.svg";
import iconHome from "../../assets/home-icon.svg";
import iconPensil from "../../assets/pencil-icon.svg";
import packageIcon from "../../assets/package-icon.svg";
import iconOrder from "../../assets/cart-icon-white.svg";
import iconEmpety from "../../assets/profile-data not found.svg";
import iconMyOrderEmpty from "../../assets/myorder-empty.svg";
import iconBell from "../../assets/bell-icon.svg";
import iconMail from "../../assets/mail-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import logo from "../../assets/logo.svg";
const ProfileSeller = () => {
  const [icondown, setIconDown] = useState(0);
  const [iconDownOrder, setIconDownOrder] = useState(0);
  const [iconDownStore, setIconDownStore] = useState(0);
  const [viewPage, setViwPage] = useState(0);
  return (
    <section>
      <div className="container-fluid-custom fixed-top">
        <div className={styles.containerCustomNavbarSeller}>
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid m-2">
                <div>
                  <div className="row">
                    <div className="col-auto">
                      <img src={logo} />
                    </div>
                    <div className="col-auto">
                      <h5 className={styles.nameLogo}>Blanja</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <img src={iconBell} />
                  </div>
                  <div className="col-auto">
                    <img src={iconMail} />
                  </div>
                  <div className="col">
                    <img
                      className={styles.imgProfileNavbar}
                      src={pictureUser}
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.containerFluidCustom}>
        <div className="row">
          <div className={`col-md-3 ${styles.containerSatu}`}>
            <div className={styles.containerProfileSideLeft}>
              <div className="row">
                <div className="col-auto">
                  <div className={`${styles.bgImgLeft}`}>
                    <img className={styles.imgLeft} src={pictureUser} alt="" />
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <h6>Johanes Mikael</h6>
                  </div>
                  <div className={styles.buttonEditProfile}>
                    <button>
                      <img src={iconPensil} alt="" /> Ubah profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  {iconDownStore == 0 ? (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-store"
                      onClick={(e) => setIconDownStore(1)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgHome}>
                            <img
                              className={styles.iconHome}
                              src={iconHome}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Store</h6>
                        </div>
                        <div className="col">
                          <i className="fa fa-sort-up mt-3" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-store"
                      onClick={(e) => setIconDownStore(0)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgHome}>
                            <img
                              className={styles.iconHome}
                              src={iconHome}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Store</h6>
                        </div>
                        <div className="col">
                          <i className="fa fa-sort-down mt-2" />
                        </div>
                      </div>
                    </button>
                  )}

                  <div
                    id="select-store"
                    className={`collapse show ${styles.collapseStore}`}
                  >
                    <button
                      className={styles.btnStore}
                      onClick={(e) => setViwPage(0)}
                    >
                      Store Profile
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  {iconDownOrder == 0 ? (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-product"
                      onClick={(e) => setIconDownOrder(1)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgProduct}>
                            <img
                              className={styles.iconHome}
                              src={packageIcon}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Product</h6>
                        </div>
                        <div className="col">
                          <i className="fa fa-sort-up mt-3" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-product"
                      onClick={(e) => setIconDownOrder(0)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgProduct}>
                            <img
                              className={styles.iconHome}
                              src={packageIcon}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Product</h6>
                        </div>
                        <div className="col">
                          <i className="fa fa-sort-down mt-2" />
                        </div>
                      </div>
                    </button>
                  )}
                  <div
                    id="select-product"
                    className={`collapse ${styles.collapseStore}`}
                  >
                    <div className="mb-2">
                      <button
                        className={styles.btnStore}
                        onClick={(e) => setViwPage(1)}
                      >
                        My Product
                      </button>
                    </div>
                    <div>
                      <button
                        className={styles.btnStore}
                        onClick={(e) => setViwPage(2)}
                      >
                        Selling Product
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  {icondown == 0 ? (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-order"
                      onClick={(e) => setIconDown(1)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgOrder}>
                            <img
                              className={styles.iconHome}
                              src={iconOrder}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Order</h6>
                        </div>
                        <div className="col">
                          <i className="fa fa-sort-up mt-3" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.btnStore}
                      data-bs-toggle="collapse"
                      data-bs-target="#select-order"
                      onClick={(e) => setIconDown(0)}
                    >
                      <div className="row">
                        <div className="col">
                          <div className={styles.bgOrder}>
                            <img
                              className={styles.iconHome}
                              src={iconOrder}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <h6 className="mt-2">Order</h6>
                        </div>

                        <div className="col">
                          <i className="fa fa-sort-down mt-2" />
                        </div>
                      </div>
                    </button>
                  )}
                  <div
                    id="select-order"
                    className={`collapse ${styles.collapseStore}`}
                  >
                    <div className="mb-2">
                      <button
                        className={styles.btnStore}
                        onClick={(e) => setViwPage(3)}
                      >
                        My Order
                      </button>
                    </div>
                    <div>
                      <button
                        className={styles.btnStore}
                        onClick={(e) => setViwPage(4)}
                      >
                        Order Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-9 ${styles.containerDua}`}>
            <div className={styles.containerProfileSideRight}>
              {viewPage == 0 ? (
                <div className={styles.containerCardStoreProfile}>
                  <div className={styles.containerTitle}>
                    <div>
                      <h5>My profile store</h5>
                    </div>
                    <div>
                      <p className="text-secondary">
                        Manage your profile information
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.containerMain}>
                    <div className="row">
                      <div
                        className={`col-md-8  ${styles.containerStoreProduct}`}
                      >
                        <form>
                          <div className="group-input mb-3">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="text-secondary">
                                  Store Name
                                </label>
                              </div>
                              <div className="col">
                                <input
                                className={styles.inputStoreProfile}
                                  type="text"
                                  placeholder="Johanes Mikael"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-input mb-3">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="text-secondary">Email</label>
                              </div>
                              <div className="col">
                                <input
                                 className={styles.inputStoreProfile}
                                  type="email"
                                  placeholder="johanesmikael@gmail.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-input mb-3">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="text-secondary">
                                  Phone Number
                                </label>
                              </div>
                              <div className="col">
                                <input
                                 className={styles.inputStoreProfile}
                                  type="phone"
                                  placeholder="085618219271"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-input">
                            <div className="row">
                              <div className="col-md-3">
                                <label className="text-secondary">
                                  Store Description
                                </label>
                              </div>
                              <div className="col">
                                <textarea
                                  className={styles.textareaDescriptionProfile}
                                  type="text"
                                  placeholder="Description"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-4 mt-3">
                              <button className={styles.buttonSaveProfile}>
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4 text-center">
                        <div className={styles.containePictureUser}>
                          <img className={styles.img} src={pictureUser} />
                        </div>
                        <div className="mt-3">
                          <input
                            id="addImageProfile"
                            className={styles.inputPhoto}
                            type="file"
                          />
                          <label
                            style={{ cursor: "pointer" }}
                            htmlFor="addImageProfile"
                            className={styles.buttonUploadPhoto}
                          >
                            Select Image
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : viewPage == 1 ? (
                <div className={styles.containerCardMyProduct}>
                  <div className={styles.containerTitleMyProduct}>
                    <div>
                      <h5>My Product</h5>
                    </div>
                    <div>
                      <button
                        className={styles.btnStore}
                        style={{
                          borderBottom: "2px solid red",
                          color: "red",
                        }}
                      >
                        All items
                      </button>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.containerMainMyProduct}>
                    <div className="mt-1">
                      <div className={`row ${styles.containerSearch}`}>
                        <div
                          className="col-auto"
                          style={{ paddingTop: "12px" }}
                        >
                          <img src={searchIcon} alt="" />
                        </div>
                        <div className="col-auto">
                          <input
                            className={styles.searchMyProduct}
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.containerAllItem}>
                      <div className={styles.TitleAllItem}>
                        <div>
                          <div className="row">
                            <div className="col" style={{ textAlign: "left" }}>
                              <span className="text-secondary">
                                Product name <i class="fa fa-sort"></i>
                              </span>
                            </div>
                            <div className="col" style={{ textAlign: "right" }}>
                              <div className="row">
                                <div className="col">
                                  <span className="text-secondary">
                                    Price <i class="fa fa-sort"></i>
                                  </span>
                                </div>
                                <div className="col-auto">
                                  <span className="text-secondary">
                                    Stock <i class="fa fa-sort"></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.containerMainAllItem}>
                        <div className="mt-4 text-center">
                          <img src={iconEmpety} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : viewPage == 2 ? (
                <div>
                  <div className={styles.containerSellingProduct}>
                    <div className={styles.containerCardInventory}>
                      <div>
                        <h5>Inventory</h5>
                      </div>
                      <hr />
                      <div>
                        <form>
                          <div className="form-group">
                            <label className="text-secondary">
                              Name of goods
                            </label>
                            <div>
                              <input
                                className={styles.inputInventory}
                                type="text"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className={styles.containerItemDetails}>
                    <div className={styles.TitleItemDetails}>
                      <div>
                        <h5>Item Details</h5>
                      </div>
                      <hr />
                    </div>
                    <div className={`${styles.containerMainItemDetails}`}>
                      <form>
                        <div className="form-group">
                          <label className="text-secondary">Unit Price</label>
                          <div>
                            <input
                              className={styles.inputInventory}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <label className="text-secondary">Stock</label>
                          <div>
                            <div className={`${styles.containerStock}`}>
                              <div className="row">
                                <div className="col-auto">
                                  <input
                                    className={styles.inputStock}
                                    type="text"
                                  />
                                </div>
                                <div
                                  className="col-auto"
                                  style={{
                                    textAlign: "right",
                                    paddingTop: "10px",
                                  }}
                                >
                                  <span className="text-secondary">buah</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="mt-4 form-group">
                            <label
                              style={{ color: "#696f79" }}
                              className="form-label"
                            >
                              Stock
                            </label>
                            <div className="row">
                              <div className="col-md-2">
                                <div>
                                  <div className="row text-center">
                                    <div className="col-auto">
                                      <input
                                        className={styles.radioStock}
                                        type="checkbox"
                                        value="0"
                                      />
                                    </div>
                                    <div className="col-auto">
                                      <span className="text-secondary">
                                        Baru
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div>
                                  <div className="row text-center">
                                    <div className="col-auto">
                                      <input
                                        className={styles.radioStock}
                                        type="checkbox"
                                        value="1"
                                      />
                                    </div>
                                    <div className="col-auto">
                                      <span className="text-secondary">
                                        Bekas
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className={styles.containerPhotOfGoods}>
                    <div className={styles.TitlePhotoOfGoods}>
                      <div>
                        <h5>Photo Of Goods</h5>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.containerMainPhotoOfGoods}>
                      <div>
                        <div>
                          <label className={styles.bgPreviewPhoto}>
                            <img
                              className={styles.cardPreviewPhoto}
                              src={packageIcon}
                              alt=""
                            />
                          </label>
                          <input
                            id="addImage"
                            className={styles.inputPhoto}
                            type="file"
                          />
                        </div>
                        <div className="mt-3">
                          <span className="text-secondary">Foto Utama</span>
                        </div>
                        <hr />
                      </div>
                      <div className="text-center">
                        <label
                          style={{ cursor: "pointer" }}
                          htmlFor="addImage"
                          className={styles.buttonUploadPhoto}
                        >
                          Upload Photo
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.containerDescription}>
                    <div className={styles.TitleDescription}>
                      <div>
                        <h5>Description</h5>
                      </div>
                      <hr />
                    </div>
                    <div className={styles.containerMainDescription}>
                      <textarea
                        className={styles.descriptionTextarea}
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="mt-5" style={{ textAlign: "right" }}>
                    <button className={styles.buttonJual}>Jual</button>
                  </div>
                </div>
              ) : viewPage == 3 ? (
                <div className={styles.containerCardMyOrder}>
                  <div className={styles.TitleMyOrder}>
                    <div>
                      <h5>My Order</h5>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-auto">
                          <button
                            className={styles.btnStore}
                            style={{
                              borderBottom: "2px solid red",
                              color: "red",
                              width: "100%",
                            }}
                            onClick={(e) => setViwPage(3)}
                          >
                            All items
                          </button>
                        </div>
                        <div className="col-auto">
                          <button
                            className={styles.btnStore}
                            style={{
                              color: "grey",
                              width: "100%",
                            }}
                            onClick={(e) => setViwPage(4)}
                          >
                            Order Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.containerMainMyOrder}>
                    <div className="mt-1">
                      <div className={`row ${styles.containerSearch}`}>
                        <div
                          className="col-auto"
                          style={{ paddingTop: "12px" }}
                        >
                          <img src={searchIcon} alt="" />
                        </div>
                        <div className="col-auto">
                          <input
                            className={styles.searchMyProduct}
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <img src={iconMyOrderEmpty} alt="" />
                    </div>
                  </div>
                </div>
              ) : viewPage == 4 ? (
                <div className={styles.containerCardOrderCancel}>
                  <div className={styles.TitleOrderCancel}>
                    <div>
                      <h5>My Order</h5>
                    </div>
                    <div>
                      <div className="row">
                        <div className="col-auto">
                          <button
                            className={styles.btnStore}
                            style={{
                              color: "grey",
                              width: "100%",
                            }}
                            onClick={(e) => setViwPage(3)}
                          >
                            All items
                          </button>
                        </div>
                        <div className="col-auto">
                          <button
                            className={styles.btnStore}
                            style={{
                              borderBottom: "2px solid red",
                              color: "red",
                              width: "100%",
                            }}
                            onClick={(e) => setViwPage(4)}
                          >
                            Order Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className={styles.containerMainMyOrder}>
                    <div className="mt-1">
                      <div className={`row ${styles.containerSearch}`}>
                        <div
                          className="col-auto"
                          style={{ paddingTop: "12px" }}
                        >
                          <img src={searchIcon} alt="" />
                        </div>
                        <div className="col-auto">
                          <input
                            className={styles.searchMyProduct}
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <img src={iconMyOrderEmpty} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSeller;
