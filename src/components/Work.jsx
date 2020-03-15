import React from "react";
import "../App.css";
import styled from "styled-components";
import Work_entry from "./Work_entry";
import entry from "./Entries"; // this is an array with all work entries
import { Box, Flex, Image } from "rebass";

const Wrapper = styled.div`
  padding: 1em;
  background: white;
  border-radius: 25px;
  :hover {
    background: Snow;
  }
`;

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
    <Box p={[1, 1 / 2, 1]} width={[1, 1 / 2, 1 / 3]}>
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
    <Box p={[1, 1 / 2]} width={[1, 1 / 2, 1 / 3]}>
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
    <Box p={[1, 1 / 2]} width={[1, 1 / 2, 1 / 3]}>
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
    <Box p={[1, 1 / 2]} width={[1, 1 / 2, 1 / 3]}>
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
    <Box p={[1, 1 / 2]} width={[1, 1 / 2, 1 / 3]}>
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/leaf_gif.gif")}
          />
        </center>
        <Work_entry features={entry.leaves} />
      </Wrapper>
    </Box>
    <Box p={[1, 1 / 2]} width={[1, 1 / 2, 1 / 3]}>
      <Wrapper>
        <center>
          <Image
            width={[1 / 2]}
            borderRadius={8}
            src={require("../images/kanji_gif.gif")}
          />
        </center>
        <Work_entry features={entry.kanji} />
      </Wrapper>
    </Box>
  </Flex>
);

export default Work;