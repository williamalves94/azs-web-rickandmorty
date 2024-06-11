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
  margin-left: 80px;
  //border: 2px solid #2bd326;

  .image-title {
    font-size: 160px;
    font-family: "Creepster", system-ui;
    color: #2bd326;
    text-shadow: 8px 8px 10px black;

    @media (max-width: 1669px) {
      font-size: 160px;
      margin-top: -50px;
    }
    @media (max-width: 1500px) {
      font-size: 150px;
      margin-top: -60px;
      margin-left: -30px;
    }
    @media (max-width: 1400px) {
      font-size: 140px;
      margin-top: -70px;
      margin-left: -20px;
    }
    @media (max-width: 1300px) {
      font-size: 120px;
      margin-top: -80px;
      margin-left: -20px;
    }
    @media (max-width: 1200px) {
      font-size: 110px;
      margin-top: -100px;
      margin-left: -30px;
    }
    @media (max-width: 1100px) {
      font-size: 100px;
      margin-top: -110px;
      margin-left: -40px;
    }
    @media (max-width: 1000px) {
      font-size: 90px;
      margin-top: -135px;
      margin-left: -40px;
    }
    @media (max-width: 900px) {
      font-size: 85px;
      margin-top: -165px;
      margin-left: -50px;
    }
    @media (max-width: 740px) {
      font-size: 70px;
      margin-top: -185px;
      margin-left: -50px;
    }
    @media (max-width: 640px) {
      font-size: 55px;
      margin-top: -200px;
      margin-left: -50px;
    }
    @media (max-width: 540px) {
      font-size: 50px;
      margin-top: -220px;
      margin-left: -60px;
    }
    @media (max-width: 480px) {
      font-size: 42px;
      margin-top: -230px;
      margin-left: -60px;
    }
    @media (max-width: 420px) {
      font-size: 38px;
      margin-top: -240px;
      margin-left: -65px;
    }
    @media (max-width: 360px) {
      font-size: 34px;
      margin-top: -255px;
      margin-left: -65px;
    }
    @media (max-width: 320px) {
      font-size: 28px;
      margin-top: -260px;
      margin-left: -65px;
    }
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
  transition: max-height 0.3s ease;
  //padding: 20px;
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
    cursor: pointer;
    @media (max-width: 1100px) {
      font-size: 40px;
      word-wrap: break-word;
    }
    @media (max-width: 1000px) {
      font-size: 35px;
      word-wrap: break-word;
    }
    @media (max-width: 800px) {
      font-size: 30px;
      word-wrap: break-word;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      font-size: 25px;
      word-wrap: break-word;
    }
    @media (max-width: 600px) {
      flex-direction: column;
      font-size: 20px;
      word-wrap: break-word;
    }
  }

  .air_date {
    margin-top: 10px;
    font-size: 18px;
    color: #2bd326;
    display: flex;
    justify-content: center;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    color: #2bd326;
  }
  .char-total {
    margin-top: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
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

  .title-fav p {
    font-size: 50px;
    text-align: center;
    padding: 200px 20px 20px 20px;
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    //border: 3px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 1px 1px 2px black;
  }
`;

export const DivInEpisodes = styled.div`
  //border: 2px solid yellow;
  padding: 25px 300px 25px 300px;
  @media (max-width: 1000px) {
    padding: 25px 200px 25px 200px;
  }
  @media (max-width: 920px) {
    padding: 25px 170px 25px 170px;
  }
  @media (max-width: 700px) {
    padding: 25px 150px 25px 150px;
  }
  @media (max-width: 600px) {
    padding: 25px 140px 25px 140px;
  }
  @media (max-width: 500px) {
    padding: 25px 100px 25px 100px;
  }
  @media (max-width: 420px) {
    padding: 25px 90px 25px 90px;
  }
  @media (max-width: 400px) {
    padding: 25px 80px 25px 80px;
  }
  @media (max-width: 360px) {
    padding: 25px 65px 25px 65px;
  }
  @media (max-width: 320px) {
    padding: 25px 50px 25px 50px;
  }
  @media (max-width: 310px) {
    padding: 25px 45px 25px 45px;
  }
`;

export const DivEachEpisodes = styled.details`
  //border: 2px solid blue;
  padding: 8px;
  border-radius: 4px;
  margin-top: 30px;
  box-shadow: 6px 10px 15px 0px #00000086;
  //background-color: yellow;
  transition: all 0.5s;
`;

export const DivSummary = styled.summary``;

export const InputEpisode = styled.div`
  background-color: gray;
  //border: 3px solid pink;
  display: flex;
  justify-content: center;
  padding: 40px;
  color: #2bd326;
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 480px) {
    padding: 25px 130px 0px 130px;
  }

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
    @media (max-width: 480px) {
      font-size: 15px;
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

export const ButtonsFavAndWatchDiv = styled.div`
  //border: 3px solid blue;
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 0px 15px 0px 15px;
  }
  @media (max-width: 400px) {
    padding: 0px 40px 0px 40px;
  }
  @media (max-width: 390px) {
    padding: 0px 60px 0px 60px;
  }
  @media (max-width: 340px) {
    padding: 0px 90px 0px970px;
  }
  @media (max-width: 300px) {
    padding: 0px 80px 0px 80px;
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
  margin: 10px 10px 10px 0;
  background-color: gray;
  box-shadow: 6px 10px 15px 0px #00000086;
  &:hover {
    background-color: #2bd326;
    transition: all.4s;
    color: black;
    box-shadow: 6px 10px 15px 0px #00000086;
  }
  &.watched {
    background-color: #2bd326;
    color: black;
  }
  @media (max-width: 390px) {
    font-size: 12px;
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
  margin: 10px 0 10px 10px;
  background-color: gray;
  box-shadow: 6px 10px 15px 0px #00000086;
  &:hover {
    background-color: #2bd326;
    transition: all.4s;
    color: black;
    box-shadow: 6px 10px 15px 0px #00000086;
  }
  &.favorited {
    background-color: #2bd326;
    color: black;
  }
  @media (max-width: 390px) {
    font-size: 12px;
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
    align-items: center;
    display: flex;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 300px;
    }
    @media (max-width: 600px) {
      width: 280px;
    }
    @media (max-width: 500px) {
      width: 250px;
    }
    @media (max-width: 400px) {
      width: 230px;
    }
  }
`;

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    font-size: 60px;
    @media (max-width: 600px) {
      font-size: 45px;
    }
    @media (max-width: 500px) {
      font-size: 40px;
    }
    @media (max-width: 480px) {
      font-size: 36px;
    }
    @media (max-width: 430px) {
      font-size: 33px;
    }
    @media (max-width: 400px) {
      font-size: 29px;
    }
    @media (max-width: 330px) {
      font-size: 26px;
    }
    @media (max-width: 300px) {
      font-size: 24px;
    }
    @media (max-width: 270px) {
      font-size: 21px;
    }
  }
  img {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;

export const ErrorScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  h1 {
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    font-size: 200px;
    @media (max-width: 1000px) {
      font-size: 150px;
    }
    @media (max-width: 800px) {
      font-size: 130px;
    }
    @media (max-width: 700px) {
      font-size: 110px;
    }
    @media (max-width: 600px) {
      font-size: 105px;
    }
    @media (max-width: 500px) {
      font-size: 80px;
    }
    @media (max-width: 400px) {
      font-size: 70px;
    }
    @media (max-width: 300px) {
      font-size: 60px;
    }
  }
`;
