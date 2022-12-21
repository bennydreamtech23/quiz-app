import React from "react";
import Footer from "./footer/Footer";


const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
