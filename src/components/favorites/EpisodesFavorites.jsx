// src/components/FavoriteEpisodes.js
import React from "react";
import { EpisodesMarkFavorite } from "../episodes/EpisodesMarkFavorite";

export const FavoriteEpisodes = () => {
  const { isEpisodeFavorite, favoriteEpisodesData } = EpisodesMarkFavorite();
  return (
    <div>
      <h1>Episódios Favoritados</h1>
      <div>
        {favoriteEpisodesData.map((episode) => (
          <div key={episode.id}>
            Episódio {episode.id}: {episode.name} - {episode.image}
            {episode.air_date} - Total de Personagens:{" "}
            {episode.characters.length}
          </div>
        ))}
      </div>
    </div>
  );
};
