import { useMutation, useQuery } from "@apollo/client";
import { CREATE_CHARACTER, CREATE_PLANET } from "./mutations";
import {
  GET_PLANETS,
  GET_PLANET,
  GET_CHARACTER,
  GET_CHARACTERS,
} from "./queries";

//Planets
const useGetPlanets = (pageSize, page) => {
  const { loading, data, error } = useQuery(GET_PLANETS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });
  return {
    loading,
    data,
    error,
  };
};
const useGetPlanet = (code) => {
  const { loading, data, error } = useQuery(GET_PLANET, {
    variables: {
      code: code,
    },
  });
  return {
    loading,
    data,
    error,
  };
};

const useCreatePlanet = ({ name, description, code, picture_url }) => {
  const [createPlanet, { loading, data, error }] = useMutation(CREATE_PLANET);
  createPlanet({
    variables: {
      planetInfo: {
        name,
        description,
        code,
        picture_url,
      },
    },
  });
  return {
    loading,
    data,
    error,
  };
};

//Character
const useGetCharacters = (pageSize, page) => {
  const { loading, data, error } = useQuery(GET_CHARACTERS, {
    variables: {
      pageSize: pageSize,
      page: page,
    },
  });
  return {
    loading,
    data,
    error,
  };
};
const useGetCharacter = (id) => {
  const { loading, data, error } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });
  return {
    loading,
    data,
    error,
  };
};

const useCreateCharacter = ({ name, planet, picture_url, description }) => {
  const [createCharacter, { loading, data, error }] =
    useMutation(CREATE_CHARACTER);
  createCharacter({
    variables: {
      characterInfo: {
        name,
        planet,
        picture_url,
        description,
      },
    },
  });
  return {
    loading,
    data,
    error,
  };
};

export {
  useGetPlanets,
  useGetPlanet,
  useCreatePlanet,
  useGetCharacters,
  useGetCharacter,
  useCreateCharacter,
};
