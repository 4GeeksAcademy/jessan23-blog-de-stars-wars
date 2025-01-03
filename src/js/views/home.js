import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData();
    }, []);

    const Card = ({ item, type }) => (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button
                    className="btn btn-primary"
                    onClick={() => actions.addFavorite(item)}
                >
                    Add to Favorites
                </button>
                <a href={`/details/${type}/${item.uid}`} className="btn btn-secondary ms-2">
    				Learn more
				</a>

            </div>
        </div>
    );

    return (
        <div className="container">
            <h1>People</h1>
            <div className="d-flex overflow-auto">
                {store.people.map(item => (
                    <Card key={item.uid} item={item} type="characters" />
                ))}
            </div>
            <h1>Vehicles</h1>
            <div className="d-flex overflow-auto">
                {store.vehicles.map(item => (
                    <Card key={item.uid} item={item} type="vehicles" />
                ))}
            </div>
            <h1>Planets</h1>
            <div className="d-flex overflow-auto">
                {store.planets.map(item => (
                    <Card key={item.uid} item={item} type="planets" />
                ))}
            </div>
        </div>
    );
};
