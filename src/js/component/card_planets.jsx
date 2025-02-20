import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardPlanets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePlanets();
    }, []);

    const planetItems = store.planets.map((item, index) => (
        <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
                <div className="card mb-5">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
                        className="card-img-top"
                        alt={item.name}
                    />
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p className="card-text fw-light fs-4">
                            Population: {item.population}<br />
                            Terrain: {item.terrain}<br />
                        </p>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start">
                                <Link type="button" className="btn btn-outline-primary" to={"/planetProfile/" + index}>Learn More!</Link>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button
                                    type="button"
                                    className={`btn ${store.favorites.some(favorite => favorite.name === item.name) ? "btn-warning" : "btn-outline-warning"}`}
                                    onClick={() => {
                                        const isFavorite = store.favorites.some(favorite => favorite.name === item.name);
                                        isFavorite ? actions.deleteFavorite(item) : actions.saveFavorite(item);
                                    }}
                                >
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    ));

    return (
        <div className="galaxyBackground">
            <p className="text-center text-white font-monospace display-3 fw-light">Planets</p>
            {planetItems.length > 0 ? (
                <Carousel>
                    {planetItems}
                </Carousel>
            ) : (
                <p className="text-center text-white">No planets available</p>
            )}
        </div>
    );
};
