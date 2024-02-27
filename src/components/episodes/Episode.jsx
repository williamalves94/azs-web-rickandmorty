import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../graphql/getEpisodes";
import { useState, useEffect } from "react";
import { HeaderEpisode } from "../headers/headerEpisode";
import {
  MainDiv,
  DivEpisodes,
  InputEpisode,
  Buttons,
  ButtonViewed,
  ButtonFavorite,
  LoadingScreen,
  ErrorScreen,
} from "./styles-episodes";
import { Cards } from "../cards/styles-cards";
import { EpisodesMarkWatched } from "./EpisodesMarkWatched";
import { EpisodesMarkFavorite } from "./EpisodesMarkFavorite";
import { HomeMain } from "./Home-Main-Ep";
import { FooterEpisodes } from "./footer-episodes";
import LoadingImg from "../../assets/loadingimg.png";

export const EpisodeList = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputEpisode, setInputEpisode] = useState("");
  const [loading, setLoading] = useState(true);

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
        <img src={LoadingImg} />
      </LoadingScreen>
    );
  }

  if (error)
    return (
      <ErrorScreen>
        <h1>Error</h1>
      </ErrorScreen>
    );

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

  const favoriteEpisodesData = data.episodes.results.filter((episode) =>
    isEpisodeFavorite(episode.id)
  );

  const filteredEpisodes = data.episodes.results.filter((episode) =>
    episode.name.toLowerCase().includes(inputEpisode.toLowerCase())
  );

  return (
    <MainDiv>
      <HeaderEpisode />
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
        <div>
          {(showFavorites ? favoriteEpisodesData : filteredEpisodes).map(
            (episode) => (
              <div key={episode.id}>
                <div className="title-texts">
                  <p className="episode-id-and-name">
                    Episódio {episode.id}: {episode.name}
                  </p>

                  <p className="air_date">
                    Data de Estréia: {episode.air_date}
                  </p>
                  <p className="char-total">
                    Total de Personagens: {episode.characters.length}
                  </p>
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
                </div>

                <Cards className="cards">
                  {episode.characters.map((character) => (
                    <div className="char-div" key={character.id}>
                      <div className="char-and-text">
                        <img className="char-image" src={character.image} />
                        <h2 className="char-name">{character.name}</h2>
                        <p className="char-status">
                          Status: {character.status}
                        </p>
                        <p className="char-species">
                          {" "}
                          Espécie: {character.species}
                        </p>
                      </div>
                    </div>
                  ))}
                </Cards>
              </div>
            )
          )}
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
      <FooterEpisodes />
    </MainDiv>
  );
};
