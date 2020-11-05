import axios from "axios";
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "./charactersTypes";

export const fetchCharacterRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

export const fetchCharactersSuccess = (data) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: data,
  };
};

export const fetchCharactersFailure = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const fetchCharactersData = (page, size = 20) => {
  return (dispatch) => {
    dispatch(fetchCharacterRequest());
    axios
      .get(
        `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${size}`
      )
      .then((response) => {
        // const users = response.data
        console.log(response);
        dispatch(fetchCharactersSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error));
      });
  };
};
