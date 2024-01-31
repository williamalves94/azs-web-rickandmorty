import ImageEpisodes from "../../assets/mainep.jpg";
import { Home, Title, ImageEp } from "./styles-episodes";

export const HomeMain = () => {
  return (
    <Home>
      <Title>
        <p className="image-title">Personagens</p>
      </Title>
      <ImageEp>
        <img src={ImageEpisodes} />
      </ImageEp>
    </Home>
  );
};
