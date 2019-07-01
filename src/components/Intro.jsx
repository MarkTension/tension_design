import React from "react";
import logo from "../logo.png";
import "../App.css";

import styled from "styled-components";

const Container_in = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 0px;
  width: 250px;
  height: 250;
  margin: 12px;
`;
const Container_out = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 0px;
  width: 50%;
  height: 250;
  margin: 12px;
`;

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: justify;
  color: black;
`;

const Card = () => (
  <Container_out>
    <Container_in>
      <img src={logo} className="App-logo" alt="logo" />
    </Container_in>
    <Text>
      <p>
        <em>Tension Design</em> is a web-design studio based in Amsterdam.
        <br /> Our goal is to develop state-of-the-art generative design and
        web-applications. <br />
        <br />See our{" "}
        <a href={"https://marktension.home.blog/"}>
          <emph>blog</emph>
        </a>{" "}
        for our latest progress, and scroll down for past projects.
      </p>
    </Text>
  </Container_out>
);

export default Card;
