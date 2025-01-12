import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (actions.loadData) {
            actions.loadData(); 
        }
    }, [actions]);

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

            {store.people.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="card-container">
                    {store.people.map(item => (
                        <Card key={item.uid} item={item} type={"people"} />
                    ))}
                </div>
            )}

            <h1>Vehicles</h1>
            {store.vehicles.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="card-container">
                    {store.vehicles.map(item => (
                        <Card key={item.uid} item={item} type="vehicles" />
                    ))}
                </div>
            )}

            <h1>Planets</h1>
            {store.planets.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="card-container">
                    {store.planets.map(item => (
                        <Card key={item.uid} item={item} type="planets" />
                    ))}
                </div>
            )}
        </div>
    );
};
