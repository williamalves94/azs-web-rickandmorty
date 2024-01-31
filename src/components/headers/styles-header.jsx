import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 140px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #25d61f;
  box-shadow: 0px 12px 20px 0px #00000086;
  z-index: 999;
  position: fixed;
`;

export const LogoImg = styled.header`
  img {
    width: 280px;
    margin-left: 70px;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
`;

export const Nav = styled.header`
  //border: 2px solid black;
  margin-right: 100px;
  .tag-nav-char {
    //border: 2px solid #fff;
    margin-right: 30px;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
  }
  .tag-nav-ep {
    //border: 2px solid #fff;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
  }

  .tag-link {
    text-decoration: none;
  }
`;
