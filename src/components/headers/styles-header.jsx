import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 120px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #25d61f;

  .tag-nav {
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 30px;
    margin-right: 100px;
  }
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
