import React from "react";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";
import Sticky from "react-stickynode";
import media from "../utils/media";

const Container = styled.div`
  width: 50vw;
  align-items: center;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 4%;
  margin: 0px;
  position: relative;
  .active {
    font-size: 200px;
  }
  ${media.small`
    display: none;
  `};
`;

const Content = styled.div`
  max-width: 1200px;
  padding-left: 4%;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  padding: 0px 0px;
  display: flex;

  flex-direction: row;
`;

const Button = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  padding: 5px
  border-radius: 10px;
  margin: 10px
  background-color: Snow
  color: palevioletred;
  opacity: 1;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    color: black;
    font-weight: 400;
    text-decoration: underline;
  }
`;

const handleStateChange = status => {
  const menu = document.getElementById("menu");
  if (status.status === Sticky.STATUS_FIXED) {
    menu.style.boxShadow = "0 0 30px 0 rgba(0,0,0,0.05)";
    menu.style.borderBottom = "1px solid #efefef";
    menu.style.backgroundColor = "rgba(255,255,255, 0.98)";
  } else {
    menu.style.boxShadow = "none";
    menu.style.borderBottom = "none";
    menu.style.backgroundColor = "rgba(255,255,255, 0)";
  }
};

// React
const Menu = () => (
  <Sticky enabled innerZ={100} onStateChange={handleStateChange}>
    <Container id="menu">
      <Content>
        <ButtonContainer>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector("#work"));
            }}
          >
            past work
          </Button>
          <Button
            onClick={() => {
              animateScrollTo(document.querySelector("#design"));
            }}
          >
            design/illustration
          </Button>

          <Button id="blog_button">
            <a href={"https://marktension.home.blog/"}>blog</a>
          </Button>
          <Button
            onClick={() => animateScrollTo(document.querySelector("#footer"))}
          >
            contact
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  </Sticky>
);

export default Menu;
