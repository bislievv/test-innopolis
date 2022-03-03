import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCustomSelector } from '../hooks/store';

interface Props {
  size: string,
  id: number
}

function ToogleFavorite({ size, id }: Props) {
  const dispatch = useDispatch();
  const favorites = useCustomSelector((state => state.favorites));

  useEffect(() => {
    localStorage.setItem("favoriteBeers", JSON.stringify(favorites));
  }, [favorites])

  const toogleFavorite = () => {
    const fave = favorites.find((item) => Number(item) === id)
    if (!fave) {
      dispatch({ type: "beers/favorite/fulfilled", payload: id })
    } else {
      dispatch({ type: "beers/deleteFavorite/fulfilled", payload: id })
    }
  }

  const fave = favorites.find((item) => Number(item) === id)

  return (
    <i className={`pi ${fave ? "pi-star-fill" : "pi-star"}`} style={{ cursor: "pointer", fontSize: `${size}` }} onClick={toogleFavorite}></i>
  );
}

export default ToogleFavorite;