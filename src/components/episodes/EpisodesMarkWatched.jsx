import { useEffect, useState } from "react";
//marcando e desmarcando como visto episódio

const EpisodesMarkWatched = () => {
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  useEffect(() => {
    const storeWatched = localStorage.getItem("watchedEpisodes");
    if (storeWatched) {
      setWatchedEpisodes(JSON.parse(storeWatched));
    }
  }, []);

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

  useEffect(() => {
    localStorage.setItem("watchedEpisodes", JSON.stringify(watchedEpisodes));
  }, [watchedEpisodes]);

  return {
    watchedEpisodes,
    setWatchedEpisodes,
    handleMarkAsWatched,
    isEpisodeWatched,
  };
};

export { EpisodesMarkWatched };
