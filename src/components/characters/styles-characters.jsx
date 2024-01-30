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
