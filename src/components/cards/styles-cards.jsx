import styled from "styled-components";

export const Cards = styled.div`
  //border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 100px 50px 100px;
  .char-div {
    margin-top: 20px;
    //border: 3px solid #fff;
    display: grid;
    justify-content: center;
    padding: 10px 0 10px 0;
  }
  .char-and-text {
    border: 2px solid #2bd326;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 10px 10px 15px 0px #00000086;
    margin-bottom: 10px;
  }
  .char-image {
    //border: 3px solid blue;
    border-radius: 6px 6px 0 0;
  }
  .char-name {
    font-size: 25px;
    margin-left: 10px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
  }

  .char-status {
    font-size: 20px;
    color: black;
    margin: 5px 0 5px 10px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #2bd326;
  }

  .char-species {
    font-size: 20px;
    color: black;
    margin: 5px 0 5px 10px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px #2bd326;
`;
