import LogoFooter from "../../assets/logotwo.png";
import { FooterFav, LogoImg } from "./styles-favorites";
import { handleClickLogo } from "../scrollToTop/scrollToTop";

export const FooterFavorites = () => {
  return (
    <FooterFav>
      <LogoImg>
        <img src={LogoFooter} onClick={handleClickLogo} />
      </LogoImg>
    </FooterFav>
  );
};
