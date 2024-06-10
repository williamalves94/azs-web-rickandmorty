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
    //justify-content: space-around;
    align-items: center;
    display: flex;
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
  @media (max-width: 480px) {
    //justify-content: space-around;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 30px;
    font-size: 45px;
  }
  @media (max-width: 320px) {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 40px;
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
    @media (max-width: 800px) {
      width: 180px;
      margin-left: 30px;
    }
    @media (max-width: 480px) {
      width: 160px;
      margin-left: 20px;
    }
    @media (max-width: 420px) {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    @media (max-width: 320px) {
      width: 130px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
  }
`;
