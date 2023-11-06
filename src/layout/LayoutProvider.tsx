import { useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HeaderNav from "./header/HeaderNav";

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:550px)");

  return (
    <React.Fragment>
      <Header />
      {!isMobile && <HeaderNav />}
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default LayoutProvider;
