import { gql } from "@apollo/client";

//Planets
const GET_PLANETS = gql`
  query GetPlanets($pageSize: Int, $page: Int) {
    planets(pageSize: $pageSize, page: $page) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        p_id
        name
        description
        code
        picture_url
        population
        characters {
          c_id
          name
          description
          picture_url
        }
      }
    }
  }
`;
const GET_PLANET = gql`
  query GetPlanet($code: String) {
    planet(code: $code) {
      p_id
      name
      description
      code
      picture_url
      population
      characters {
        c_id
        name
      }
    }
  }
`;

//Characters
const GET_CHARACTERS = gql`
  query GetCharacters($pageSize: Int, $page: Int) {
    characters(pageSize: $pageSize, page: $page) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        c_id
        name
        description
        picture_url
        planet {
          name
        }
      }
    }
  }
`;
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
    }
  }
`;

export { GET_PLANETS, GET_PLANET, GET_CHARACTERS, GET_CHARACTER };
