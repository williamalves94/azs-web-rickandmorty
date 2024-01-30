import { Head, LogoImg } from "./styles-header";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const HeaderEpisode = () => {
  return (
    <Head>
      <LogoImg>
        <img src={Logo} alt="" />
      </LogoImg>

      <Link to="/characters">
        <p className="tag-nav">Personagens</p>
      </Link>
    </Head>
  );
};
