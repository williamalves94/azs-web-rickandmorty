import styled from "styled-components";

export const Cards = styled.div`
  //border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 3fr));
  gap: 20px;
  padding: 20px 30px 20px 30px;

  char-div {
    display: grid;
    justify-content: center;
    padding: 10px 0;
    border: 3px solid blue;
  }

  .char-and-text {
    border: 2px solid #2bd326;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 10px 10px 15px 0px #00000086;
    margin-bottom: 10px;
  }

  .char-image {
    border-radius: 6px 6px 0 0;
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
  }

  .char-name {
    font-size: 15px;
    margin-left: 5px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
  }

  .char-status,
  .char-species {
    font-size: 20px;
    color: black;
    margin: 5px 0 5px 10px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #2bd326;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 4fr));
    padding: 50px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 3fr));
    padding: 20px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 3fr));
    padding: 30px;
  }
  @media (max-width: 470px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 3fr));
    padding: 20px;
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 3fr));
    padding: 22px;
  }
  @media (max-width: 374px) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 3fr));
    padding: 15px;
  }
`;
