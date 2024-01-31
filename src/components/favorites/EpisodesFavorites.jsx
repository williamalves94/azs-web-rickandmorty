// src/components/FavoriteEpisodes.js
import React from "react";
import { EpisodesMarkFavorite } from "../episodes/EpisodesMarkFavorite";
import { HeaderFavorite } from "./header-favorites";

export const FavoriteEpisodes = () => {
  const { isEpisodeFavorite, favoriteEpisodesData } = EpisodesMarkFavorite();
  return (
    <div>
      <HeaderFavorite />
      {favoriteEpisodesData.map((episode) => (
        <div key={EpisodesMarkFavorite.id}>
          <p>Episodios Favoritos</p>
          <div>Episodio: {episode.id}</div>
          <div>
            {episode.characters.map((character) => (
              <div key={character.id}>
                <img src={character.image} />
                <p>{character.name}</p>
                <p>Status: {character.status}</p>
                <p>Espécie: {character.species}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
