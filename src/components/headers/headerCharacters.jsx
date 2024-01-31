import { Head, LogoImg, Nav } from "./styles-header";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeaderCharacter = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} alt="" />
      </LogoImg>
      <Nav>
        <Link to="/" className="tag-link">
          <p className="tag-nav-ep">Episódios</p>
        </Link>
      </Nav>
    </Head>
  );
};
