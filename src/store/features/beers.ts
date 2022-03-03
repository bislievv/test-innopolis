import axios from "axios";
import { Dispatch } from "react";
import { beerAction, beersState, userActionTypes } from "../types/beers";

const favoriteBeersLS = localStorage.getItem("favoriteBeers");

const initialState: beersState = {
  beers: [],
  loading: false,
  error: null,
  favorites: favoriteBeersLS ? JSON.parse(favoriteBeersLS) : [],
};

export default function beers(
  state = initialState,
  action: beerAction
): beersState {
  switch (action.type) {
    case userActionTypes.FETCH_BEERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.FETCH_BEERS_FULFILLED:
      return {
        ...state,
        beers: action.payload,
        loading: false,
      };
    case userActionTypes.FETCH_BEERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case userActionTypes.ADD_FAVORITE_BEER: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case userActionTypes.DELETE_FAVORITE_BEER:
      return {
        ...state,
        favorites: state.favorites.filter(
          favoriteId => action.payload !== favoriteId
        ),
      };
    default:
      return state;
  }
}

export const getBeers = () => {
  return async (dispatch: Dispatch<beerAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_BEERS_PENDING });
      const { data } = await axios.get("https://api.punkapi.com/v2/beers");

      dispatch({ type: userActionTypes.FETCH_BEERS_FULFILLED, payload: data });
    } catch (e: any) {
      dispatch({
        type: userActionTypes.FETCH_BEERS_REJECTED,
        error: e.toString(),
      });
    }
  };
};
