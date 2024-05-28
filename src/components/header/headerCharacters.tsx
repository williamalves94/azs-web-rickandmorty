import React from "react";
import { Head, LogoImg, Nav } from "./styles-header";
import Logo from "../../assets/logotwo.png";
import { Link } from "react-router-dom";
import { handleClickLogo } from "../scrollToTop/scrollToTop";
import { BiMenu } from "react-icons/bi";

export const HeaderCharacter = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} onClick={handleClickLogo} />
      </LogoImg>

      <Nav></Nav>
    </Head>
  );
};
