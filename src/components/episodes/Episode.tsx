import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../graphql/getEpisodes";
import { useState, useEffect } from "react";
import { Header } from "../header/header-main";
import {
  MainDiv,
  DivEpisodes,
  DivInEpisodes,
  DivEachEpisodes,
  InputEpisode,
  Buttons,
  ButtonViewed,
  ButtonFavorite,
  LoadingScreen,
  ErrorScreen,
  DivSummary,
  ButtonsFavAndWatchDiv,
} from "./styles-episodes";
import { Cards } from "../cards/styles-cards";
import { EpisodesMarkWatched } from "./EpisodesMarkWatched";
import { EpisodesMarkFavorite } from "./EpisodesMarkFavorite";
import { HomeMain } from "./Home-Main-Ep";
import { FooterEpisodes } from "./footer-episodes";
//import { CharactersListProps } from "../characters/Characters";
//import { InfoCharacters } from "../info-characters/info-characters";
//import { Link } from "react-router-dom";

interface EpisodesListProps {
  id: number;
  page: number;
  episode: any;
  name: string;
  characters: string[];
  air_date: string[] | number[];
}

export const EpisodeList = ({ page, id, name }: EpisodesListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputEpisode, setInputEpisode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { isEpisodeWatched, handleMarkAsWatched } = EpisodesMarkWatched();
  const {
    isEpisodeFavorite,
    handleMarkAsFavorite,
    showFavorites,
  } = EpisodesMarkFavorite();

  const { error, data, fetchMore, loading: queryLoading } = useQuery(
    GET_ALL_EPISODES,
    {
      variables: { page: currentPage },
    }
  );
  //console.log(error);

  useEffect(() => {
    if (queryLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [queryLoading]);

  if (loading) {
    return (
      <LoadingScreen>
        <p>AGUARDE, CARREGANDO...</p>
      </LoadingScreen>
    );
  }

  if (error) {
    return (
      <ErrorScreen>
        <h1>Error</h1>
      </ErrorScreen>
    );
  }
  const handleNextPage = () => {
    // eslint-disable-next-line no-undef
    fetchMore({
      variables: {
        page: data.episodes.info.next,
      },
    }).then(() => setCurrentPage(data.episodes.info.next));
  };

  const handlePrevPage = () => {
    fetchMore({
      variables: {
        page: data.episodes.info.prev,
      },
    }).then(() => setCurrentPage(data.episodes.info.prev));
  };

  const favoriteEpisodesData = data.episodes.results.filter(
    (episode: EpisodesListProps) => isEpisodeFavorite(episode.id)
  );

  const filteredEpisodes = data.episodes.results.filter(
    (episode: EpisodesListProps) =>
      episode.name.toLowerCase().includes(inputEpisode.toLowerCase())
  );

  return (
    <MainDiv>
      <Header />
      <HomeMain />

      <InputEpisode>
        <input
          type="text"
          placeholder="Buscar episódio"
          value={inputEpisode}
          onChange={(e) => setInputEpisode(e.target.value)}
        />
      </InputEpisode>

      <DivEpisodes>
        <DivInEpisodes>
          {(showFavorites ? favoriteEpisodesData : filteredEpisodes).map(
            (episode: EpisodesListProps) => (
              <DivEachEpisodes key={episode.id}>
                <DivSummary className="title-texts">
                  <p className="episode-id-and-name">
                    Episódio {episode.id}: {episode.name}
                  </p>
                </DivSummary>
                <p className="air_date">Data de Estréia: {episode.air_date}</p>
                <ButtonsFavAndWatchDiv>
                  <ButtonViewed
                    onClick={() => handleMarkAsWatched(episode.id)}
                    isWatched={isEpisodeWatched(episode.id)}
                    className={`wathced-button ${
                      isEpisodeWatched(episode.id) ? "watched" : ""
                    }`}
                  >
                    {isEpisodeWatched(episode.id)
                      ? "Desmarcar como Visto"
                      : "Marcar como Visto"}
                  </ButtonViewed>

                  <ButtonFavorite
                    onClick={() => handleMarkAsFavorite(episode)}
                    // eslint-disable-next-line react/no-unknown-property
                    isFavorite={isEpisodeFavorite(episode.id)}
                    className={`favorite-button ${
                      isEpisodeFavorite(episode.id) ? "favorited" : ""
                    }`}
                  >
                    {isEpisodeFavorite(episode.id)
                      ? "Desfavoritar Episódio"
                      : "Favoritar Episódio"}
                  </ButtonFavorite>
                </ButtonsFavAndWatchDiv>
                <p className="char-total">
                  Total de Personagens: {episode.characters.length}
                </p>
                <Cards className="cards">
                  {Array.isArray(episode.characters) &&
                    episode.characters.map((character) => (
                      <div className="char-div" key={character.id}>
                        <div className="char-and-text">
                          <img className="char-image" src={character.image} />

                          <h2 className="char-name"></h2>
                        </div>
                      </div>
                    ))}
                </Cards>
              </DivEachEpisodes>
            )
          )}
        </DivInEpisodes>
      </DivEpisodes>
      <Buttons>
        {data.episodes.info.prev && (
          <button onClick={handlePrevPage}>Anterior</button>
        )}
        {data.episodes.info.next && (
          <button onClick={handleNextPage}>Próximo</button>
        )}
      </Buttons>
      <FooterEpisodes />
    </MainDiv>
  );
};

//<Link to={`/infocharacters/${character.id}`}>
//<img className="char-image" src={character.image} />
//</Link>
