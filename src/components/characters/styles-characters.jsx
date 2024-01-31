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
  margin-left: 120px;

  .image-title {
    font-size: 160px;
    font-family: "Creepster", system-ui;
    color: #2bd326;
    text-shadow: 8px 8px 10px black;
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
    margin-left: 70px;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
`;
