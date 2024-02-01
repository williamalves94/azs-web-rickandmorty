import styled from "styled-components";

export const Cards = styled.div`
  //border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
  gap: 50px;
  padding: 5vw;
  char-div {
    display: grid;
    justify-content: center;
    padding: 10px 0;
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
    height: auto;
  }

  .char-name {
    font-size: 25px;
    margin-left: 10px;
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
    padding: 50px;
  }
  @media (max-width: 370px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
    padding: 50px;
  }
`;
