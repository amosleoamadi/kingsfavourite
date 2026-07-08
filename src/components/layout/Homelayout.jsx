import Footer from "../static/Footer";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Homelayout;
