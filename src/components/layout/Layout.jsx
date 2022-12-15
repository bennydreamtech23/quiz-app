import React from "react";
import Footer from "./footer/Footer";
import NavBar from "./header/Navbar";


const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
