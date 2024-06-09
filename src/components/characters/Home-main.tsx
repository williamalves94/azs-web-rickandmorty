import React from "react";
import ImageCharacters from "../../assets/mainchar.jpg";
import { Home, Title, ImageChar } from "./styles-characters";

export const HomeMain = () => {
  return (
    <Home>
      <Title>
        <p className="image-title">Personagens</p>
      </Title>
      <ImageChar>
        <img src={ImageCharacters} />
      </ImageChar>
    </Home>
  );
};
