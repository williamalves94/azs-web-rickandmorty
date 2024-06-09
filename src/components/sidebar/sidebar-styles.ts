import styled, { keyframes } from "styled-components";

export const SidebarDiv = styled.div`
  background-color: gray;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  //border: 2px solid red;
  //left: 100px;
  width: 270px;
  height: 920px;
  right: ${(props) => (props.sidebar ? "0" : "100%")};
  animation: showSidebar 0.5s;
  border-left: 2px solid #25d61f;
  //border-bottom: 2px solid #25d61f;
  padding: 0 20px 0 20px;
  font-size: 40px;
  box-shadow: 0px 12px 20px 0px #00000086;
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 270px;
    }
  }
`;

export const CloseButtonSidebar = styled.div`
  font-size: 30px;
  font-family: "Creepster", system-ui;
  text-shadow: 1px 1px 2px black;
  margin: 10px 0 40px 220px;
`;

export const Nav = styled.header`
  margin-right: 100px;
  flex-direction: column;
  display: flex;
  @media (max-width: 1000px) {
    margin-right: 60px;
  }
  @media (max-width: 700px) {
    margin-top: 10px;
    margin-right: 0px;
  }
  @media (max-width: 420px) {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .tag-nav-char {
    //border: 2px solid blue;
    margin-right: 30px;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 1000px) {
      font-size: 30px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }
  .tag-nav-ep {
    //border: 2px solid #fff;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 1000px) {
      font-size: 30px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }

  .tag-link {
    text-decoration: none;
  }
`;
