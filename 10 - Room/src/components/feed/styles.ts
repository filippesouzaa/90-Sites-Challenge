import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 1125px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const SlideImage = styled.div`
  background-image: url("https://github.com/youssef-ahmed-Devlogs/Room-homepage-simple-e-commerce/blob/master/images/desktop-image-hero-1.jpg?raw=true");
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  @media (max-width: 425px) {
    width: 100%;
    background-size: contain;
    height: 300px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: #000000;
  @media (max-width: 1125px) {
    margin-top: 40px;
  }
  @media (max-width: 425px) {
    margin-top: 0px;
    font-size: 2.0rem;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Description = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 40px;
`;

export const Infos = styled.div`
  max-width: 450px;
  @media (max-width: 425px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const InsideContainer = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  height: 100%;
`;

export const NextAndPrev = styled.button`
  background-color: #000000;
  height: 80px;
  width: 80px;
  color: #ffffff;
  font-size: 36px;
  border: none;
`;

export const Buttons = styled.div`
  display: flex;
  @media (max-width: 1125px) {
    display: none;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
`;
