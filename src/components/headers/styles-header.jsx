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
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const LogoImg = styled.header`
  img {
    width: 280px;
    margin-left: 70px;

    cursor: pointer;
    @media (max-width: 1000px) {
      width: 200px;
      margin-left: 30px;
    }
    @media (max-width: 500px) {
      width: 180px;
      margin-left: 20px;
    }
    @media (max-width: 420px) {
      margin-bottom: 20px;
    }
  }
`;

export const Nav = styled.header`
  margin-right: 100px;
  @media (max-width: 1000px) {
    margin-right: 60px;
  }
  @media (max-width: 700px) {
    margin-right: 40px;
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }

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
    @media (max-width: 700px) {
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
