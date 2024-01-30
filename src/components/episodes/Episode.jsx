// src/components/EpisodeList.js
//import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../graphql/getEpisodes";
import { useState } from "react";
import { HeaderEpisode } from "../headers/headerEpisode";
import {
  MainDiv,
  DivEpisodes,
  InputEpisode,
  Buttons,
  ButtonViewed,
} from "./styles-episodes";
import { Cards } from "../cards/styles-cards";

export const EpisodeList = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputEpisode, setInputEpisode] = useState("");
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  const { loading, error, data, fetchMore } = useQuery(GET_ALL_EPISODES, {
    variables: { page: currentPage },
  });

  const handleMarkAsWatched = (episodeId) => {
    if (isEpisodeWatched(episodeId)) {
      setWatchedEpisodes((prevWatchedEpisodes) =>
        prevWatchedEpisodes.filter((id) => id !== episodeId)
      );
    } else {
      setWatchedEpisodes((prevWatchedEpisodes) => [
        ...prevWatchedEpisodes,
        episodeId,
      ]);
    }
  };

  const isEpisodeWatched = (episodeId) => watchedEpisodes.includes(episodeId);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>error</p>;

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

  const filteredEpisodes = data.episodes.results.filter((episode) =>
    episode.name.toLowerCase().includes(inputEpisode.toLowerCase())
  );

  return (
    <MainDiv>
      <HeaderEpisode />
      <InputEpisode>
        <input
          type="text"
          placeholder="Buscar episódio"
          value={inputEpisode}
          onChange={(e) => setInputEpisode(e.target.value)}
        />
      </InputEpisode>

      <DivEpisodes>
        <div>
          {filteredEpisodes.map((episode) => (
            <div key={episode.id}>
              <div className="title-texts">
                <p className="title">Episódios</p>

                <p className="episode-id-and-name">
                  Episódio {episode.id}: <span>{episode.name}</span>
                </p>

                <p className="air_date">Data de Estréia: {episode.air_date}</p>
                <p className="char-total">
                  Total de Personagens: {episode.characters.length}
                </p>
                <ButtonViewed
                  onClick={() => handleMarkAsWatched(episode.id)}
                  isWatched={isEpisodeWatched(episode.id)}
                >
                  {isEpisodeWatched(episode.id)
                    ? "Desmarcar como Visto"
                    : "Marcar como Visto"}
                </ButtonViewed>
              </div>

              <Cards className="cards">
                {episode.characters.map((character) => (
                  <div className="char-div" key={character.id}>
                    <div className="char-and-text">
                      <img className="char-image" src={character.image} />
                      <h2 className="char-name">{character.name}</h2>
                      <p className="char-status">{character.status}</p>
                      <p className="char-species"> {character.species}</p>
                    </div>
                  </div>
                ))}
              </Cards>
            </div>
          ))}
        </div>
      </DivEpisodes>
      <Buttons>
        {data.episodes.info.prev && (
          <button onClick={handlePrevPage}>Anterior</button>
        )}
        {data.episodes.info.next && (
          <button onClick={handleNextPage}>Próximo</button>
        )}
      </Buttons>
    </MainDiv>
  );
};
