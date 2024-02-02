// src/components/FavoriteEpisodes.js
//import React from "react";
import { EpisodesMarkFavorite } from "../episodes/EpisodesMarkFavorite";
import { HeaderFavorite } from "./header-favorites";
import { MainDiv } from "./styles-favorites";
import {
  DivEpisodesFav,
  DateAndTotalChar,
  CharDivFav,
  EmptyList,
} from "./styles-favorites";
import { FooterFavorites } from "./Footer-favorites";

export const FavoriteEpisodes = () => {
  // eslint-disable-next-line no-unused-vars
  const { isEpisodeFavorite, favoriteEpisodesData } = EpisodesMarkFavorite();

  return (
    <MainDiv>
      <HeaderFavorite />
      <DivEpisodesFav>
        <div>
          <div className="title-texts">
            <p>
              Lista de Episódios <br></br>Favoritos
            </p>
          </div>

          {favoriteEpisodesData.length === 0 ? (
            <EmptyList>
              <h1>Lista vazia</h1>
            </EmptyList>
          ) : (
            favoriteEpisodesData.map((episode) => (
              <div className="div-all" key={EpisodesMarkFavorite.id}>
                <div className="ep-name">
                  Episódio {episode.id}: {episode.name}
                </div>

                <DateAndTotalChar>
                  <div className="air-date">
                    Data de Estréia: {episode.air_date}
                  </div>
                  <div className="char-total">
                    Total de Personagens: {episode.characters.length}
                  </div>
                </DateAndTotalChar>
                <CharDivFav className="cards">
                  {episode.characters.map((character) => (
                    <div className="char-div" key={character.id}>
                      <div className="char-and-text">
                        <img className="char-image" src={character.image} />
                        <h3 className="char-name">{character.name}</h3>
                        <p className="char-status">
                          Status: {character.status}
                        </p>
                        <p className="char-species">
                          Espécie: {character.species}
                        </p>
                      </div>
                    </div>
                  ))}
                </CharDivFav>
              </div>
            ))
          )}
        </div>
      </DivEpisodesFav>
      <FooterFavorites />
    </MainDiv>
  );
};
