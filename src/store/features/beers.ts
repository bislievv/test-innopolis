import axios from "axios";
import { Dispatch } from "react";
import { beerAction, beersState } from "../types/beers";

const initialState: beersState = {
  beers: [],
  loading: false,
  error: null,
  favorites: localStorage.getItem("favoriteBeers")
    ? JSON.parse(localStorage.getItem("favoriteBeers") || "")
    : [],
};

export default function beers(
  state = initialState,
  action: beerAction
): beersState {
  switch (action.type) {
    case "beers/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "beers/fetch/fulfilled":
      return {
        ...state,
        beers: action.payload,
        loading: false,
      };
    case "beers/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "beers/favorite/fulfilled": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case "beers/deleteFavorite/fulfilled":
      return {
        ...state,
        favorites: state.favorites.filter(item => action.payload !== item),
      };
    default:
      return state;
  }
}

export const getBeers = () => {
  return async (dispatch: Dispatch<beerAction>) => {
    try {
      dispatch({ type: "beers/fetch/pending" });
      const data = await axios.get("https://api.punkapi.com/v2/beers");

      await dispatch({ type: "beers/fetch/fulfilled", payload: data.data });
    } catch (e: any) {
      dispatch({ type: "beers/fetch/rejected", error: e.toString() });
    }
  };
};
