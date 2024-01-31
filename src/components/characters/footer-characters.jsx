import { FooterChar, LogoImg } from "./styles-characters";
import LogoFooter from "../../assets/logotwo.png";
import { handleClickLogo } from "../scrollToTop/scrollToTop";
export const FooterCharacters = () => {
  return (
    <FooterChar>
      <LogoImg>
        <img src={LogoFooter} onClick={handleClickLogo} />
      </LogoImg>
    </FooterChar>
  );
};
