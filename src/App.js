import React from "react";
import "./App.css";
import styled from "styled-components";

import Intro from "./components/Intro";
import Menu from "./components/Menu";
import Work from "./components/Work";
import Footer from "./components/Footer";

// get total screen container
const Outer_Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 0px;
  width: 100%;
  height: 100%;
  margin: 12px;
`;

// first container to fill intro screen
// const First_Container = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   border: 1px solid #fff;
//   border-radius: 5px;
//   box-shadow: 0px 0px 0px;
//   width: 100%;
//   height: 100vh;
//   margin: 12px;
// `;

function App() {
  return (
    <Outer_Container>
      <Intro />
      <Menu />
      <Work />
      <Footer />
    </Outer_Container>
  );
}

export default App;
