export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
}
export interface beersState {
  beers: Beer[];
  loading: boolean;
  error: string | null;
  favorites: string[];
}

export enum userActionTypes {
  FETCH_BEERS_FULFILLED = "beers/fetch/fulfilled",
  FETCH_BEERS_REJECTED = "beers/fetch/rejected",
  FETCH_BEERS_PENDING = "beers/fetch/pending",
  ADD_FAVORITE_BEER = "beers/addFavoriteBeer",
  DELETE_FAVORITE_BEER = "beers/deleteFavoriteBeer",
}

interface getBeers {
  type: userActionTypes.FETCH_BEERS_FULFILLED;
  payload: Beer[];
}

interface getBeersRej {
  type: userActionTypes.FETCH_BEERS_REJECTED;
  error: string;
}

interface getBeersPen {
  type: userActionTypes.FETCH_BEERS_PENDING;
}

interface addFavorite {
  type: userActionTypes.ADD_FAVORITE_BEER;
  payload: string;
}

interface deleteFavorite {
  type: userActionTypes.DELETE_FAVORITE_BEER;
  payload: string;
}

export type beerAction =
  | getBeers
  | addFavorite
  | deleteFavorite
  | getBeersRej
  | getBeersPen;
