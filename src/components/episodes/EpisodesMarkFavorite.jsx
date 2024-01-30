import { useState } from "react";

const EpisodesMarkFavorite = () => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [showFavorites, setShowFavorites] = useState(false);

  const isEpisodeFavorite = (episodeId) => favoriteEpisodes.includes(episodeId);
  //favoritando e desfavoritando episódio
  const handleMarkAsFavorite = (episodeId) => {
    if (isEpisodeFavorite(episodeId)) {
      setFavoriteEpisodes((prevFavoriteEpisodes) =>
        prevFavoriteEpisodes.filter((id) => id !== episodeId)
      );
    } else {
      setFavoriteEpisodes((prevFavoriteEpisodes) => [
        ...prevFavoriteEpisodes,
        episodeId,
      ]);
    }
  };

  return {
    favoriteEpisodes,
    showFavorites,
    handleMarkAsFavorite,
    isEpisodeFavorite,
  };
};

export { EpisodesMarkFavorite };
