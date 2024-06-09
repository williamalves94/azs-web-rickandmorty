// src/components/FavoriteEpisodes.js
import React from "react";
import { EpisodesMarkFavorite } from "../episodes/EpisodesMarkFavorite";
//import { HeaderFavorite } from "./header-favorites";
import { MainDiv } from "./styles-favorites";
import { DateAndTotalChar, EmptyList } from "./styles-favorites";
import { FooterFavorites } from "./Footer-favorites";
import { Header } from "../header/header-main";
import {
  DivEpisodes,
  DivEachEpisodes,
  DivSummary,
  DivInEpisodes,
  DivAllEpisodesFav,
} from "../favorites/styles-favorites";
import { Cards } from "../cards/styles-cards";

export const FavoriteEpisodes = () => {
  // eslint-disable-next-line no-unused-vars
  const { isEpisodeFavorite, favoriteEpisodesData } = EpisodesMarkFavorite();

  return (
    <MainDiv>
      <Header />
      <DivEpisodes>
        <div className="title-fav">
          <p>
            Lista de Episódios <br></br>Favoritos
          </p>
        </div>
        <DivInEpisodes>
          {favoriteEpisodesData.length === 0 ? (
            <EmptyList>
              <h1>Lista vazia</h1>
            </EmptyList>
          ) : (
            favoriteEpisodesData.map((episode) => (
              <DivAllEpisodesFav>
                <DivEachEpisodes key={EpisodesMarkFavorite.id}>
                  <DivSummary className="title-texts">
                    <p className="episode-id-and-name">
                      Episódio {episode.id}: {episode.name}
                    </p>
                  </DivSummary>

                  <DateAndTotalChar>
                    <div className="air-date">
                      Data de Estréia: {episode.air_date}
                    </div>
                    <div className="char-total">
                      Total de Personagens: {episode.characters.length}
                    </div>
                  </DateAndTotalChar>
                  <Cards className="cards">
                    {Array.isArray(episode.characters) &&
                      episode.characters.map((character) => (
                        <div className="char-div" key={character.id}>
                          <div className="char-and-text">
                            <img className="char-image" src={character.image} />
                          </div>
                        </div>
                      ))}
                  </Cards>
                </DivEachEpisodes>
              </DivAllEpisodesFav>
            ))
          )}
        </DivInEpisodes>
      </DivEpisodes>
      <FooterFavorites />
    </MainDiv>
  );
};
