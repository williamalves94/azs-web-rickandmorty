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
  }
`;

export const Title = styled.div`
  display: flex;
  //align-items: center;
  position: absolute;
  height: 100vh;
  margin-top: 250px;
  margin-left: 120px;

  .image-title {
    font-size: 160px;
    color: #fff;
    font-family: "Creepster", system-ui;
    color: #2bd326;
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

export const Buttons = styled.button`
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
