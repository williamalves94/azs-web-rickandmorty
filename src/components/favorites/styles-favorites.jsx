import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const HeadFav = styled.header`
  width: 100%;
  height: 140px;
  background-color: gray;
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

export const DivEpisodesFav = styled.div`
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

  .title-texts p {
    font-size: 60px;
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
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 768px) {
      font-size: 45px;
    }
  }

  .div-all {
    //border: 2px solid blue;
    width: 100%;
  }

  .ep-name {
    display: flex;
    justify-content: center;
    padding: 40px 20px 10px 20px;
    color: #2bd326;
    font-size: 40px;
    font-family: "Creepster", system-ui;
    letter-spacing: 2px;
    text-shadow: 1px 1px 2px black;
    @media (max-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 27px;
    }
    @media (max-width: 400px) {
      font-size: 25px;
    }
    @media (max-width: 369px) {
      font-size: 22px;
    }
    @media (max-width: 337px) {
      font-size: 20px;
    }
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }
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
