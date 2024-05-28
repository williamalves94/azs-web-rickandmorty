import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: gray;
`;

export const HeadFav = styled.header`
  width: 100%;
  height: 140px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #25d61f;
  box-shadow: 0px 12px 20px 0px #00000086;
  z-index: 999;
  position: fixed;
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const LogoImgHead = styled.header`
  img {
    width: 280px;
    margin-left: 70px;
    align-items: center;
    display: flex;
    cursor: pointer;
    @media (max-width: 1000px) {
      width: 200px;
      margin-left: 30px;
    }
    @media (max-width: 600px) {
      width: 180px;
      margin-left: 20px;
    }
    @media (max-width: 420px) {
      margin-bottom: 20px;
    }
  }
`;

export const Nav = styled.header`
  margin-right: 60px;
  @media (max-width: 1000px) {
    margin-right: 60px;
  }
  @media (max-width: 700px) {
    margin-right: 40px;
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }
  .tag-nav-char {
    //border: 2px solid #fff;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
  }
  .tag-nav-ep {
    //border: 2px solid #fff;
    color: #25d61f;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 35px;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
  }

  .tag-link {
    text-decoration: none;
  }
`;

export const DivEpisodes = styled.div`
  background-color: gray;
  //border: 2px solid red;
  min-height: 740px;

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
    padding: 222px 20px 20px 20px;
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
  //border: 2px solid #fff;
  padding: 20px 300px 10px 300px;
`;

export const DivAllEpisodesFav = styled.div`
  //border: 2px solid black;
  padding: 0 0 40px 0;
`;

export const DivEachEpisodes = styled.details`
  display: flex;
  //border: 2px solid #5b79ff;
  padding: 8px;
  border-radius: 4px;
  //margin-top: 30px;
  box-shadow: 6px 10px 15px 0px #00000086;
  //background-color: yellow;
`;

export const DivSummary = styled.summary`
  //border: 2px solid #e5ff00;
`;

export const DateAndTotalChar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .air-date {
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }
  .char-total {
    color: #2bd326;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
  }
`;

export const CharDivFav = styled.div`
  //border: 3px solid #fff;
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

export const FooterFav = styled.footer`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: 50px;
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

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  height: 41.2vh;
  @media (max-width: 769px) {
    height: 44.9vh;
  }
  h1 {
    color: #2bd326;
    font-size: 120px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
    margin-top: 50px;
    @media (max-width: 1000px) {
      font-size: 100px;
    }
    @media (max-width: 800px) {
      font-size: 90px;
    }
    @media (max-width: 700px) {
      font-size: 80px;
    }
    @media (max-width: 600px) {
      font-size: 75px;
    }
    @media (max-width: 480px) {
      font-size: 65px;
    }
    @media (max-width: 400px) {
      font-size: 55px;
    }
    @media (max-width: 320px) {
      font-size: 50px;
    }
    @media (max-width: 300px) {
      font-size: 45px;
    }
  }
`;
