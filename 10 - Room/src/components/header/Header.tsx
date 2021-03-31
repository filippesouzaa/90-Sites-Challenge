import React from "react";
import { MainMenu, MenuItems, Logo } from "./styles";

const Header = () => {
  return (
    <MainMenu>
      <Logo href="index.html">room</Logo>
      <MenuItems>
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </MenuItems>
    </MainMenu>
  );
};

export default Header;
