import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query Chatacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        count
        pages
      }
      results {
        image
        name
        species
        status
      }
    }
  }
`;
