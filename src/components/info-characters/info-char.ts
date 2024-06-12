import styled from "styled-components";

export const DivInfoCharacters = styled.div`
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 2px solid yellow;

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
    width: 350px;
    display: block;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 480px) {
    width: 320px;
    //height: 300px;
  }
  @media (max-width: 450px) {
    width: 300px;
    //height: 300px;
  }
  @media (max-width: 430px) {
    width: 280px;
    //height: 300px;
  }
  @media (max-width: 400px) {
    width: 270px;
    //height: 300px;
  }
`;

export const ImgCharacter = styled.div`
  height: 100%;
  img {
    width: 380px;

    border-radius: 8px 0 0 8px;
    @media (max-width: 500px) {
      width: 100%;
    }
    @media (max-width: 852px) {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
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
    @media (max-width: 852px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
    @media (max-width: 430px) {
      font-size: 25px;
    }
  }
  .char-status {
    font-size: 40px;
    color: black;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #2bd326;

    @media (max-width: 852px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 430px) {
      font-size: 17px;
    }
  }
  .char-specie {
    font-size: 40px;
    color: black;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #2bd326;

    @media (max-width: 852px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 430px) {
      font-size: 17px;
    }
  }
`;

export const ErrorData = styled.div``;
