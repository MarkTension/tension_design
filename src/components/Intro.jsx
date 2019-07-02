import React from "react";
import logo from "../logo.png";
import "../App.css";

import styled from "styled-components";
import { Box, Flex, Image } from "rebass";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: justify;
  color: black;
  padding: 1em;
  font-size: 1.5rem;
`;

const IntroBox = styled(Box)`
  justify-content: center;
  alignitems: "center";
`;

const Image_container = styled.div`
  justify-content: center;
  alignitems: "center";
`;

const Card = () => (
  <IntroBox m={[1, 1 / 2]} width={[1, 1, 1 / 2, 2 / 4]} align="center">
    <center>
      <Image_container>
        <img src={logo} className="App-logo" alt="logo" />
      </Image_container>
    </center>
    <Text>
      <p>
        <em>Tension Design</em> is a web-design studio based in Amsterdam. Our
        goal is to develop state-of-the-art generative design and
        web-applications. <br />
        <br />See our{" "}
        <a href={"https://marktension.home.blog/"}>
          <emph>blog</emph>
        </a>{" "}
        for our latest progress, and scroll down for past projects.
      </p>
    </Text>
  </IntroBox>
);

export default Card;
