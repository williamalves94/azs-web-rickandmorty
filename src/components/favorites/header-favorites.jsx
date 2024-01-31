import Logo from "../../assets/logo.png";
import { Head, LogoImg, Nav } from "../headers/styles-header";
import { Link } from "react-router-dom";

export const HeaderFavorite = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} />
      </LogoImg>
      <Nav>
        <Link to="/" className="tag-link">
          <p className="tag-nav-ep">Episódios</p>
        </Link>
      </Nav>
    </Head>
  );
};
