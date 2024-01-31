import { Head, LogoImg, Nav } from "./styles-header";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeaderEpisode = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} alt="" />
      </LogoImg>
      <Nav>
        <Link to="/characters" className="tag-link">
          <p className="tag-nav-char">Personagens</p>
        </Link>
        <Link to="/favorites" className="tag-link">
          <p className="tag-nav-ep">Episódios Favoritos</p>
        </Link>
      </Nav>
    </Head>
  );
};
