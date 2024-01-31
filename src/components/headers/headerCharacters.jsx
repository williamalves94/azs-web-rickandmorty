import { Head, LogoImg, Nav } from "./styles-header";
import Logo from "../../assets/logotwo.png";
import { Link } from "react-router-dom";
import { handleClickLogo } from "../scrollToTop/scrollToTop";

export const HeaderCharacter = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} onClick={handleClickLogo} />
      </LogoImg>
      <Nav>
        <Link to="/" className="tag-link">
          <p className="tag-nav-ep">Episódios</p>
        </Link>
      </Nav>
    </Head>
  );
};
