import React from "react";
import {
  Container,
  MainTitle,
  SlideImage,
  TextContainer,
  Description,
  InsideContainer,
  NextAndPrev,
  Buttons,
  LeftSide,
  Infos,
} from "./styles";

import Header from "../header/Header";
import { contents } from "../../models/content";

const Feed = () => {
  const [data, setData] = React.useState(0);

  function nextContent() {
    setData(data + 1);
    if (data >= 2) {
      setData(0);
    }
  }

  function prevContent() {
    setData(data - 1);
    if (data >= -2) {
      setData(0);
    }
  }

  return (
    <Container>
      <LeftSide>
        <SlideImage>
          <Header />
        </SlideImage>
      </LeftSide>
      <TextContainer>
        <InsideContainer>
          <Infos>
            <MainTitle>{contents[data].title}</MainTitle>
            <Description>{contents[data].desc}</Description>
          </Infos>
        </InsideContainer>
        <Buttons>
          <NextAndPrev onClick={prevContent}>&lt;</NextAndPrev>
          <NextAndPrev onClick={nextContent}>&gt;</NextAndPrev>
        </Buttons>
      </TextContainer>
    </Container>
  );
};

export default Feed;
