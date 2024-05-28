import React, { useState } from "react";
import { Head, LogoImg } from "./styles-header";
import Logo from "../../assets/logotwo.png";
import { handleClickLogo } from "../scrollToTop/scrollToTop";
import { BiMenu } from "react-icons/bi";
import { ButtonMenu } from "./styles-header";
import { Sidebar } from "../sidebar/sidebar";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Head>
      <LogoImg>
        <img src={Logo} onClick={handleClickLogo} />
      </LogoImg>
      <ButtonMenu>
        <BiMenu onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </ButtonMenu>
    </Head>
  );
};
