import { useParams } from 'react-router-dom';
import { useCustomSelector } from '../hooks/store';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBeers } from '../store/features/beers';
import "primeflex/primeflex.css";
import ToggleFavorite from '../components/ToggleFavorite';
import BeerInfo from "../components/BeerInfo";

function SingleBeerPage() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const beers = useCustomSelector((state => state.beers))
  const currentBeer = beers.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getBeers())
  }, []);

  return currentBeer ? (
    <>
      <div className="col-12 text-left flex">
        <div className="col-6 border-solid border-300 border-round">
          <BeerInfo beer={currentBeer} />
        </div>
        <div className="col-4 flex justify-content-center h-1rem">
          <ToggleFavorite id={Number(id)} size="50px" />
        </div>
        <div className="col-2 flex justify-content-end">
          <img
            src={currentBeer.image_url}
            alt="beer"
            width={150}
          />
        </div>
      </div>
    </>
  ) : <ProgressSpinner />;
}

export default SingleBeerPage;
