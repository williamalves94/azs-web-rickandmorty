import styled from "styled-components";

export const DivInfoCharacters = styled.div`
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid yellow;

  @media (max-width: 900px) {
    padding: 0 100px 0 100px;
  }
  @media (max-width: 852px) {
    padding: 120px 0 0 0;
  }
`;

export const DivAllInfo = styled.div`
  //margin-top: 200px;
`;

export const DivCharacter = styled.div`
  border: 2px solid #2bd326;
  //padding: 250px 0 250px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 10px 15px 0px #00000086;
  border-radius: 8px;
  @media (max-width: 852px) {
    display: block;
  }
`;

export const ImgCharacter = styled.div`
  img {
    width: 380px;
    border-radius: 8px 0 0 8px;
  }
`;

export const InfoChar = styled.div`
  padding: 0 20px 20px 20px;
  @media (max-width: 900px) {
    font-size: 53px;
  }
  .char-name {
    font-size: 70px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 900px) {
      font-size: 53px;
    }
  }
  .char-status {
    font-size: 40px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
  }
  .char-specie {
    font-size: 40px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
  }
`;

export const ErrorData = styled.div``;
