import { useParams } from 'react-router-dom';
import { useCustomSelector } from '../hooks/store';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBeers } from '../store/features/beers';
import "primeflex/primeflex.css";
import ToogleFavorite from '../components/ToogleFavorite';

function SingleBeerPage() {
  const { id } = useParams();
  const dispatch = useDispatch()

  const beers = useCustomSelector((state => state.beers))
  const beer = beers.find(item => item.id === Number(id))

  useEffect(() => { dispatch(getBeers()) }, []);

  return beer ? (
    <>
      <div className="col-12 text-left flex">
        <div className="col-6">
          <div className="text-6xl text-primary font-bold mb-3">{beer.name}</div>
          <p className="mt-0 mb-4 text-700 line-height-3">{beer.description}</p>
        </div>
        <div className="col-6">
          <ToogleFavorite id={Number(id)} size="50px" />
          <img src={beer.image_url} alt="beer" className="ml-auto block" width={150} />
        </div>
      </div>
    </>
  ) : <ProgressSpinner />;
}

export default SingleBeerPage;