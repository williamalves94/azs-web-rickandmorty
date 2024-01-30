import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  height: 120px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #25d61f;
  box-shadow: 0px 12px 20px 0px #00000086;
  .tag-nav {
    color: #25d61f;
    text-decoration: none;
    font-size: 20px;
    margin-right: 100px;
  }
`;

export const LogoImg = styled.header`
  img {
    width: 250px;
    margin-left: 60px;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
`;
