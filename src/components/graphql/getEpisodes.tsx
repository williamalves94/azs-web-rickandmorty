import { gql } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
  query AllEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        air_date
        characters {
          id
          name
          image
          species
          status
        }
      }
    }
  }
`;
