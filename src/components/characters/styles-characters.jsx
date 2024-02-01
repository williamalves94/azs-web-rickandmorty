import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: gray;
`;

export const Home = styled.div`
  background-color: gray;
  height: 100%;
  img {
    width: 100%;
    height: auto;
    margin-top: 140px;
  }
`;

export const Title = styled.div`
  display: flex;
  //align-items: center;
  position: absolute;
  height: auto;
  //border: 2px solid #fff;
  margin-top: 400px;
  margin-left: 80px;

  .image-title {
    font-size: 160px;
    font-family: "Creepster", system-ui;
    color: #2bd326;
    text-shadow: 8px 8px 10px black;

    @media (max-width: 1669px) {
      font-size: 160px;
      margin-top: -50px;
    }
    @media (max-width: 1400px) {
      font-size: 120px;
      margin-top: -80px;
      margin-left: -20px;
    }
    @media (max-width: 1200px) {
      font-size: 105px;
      margin-top: -110px;
      margin-left: -30px;
    }
    @media (max-width: 1000px) {
      font-size: 90px;
      margin-top: -140px;
      margin-left: -40px;
    }
    @media (max-width: 900px) {
      font-size: 80px;
      margin-top: -152px;
      margin-left: -45px;
    }
    @media (max-width: 768px) {
      font-size: 70px;
      margin-top: -170px;
      margin-left: -50px;
    }
    @media (max-width: 630px) {
      font-size: 55px;
      margin-top: -180px;
      margin-left: -55px;
    }
    @media (max-width: 530px) {
      font-size: 50px;
      margin-top: -197px;
      margin-left: -58px;
    }
    @media (max-width: 480px) {
      font-size: 40px;
      margin-top: -200px;
      margin-left: -60px;
    }
    @media (max-width: 440px) {
      font-size: 37px;
      margin-top: -205px;
      margin-left: -60px;
    }

    @media (max-width: 390px) {
      font-size: 34px;
      margin-top: -213px;
      margin-left: -65px;
    }
    @media (max-width: 370px) {
      font-size: 32px;
      margin-top: -216px;
      margin-left: -64px;
    }
    @media (max-width: 330px) {
      font-size: 30px;
      margin-top: -224px;
      margin-left: -67px;
    }
  }
`;

export const ImageChar = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 12px 20px 0px #00000086;
  }
`;

export const Buttons = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
  button {
    flex: 1 1 1;
    background-color: gray;
    height: auto;
    margin: 10px;
    color: #2bd326;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    font-family: "Creepster", system-ui;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    box-shadow: 6px 10px 15px 0px #00000086;
    border: 2px solid #2bd326;
    border-radius: 4px;
    &:hover {
      background-color: #2bd326;
      transition: all.4s;
      color: black;
    }
  }
`;

export const FooterChar = styled.footer`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #2bd326;
  background-color: gray;
`;

export const LogoImg = styled.header`
  img {
    width: 350px;
    align-items: center;
    display: flex;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 300px;
    }
    @media (max-width: 600px) {
      width: 280px;
    }
    @media (max-width: 500px) {
      width: 250px;
    }
    @media (max-width: 400px) {
      width: 230px;
    }
  }
`;
