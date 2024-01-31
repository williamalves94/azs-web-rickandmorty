import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 120px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #25d61f;
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

export const Nav = styled.div`
  .tag-nav-char {
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 30px;
    margin-right: 100px;
  }
  .tag-nav-ep {
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 30px;
    margin-right: 150px;
    margin-top: 10px;
  }

  .tag-link {
    text-decoration: none;
  }
`;
