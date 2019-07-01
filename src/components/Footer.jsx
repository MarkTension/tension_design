import React from "react";
import styled from "styled-components";
import { Flex, Box, Image, Text } from "rebass";
import git from "../images/github_im.png";
import wordpress from "../images/wordpress_ico.png";
import insta from "../images/insta.png";
import gmail from "../images/gmail.png";

const Foot_div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 0px;

  width: 100vw;
  height: 5vw;
  margin: 0px;
  padding: 0px
  text-align: center;
  display: block;
`;

function Footer({ children }) {
  return (
    <Foot_div id="footer">
      <a href={"https://marktension.home.blog/"}>
        <Image src={wordpress} width="40px" margin="10px" padding="2px" />
      </a>

      <a href={"https://github.com/MarkTension"}>
        <Image src={git} width="40px" margin="10px" padding="2px" />
      </a>
      <a href={"https://instagram.com/sumakuschmark"}>
        <Image src={insta} width="40px" margin="10px" padding="2px" />
      </a>
      <a href={"mailto:tensen.mark@gmail.com"}>
        <Image src={gmail} width="40px" margin="10px" padding="2px" />
      </a>
    </Foot_div>
  );
}

export default Footer;
