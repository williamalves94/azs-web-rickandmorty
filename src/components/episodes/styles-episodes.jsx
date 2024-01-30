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
  input {
    outline: none;
    margin-left: 5px;
    border-radius: 3px;
    border: none;
  }
`;
