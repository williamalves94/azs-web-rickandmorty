import React from "react";
import { SidebarDiv, CloseButtonSidebar } from "./sidebar-styles";
import { Nav } from "./sidebar-styles";
import { Link } from "react-router-dom";

export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <SidebarDiv sidebar={active}>
      <CloseButtonSidebar onClick={closeSidebar}>x</CloseButtonSidebar>
      <Nav>
        <Link to="/" className="tag-link">
          <p className="tag-nav-ep">Episódios</p>
        </Link>
        <Link to="/characters" className="tag-link">
          <a className="tag-nav-char">Personagens</a>
        </Link>
        <Link to="/favorites" className="tag-link">
          <a className="tag-nav-ep">Favoritos</a>
        </Link>
      </Nav>
    </SidebarDiv>
  );
};
