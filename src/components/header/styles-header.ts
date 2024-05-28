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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const ButtonMenu = styled.menu`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  font-size: 47.5px;
  color: #25d61f;
  cursor: pointer;
  //text-shadow: 1px 1px 2px black;
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
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
`;
