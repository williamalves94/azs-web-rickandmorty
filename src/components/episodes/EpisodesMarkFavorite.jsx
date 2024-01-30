import { useState, useEffect } from "react";

const EpisodesMarkFavorite = () => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const storeFavorites = localStorage.getItem("favoriteEpisodes");
    if (storeFavorites) {
      setFavoriteEpisodes(JSON.parse(storeFavorites));
    }
  }, []);

  const isEpisodeFavorite = (episodeId) =>
    favoriteEpisodes.some((favEpisode) => favEpisode.id === episodeId);

  //const isEpisodeFavorite = (episodeId) => favoriteEpisodes.includes(episodeId);

  //favoritando e desfavoritando episódio
  const handleMarkAsFavorite = (episode) => {
    if (isEpisodeFavorite(episode.id)) {
      setFavoriteEpisodes((prevFavoriteEpisodes) =>
        prevFavoriteEpisodes.filter(
          (favEpisode) => favEpisode.id !== episode.id
        )
      );
    } else {
      setFavoriteEpisodes((prevFavoriteEpisodes) => [
        ...prevFavoriteEpisodes,
        episode,
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteEpisodes", JSON.stringify(favoriteEpisodes));
  }, [favoriteEpisodes]);

  return {
    showFavorites: showFavorites,
    handleMarkAsFavorite,
    isEpisodeFavorite,
    favoriteEpisodesData: favoriteEpisodes,
  };
};

export { EpisodesMarkFavorite };
