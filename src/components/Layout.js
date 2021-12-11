import React from "react";
import Header from "./Header.js";
import styled from "styled-components";
import Footer from "./Footer.js";

const StyledMain = styled.main`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2em 2em;
  flex:1;
`;
const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </div>
  );
};

export default Layout;
