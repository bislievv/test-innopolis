import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useCustomSelector } from '../hooks/store';
import { getBeers } from '../store/features/beers';
import { Beer } from '../store/types/beers';
import ToggleFavorite from '../components/ToggleFavorite';

function Home() {
  const dispatch = useDispatch();
  const beers = useCustomSelector((state => state.beers));
  const loading = useCustomSelector((state => state.loading));

  useEffect(() => {
    dispatch(getBeers())
  }, [])

  const imageBodyTemplate = (rowData: Beer) => {
    return (
      <img
        src={rowData.image_url}
        alt={rowData.image_url}
        className="product-image"
        width={25}
      />
    );
  }

  const singleBeerLink = (rowData: Beer) => {
    return (
      <Link to={"/beers/" + rowData.id}>
        {rowData.name}
      </Link>
    );
  }

  const favorite = (rowData: Beer) => {
    return <ToggleFavorite id={rowData.id} size="30px" />
  }

  return (
    <div>
      {loading ?
        <ProgressSpinner />
        :
        <div className="card">
          <DataTable
            value={beers}
            header="Beers"
            resizableColumns
            columnResizeMode="expand"
            showGridlines
            dataKey="id"
            responsiveLayout="scroll"
            paginator
            rows={10}
          >
            <Column body={favorite} header="Favorite" />
            <Column field="name" body={singleBeerLink} header="Name" />
            <Column field="image_url" body={imageBodyTemplate} header="Image" />
          </DataTable>
        </div>
      }
    </div>
  );
}

export default Home;
