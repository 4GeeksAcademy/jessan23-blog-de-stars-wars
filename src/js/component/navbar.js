import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark"> 
            <div className="container">
                <a className="navbar-brand" href="/">Star Wars</a>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites ({store.favorites.length})
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.map((fav, index) => (
                            <li key={index}>
                                <span className="dropdown-item">
                                    {fav.name}
                                    <button
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => actions.removeFavorite(fav.uid)}
                                    >
                                        x
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
