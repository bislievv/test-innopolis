import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleBeerPage from './pages/SingleBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
