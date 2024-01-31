import { FooterEp, LogoImg } from "./styles-episodes";
import LogoFooter from "../../assets/logotwo.png";
export const FooterEpisodes = () => {
  return (
    <FooterEp>
      <LogoImg>
        <img src={LogoFooter} />
      </LogoImg>
    </FooterEp>
  );
};
