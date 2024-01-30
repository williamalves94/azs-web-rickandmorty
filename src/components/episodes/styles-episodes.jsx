import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  border: 5px solid black;
`;

export const DivEpisodes = styled.div`
  background-color: gray;
  .title {
    font-size: 50px;
    margin: 10px 0 10px 0;
    color: #2bd326;
  }
  .episode-id-and-name {
    font-size: 40px;
    color: #fff;
    margin-bottom: 5px;
    span {
      color: #2bd326;
    }
  }

  .air_date {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
  }
  .char-total {
    font-size: 18px;
    color: red;
    margin: 0px 0 5px 0;

    //display: flex;
  }
  .title-texts {
    border: 3px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InputEpisode = styled.div`
  background-color: gray;
  border: 3px solid pink;
  display: flex;
  justify-content: center;
  padding: 20px;
  color: black;
  font-size: 30px;
  font-weight: 400;
  input {
    width: 300px;
    height: 40px;
    outline: none;
    margin-left: 5px;
    border-radius: 3px;
    border: 2px solid #2bd326;
    padding: 5px;
  }
`;

export const Buttons = styled.button`
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

  button {
    background-color: gray;
    width: 150px;
    height: 30px;
    margin: 10px;
    color: #2bd326;
    cursor: pointer;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
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

export const ButtonViewed = styled.button`
  border-radius: 4px;
  padding: 5px;
  font-size: 15px;
  color: black;
  border: 2px solid #2bd326;
  cursor: pointer;
  margin: 10px 0 10px 0;
  background-color: gray;
`;
