import { Head, LogoImg } from "./styles-header";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeaderCharacter = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} alt="" />
      </LogoImg>
      <nav>
        <Link to="/">
          <p className="tag-nav">Episódios</p>
        </Link>
      </nav>
    </Head>
  );
};
