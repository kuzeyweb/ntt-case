import React, { ReactNode } from "react";
import { MainContainer } from "../styles/general.styled";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutProvider;
