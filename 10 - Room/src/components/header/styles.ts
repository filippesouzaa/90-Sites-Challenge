import styled from "styled-components";

export const HeaderItem = styled.li`
  color: white;
`;

export const MainMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 450px;
  align-items: center;
  padding: 60px;
  @media (max-width: 425px) {
    padding: 0;
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  justify-content: space-between;
  color: #ffff;
  width: 300px;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  @media (max-width: 425px) {
    display: none;
  }
`;

export const Logo = styled.a`
  font-size: 28px;
  color: #ffff;
  text-decoration: none;
  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
`;
