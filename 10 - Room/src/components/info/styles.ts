import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1125px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const LeftDiv = styled.div`
  background-image: url("https://github.com/youssef-ahmed-Devlogs/Room-homepage-simple-e-commerce/blob/master/images/image-about-dark.jpg?raw=true");
  background-repeat: no-repeat;
  background-size: contain;
  width: 800px;
  height: 300px;
  @media (max-width: 1125px) {
    width: 750px;
    margin-top: 40px;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  width: 100%;
  @media (max-width: 1125px) {
    margin-top: 40px;
  }
`;

export const RightDiv = styled.div`
  background-image: url("https://github.com/youssef-ahmed-Devlogs/Room-homepage-simple-e-commerce/blob/master/images/image-about-light.jpg?raw=true");
  background-repeat: no-repeat;
  background-size: contain;
  width: 800px;
  height: 300px;
  @media (max-width: 1125px) {
    width: 750px;
    margin-top: 40px;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 15px;
`;

export const SubTitle = styled.p`
  line-height: 1.7;
  font-size: 12px;
  color: gray;
  margin-top: 30px;
`;

export const About = styled.div`
  width: 500px;
  @media (max-width: 425px) {
    width: 100%;
    padding: 10px;
  }
`;
