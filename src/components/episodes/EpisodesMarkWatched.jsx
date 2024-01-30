import { useState } from "react";
//marcando e desmarcando como visto episódio

const EpisodesMarkWatched = () => {
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  const isEpisodeWatched = (episodeId) => watchedEpisodes.includes(episodeId);

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

  return {
    watchedEpisodes,
    setWatchedEpisodes,
    handleMarkAsWatched,
    isEpisodeWatched,
  };
};

export { EpisodesMarkWatched };
