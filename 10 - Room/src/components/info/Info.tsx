import React from "react";
import {
  Container,
  LeftDiv,
  CenteredDiv,
  RightDiv,
  Title,
  SubTitle,
  About,
} from "./styles";

const Info = () => {
  return (
    <Container>
      <LeftDiv />
      <CenteredDiv>
        <About>
          <Title>ABOUT OUR FURNITURE</Title>
          <SubTitle>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </SubTitle>
        </About>
      </CenteredDiv>
      <RightDiv />
    </Container>
  );
};

export default Info;
