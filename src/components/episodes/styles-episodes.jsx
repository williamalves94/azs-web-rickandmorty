import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: auto;
  //border: 5px solid black;
`;

export const Home = styled.div`
  background-color: gray;
  height: 100%;
  img {
    width: 100%;
    height: auto;
    margin-top: 140px;
  }
`;

export const Title = styled.div`
  display: flex;
  //align-items: center;
  position: absolute;
  height: auto;
  margin-top: 450px;
  margin-left: 110px;
  //border: 2px solid #2bd326;

  .image-title {
    font-size: 160px;
    color: #fff;
    font-family: "Creepster", system-ui;
    color: #2bd326;
    text-shadow: 5px 5px 10px black;
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
    font-size: 50px;
    color: #2bd326;
    margin: 10px 0 5px 0;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
  }

  .air_date {
    font-size: 18px;
    color: #2bd326;
    margin: 10px 0 10px 0;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    color: #2bd326;
  }
  .char-total {
    font-size: 18px;
    margin: 0px 0 5px 0;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    color: #2bd326;

    //display: flex;
  }
  .title-texts {
    ///border: 3px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InputEpisode = styled.div`
  background-color: gray;
  //border: 3px solid pink;
  display: flex;
  justify-content: center;
  padding: 40px;
  color: #2bd326;
  font-size: 30px;
  font-weight: 400;

  input {
    width: 300px;
    height: 40px;
    margin-top: 30px;
    outline: none;
    color: #2bd326;
    border: 0;
    font-size: 20px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
    padding: 5px;
    background: gray;
    border-bottom: 2px solid #2bd326;

    //box-shadow: 6px 10px 15px 0px #00000086;
    &::placeholder {
      color: #2bd326;
    }
  }
`;

export const Buttons = styled.div`
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

export const FooterEp = styled.footer`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #2bd326;
  background-color: gray;
`;

export const LogoImg = styled.header`
  img {
    width: 350px;
    margin-left: 70px;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
`;
