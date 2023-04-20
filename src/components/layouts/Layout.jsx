import { Outlet } from "react-router";
import { Navbar, Footer } from "./index";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
