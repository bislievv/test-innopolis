import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../hooks/store';
import FavoriteIcon from "./FavoriteIcon";

interface Props {
  size: string,
  id: number
}

function ToggleFavorite({ size, id }: Props) {
  const dispatch = useDispatch();

  const favorites = useCustomSelector((state => state.favorites));
  const fave = favorites.find((beerId) => Number(beerId) === id);

  useEffect(() => {
    localStorage.setItem("favoriteBeers", JSON.stringify(favorites));
  }, [favorites])

  const toggleFavorite = () => {
    const type = !fave ? "beers/addFavoriteBeer" : "beers/deleteFavoriteBeer";

    dispatch({ type, payload: id })
  }

  return (
      <FavoriteIcon
          size={size}
          onClick={toggleFavorite}
          isFavorite={!!fave}
      />
  );
}

export default ToggleFavorite;
