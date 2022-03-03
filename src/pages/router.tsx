import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Home";
import SingleBeerPage from "./SingleBeerPage";

const routes = [
    {
        path: "/beers",
        element: <Home />
    },
    {
        path: "/beers/:id",
        element: <SingleBeerPage />
    },
    {
        path: "*",
        element: <Navigate to="/beers" />
    }
]

const Router = () => {
    return (
        <Routes>
            {routes.map(({ path, element }) =>
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            )}
        </Routes>
    );
};

export default Router;
