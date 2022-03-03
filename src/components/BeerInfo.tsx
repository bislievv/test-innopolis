import { Beer } from "../store/types/beers";

const BeerInfo = ({ beer }: { beer: Beer }) => {
    return (
        <>
            <div className="text-6xl text-primary font-bold mb-3">{beer.name}</div>
            <p className="mt-0 mb-4 text-700 line-height-3">{beer.description}</p>
        </>
    );
};

export default BeerInfo;
