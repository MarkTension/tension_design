import React from "react";
import "../App.css";
import styled from "styled-components";
import { Box, Flex, Image } from "rebass";
import git from "../images/github_im.png";
import link from "../images/link_icon.png";

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Sub = styled.h3`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  text-align: center;
  color: palevioletred;
`;

const Text = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-style: thin100;
  text-align: justify;
  color: black;
`;

const Tag = styled.span`
  color: black;
  backgroundcolor: white;
  text-align: center;
  font-size: 0.7em;
  padding: 4px;
  margin: 2px;
  text-transform: uppercase;
  border: 1px double;
  border-radius: 2px;
  opacity: 1;
`;

const Wrapper = styled.section`
  padding-bottom: 2em;
  padding-left: 0em;
  padding-right: 0em;
  border-radius: 8px;
  :hover {
    background: Snow;
  }
`;

const Tags = props => {
  const { tags } = props;
  return tags.map(tag => <Tag key={tag.key}>{tag}</Tag>);
};

class Work_entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleActive() {
    this.setState({ active: true });
  }

  render() {
    // And from here
    console.log(this.state.active);
    return (
      <Wrapper
        onMouseEnter={() => this.handleActive()}
        onMouseLeave={() => this.setState({ active: false })}
        id="entry_wrapper"
      >
        <Title>{this.props.features.title}</Title>
        <Text>{this.props.features.body}</Text>
        {this.state.active ? (
          <center>
            {this.props.features.git ? (
              <a href={this.props.features.git}>
                <Image src={git} alt="git" width="30px" padding="2px" />
              </a>
            ) : null}
            <a href={this.props.features.link}>
              <Image src={link} alt="git" width="30px" padding="2px" />
            </a>
          </center>
        ) : null}
        <Sub>Skills Used</Sub>

        <Flex
          justifyContent={["center", "left"]}
          flexDirection="row"
          flexWrap="wrap"
        >
          <Tags tags={this.props.features.skills} />
        </Flex>
      </Wrapper>
    );
  }
}
export default Work_entry;
