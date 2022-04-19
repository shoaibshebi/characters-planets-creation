const { gql } = require("apollo-server-koa");

const types = gql`
  #Planets
  type Planet {
    p_id: ID
    name: String!
    description: String!
    code: String!
    picture_url: String!
    population: Int
    characters: [Character]
  }
  type CreatePlanetResponse {
    p_id: ID!
    name: String!
    description: String
    code: String
    picture_url: String
    population: Int
  }
  type Pagination {
    total: Int
    page: Int
    pageSize: Int
  }
  type Planets {
    pagination: Pagination
    nodes: [Planet]
  }
  input PlanetInput {
    name: String!
    description: String!
    code: String!
    picture_url: String!
  }

  #Characters
  type Character {
    c_id: Int
    name: String!
    description: String!
    picture_url: String!
    planet: Planet
  }
  type CreateCharacterResponse {
    c_id: Int!
    name: String!
    description: String
    picture_url: String
  }
  type Characters {
    pagination: Pagination
    nodes: [Character]
  }
  input CharacterInput {
    name: String!
    description: String!
    planet: String!
    picture_url: String
  }

  type Query {
    #Planets
    planets(pageSize: Int, page: Int): Planets
    planet(code: String): Planet

    #Characters
    characters(pageSize: Int, page: Int): Characters
    character(id: Int): Character
  }
  type Mutation {
    #Planets
    createPlanet(planetInfo: PlanetInput): CreatePlanetResponse

    #Characters
    createCharacter(characterInfo: CharacterInput): CreateCharacterResponse
  }
`;

module.exports = types;
