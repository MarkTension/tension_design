import React from "react";
import "../App.css";
import styled from "styled-components";
import Work_entry from "./Work_entry";
import entry from "./Entries"; // this is an array with all work entries
import { Box, Flex, Image } from "rebass";

const Wrapper = styled.div`
  padding: 2em;
  background: white;
  border-radius: 25px;
  :hover {
    background: Snow;
  }
`;

// //GhostWhite

const Text = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: palevioletred;
`;

const Work = () => (
  <Flex id="work" flexWrap="wrap" width="80%">
    <Box p={2} width={1} align="center">
      <Text>Past Work</Text>
    </Box>
    <Box p={2} width={1 / 2} backgroundcolor="white">
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/plantvision.png")}
            alt="hello"
          />
        </center>
        <Work_entry features={entry.plant_vision} />
      </Wrapper>
    </Box>
    <Box p={2} width={1 / 2}>
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/MIT.png")}
            alt="hello"
          />
        </center>
        <Work_entry features={entry.mit} />
      </Wrapper>
    </Box>
    <Box p={2} width={1 / 2}>
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/cremey.png")}
          />
        </center>

        <Work_entry features={entry.creme} />
      </Wrapper>
    </Box>
    <Box p={2} width={1 / 2}>
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/uva.png")}
          />
        </center>
        <Work_entry features={entry.sils} />
      </Wrapper>
    </Box>
  </Flex>
);

export default Work;
