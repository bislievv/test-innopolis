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

interface getBeers {
  type: "beers/fetch/fulfilled";
  payload: Beer[];
}

interface getBeersRej {
  type: "beers/fetch/rejected";
  error: string;
}

interface getBeersPen {
  type: "beers/fetch/pending";
}

interface addFavorite {
  type: "beers/favorite/fulfilled";
  payload: string;
}

interface deleteFavorite {
  type: "beers/deleteFavorite/fulfilled";
  payload: string;
}

export type beerAction =
  | getBeers
  | addFavorite
  | deleteFavorite
  | getBeersRej
  | getBeersPen;
