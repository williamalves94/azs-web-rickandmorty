import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  border: 5px solid black;
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
  margin-top: 350px;
  margin-left: 110px;

  .image-title {
    font-size: 160px;
    color: #fff;
    font-family: "Creepster", system-ui;
    color: #2bd326;
  }
`;

export const ImageEp = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 12px 20px 0px #00000086;
  }
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
    color: #2bd326;
    margin: 10px 0 5px 0;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;

    span {
      color: #2bd326;
    }
  }

  .air_date {
    font-size: 18px;
    color: #2bd326;
    margin-bottom: 5px;
  }
  .char-total {
    font-size: 18px;
    color: #2bd326;
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
  padding: 40px;
  color: black;
  font-size: 30px;
  font-weight: 400;

  input {
    width: 300px;
    height: 40px;
    outline: none;
    margin-left: 5px;
    border-radius: 3px;
    border: 0;
    font-size: 20px;
    padding: 5px;
    background: gray;
    border-bottom: 2px solid #2bd326;
    //box-shadow: 6px 10px 15px 0px #00000086;
    &::placeholder {
      color: #2bd326;
    }
  }
`;

export const Buttons = styled.button`
  background-color: gray;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;

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

export const ButtonViewed = styled.button`
  border-radius: 4px;
  padding: 5px;
  font-size: 15px;
  font-family: "Creepster", system-ui;
  letter-spacing: 2px;
  color: #2bd326;
  border: 2px solid #2bd326;
  cursor: pointer;
  margin: 10px 0 10px 0;
  background-color: gray;
  box-shadow: 6px 10px 15px 0px #00000086;
  &:hover {
    background-color: #2bd326;
    transition: all.4s;
    color: black;
    box-shadow: 6px 10px 15px 0px #00000086;
  }
`;

export const ButtonFavorite = styled.button`
  border-radius: 4px;
  padding: 5px;
  font-size: 15px;
  font-family: "Creepster", system-ui;
  letter-spacing: 2px;
  color: #2bd326;
  border: 2px solid #2bd326;
  cursor: pointer;
  margin: 10px 0 20px 0;
  background-color: gray;
  box-shadow: 6px 10px 15px 0px #00000086;
  &:hover {
    background-color: #2bd326;
    transition: all.4s;
    color: black;
    box-shadow: 6px 10px 15px 0px #00000086;
  }
`;
