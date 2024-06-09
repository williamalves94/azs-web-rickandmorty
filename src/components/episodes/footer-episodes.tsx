import { FooterEp, LogoImg } from "./styles-episodes";
import LogoFooter from "../../assets/logotwo.png";
import { handleClickLogo } from "../scrollToTop/scrollToTop";
import React from "react";
export const FooterEpisodes = () => {
  return (
    <FooterEp>
      <LogoImg>
        <img src={LogoFooter} onClick={handleClickLogo} />
      </LogoImg>
    </FooterEp>
  );
};
