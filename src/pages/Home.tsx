import { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch } from 'react-redux';
import { getBeers } from '../store/features/beers';
import { useCustomSelector } from '../hooks/store';
import { Beer } from '../store/types/beers';
import { Link } from 'react-router-dom';
import ToogleFavorite from '../components/ToogleFavorite';
import { ProgressSpinner } from 'primereact/progressspinner';

function Home() {
  const dispatch = useDispatch();
  const beers = useCustomSelector((state => state.beers));
  const loading = useCustomSelector((state => state.loading));

  useEffect(() => {
    dispatch(getBeers())
  }, [])

  const imageBodyTemplate = (rowData: Beer) => {
    return <img src={rowData.image_url} alt={rowData.image_url} className="product-image" width={25} />;
  }

  const singleBeerLink = (rowData: Beer) => {
    return <Link to={`/beers/${rowData.id}`}>{rowData.name}</Link>
  }

  const favorite = (rowData: Beer) => {
    return <ToogleFavorite id={rowData.id} size="30px" />
  }

  return (
    <div>
      {loading ?
        <ProgressSpinner />
        :
        <div className="card">
          <DataTable value={beers} header="Beers" resizableColumns columnResizeMode="expand" showGridlines dataKey="id" responsiveLayout="scroll">
            <Column body={favorite} header="Favorite"></Column>
            <Column field="name" body={singleBeerLink} header="Name"></Column>
            <Column field="image_url" body={imageBodyTemplate} header="Image"></Column>
          </DataTable>
        </div>
      }
    </div>
  );
}

export default Home;