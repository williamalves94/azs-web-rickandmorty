import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query AllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        image
        name
        species
        status
      }
    }
  }
`;
