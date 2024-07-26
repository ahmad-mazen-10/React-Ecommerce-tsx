import "./styles.css";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header/Header";
import Home from "@/pages/home/Home";
import Contact from "@/pages/contact/Contact";
import Login from "@/components/forms/Login";
import Signup from "@/components/forms/Signup";
import Products from "@/pages/Products";
import About from "@/pages/about/About";
import Footer from "@/components/common/footer/Footer";

function MainLayout() {
  return (
    <div className="cont">
      <Header  />
      {/* <Login />
      <Home /> */}
      {/* <About/> */}
      {/* <Signup />
      <Contact />
      <Products /> */}
      <div className="wrapper">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
