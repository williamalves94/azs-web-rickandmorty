import React from "react";
import Logo from "../../assets/logotwo.png";
import { HeadFav, LogoImgHead, Nav } from "./styles-favorites";
import { Link } from "react-router-dom";
import { handleClickLogo } from "../scrollToTop/scrollToTop";

export const HeaderFavorite = () => {
  return (
    <HeadFav>
      <LogoImgHead>
        <img src={Logo} onClick={handleClickLogo} />
      </LogoImgHead>
      <Nav></Nav>
    </HeadFav>
  );
};
