import { Head, LogoImg, Nav } from "./styles-header";
import Logo from "../../assets/logotwo.png";
import { Link } from "react-router-dom";
import { handleClickLogo } from "../scrollToTop/scrollToTop";

export const HeaderEpisode = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} onClick={handleClickLogo} />
      </LogoImg>
      <Nav>
        <Link to="/characters" className="tag-link">
          <a className="tag-nav-char">Personagens</a>
        </Link>
        <Link to="/favorites" className="tag-link">
          <a className="tag-nav-ep">Favoritos</a>
        </Link>
      </Nav>
    </Head>
  );
};
