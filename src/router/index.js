import React, { useEffect } from "react";
import swal from "sweetalert";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Forgot from "../pages/auth/forgot";
import Reset from "../pages/auth/reset";

import Home from "../pages/home";
import Search from "../pages/search";
import SearchCategory from "../pages/searchCategory";
import ProductDetail from "../pages/productDetail";
import Mybag from "../pages/mybag";
import Checkout from "../pages/checkout";
import Chat from "../pages/chat";

import ProfileBuyer from "../pages/profileBuyer";
import ProfileSeller from "../pages/profileSeller";

// Scroll to Top when switching page
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// Private routing
const Auth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    swal({
      title: "Denied!",
      text: `Access Denied, Please Login!`,
      icon: "error",
    });
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {/* Auth Routes  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />

          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/v1/category/:id" element={<SearchCategory />} />
          <Route path="/v1/product/:id" element={<ProductDetail />} />
          <Route path="/mybag" element={<Mybag />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/chat" element={<Chat />} />

          {/* Profile Routes */}
          <Route path="/profile" element={<ProfileBuyer />} />
          <Route path="/store" element={<ProfileSeller />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
