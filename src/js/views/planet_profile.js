import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planets);

	return (
		<>
			<div className="row d-flex align-items-center justify-content-center mx-1 galaxyBackground">
				<div className="col-lg-6 col-11 d-flex justify-content-center">
					<img
						src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.theid) + 1}.jpg`}
						onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
						className="card-img-top"

					/>
				</div>
				<div className="col-lg-6 col-11 text-white text-center d-flex align-items-center">

					<p className="fs-5"><h1 className="text-warning" style={{ fontSize: "60px" }}>Description</h1><br></br>{store.planets[params.theid].name} is a unique celestial body with a rotation period of {store.planets[params.theid].rotation_period} hours and an orbital period of {store.planets[params.theid].orbital_period} days. It spans a diameter of {store.planets[params.theid].diameter} kilometers, showcasing a diverse environment characterized by a {store.planets[params.theid].terrain} terrain and a {store.planets[params.theid].climate} climate.
						With gravity measured at {store.planets[params.theid].gravity}, it offers a habitable environment for its inhabitants, though water covers only {store.planets[params.theid].surface_water}% of its surface, making it a scarce resource. The planet supports a population of approximately {store.planets[params.theid].population}, reflecting the adaptability of life in its conditions.
						The planet's data was officially recorded on {store.planets[params.theid].created} and last updated on {store.planets[params.theid].edited}, highlighting its significance in interstellar mappings and studies. {store.planets[params.theid].name} stands out for its distinct ecological and geological features, making it a fascinating destination or topic of exploration.</p>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="row mx-1 galaxyBackground">
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Name</p>
					<h1 className="text-white">{store.planets[params.theid].name}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Diameter</p>
					<h1 className="text-white">{store.planets[params.theid].diameter}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">climate</p>
					<h1 className="text-white">{store.planets[params.theid].climate}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Gravity</p>
					<h1 className="text-white">{store.planets[params.theid].gravity}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Terrain</p>
					<h1 className="text-white">{store.planets[params.theid].terrain}</h1>

				</div>
				<div className="col-lg-2 col-6 text-center">
					<p className="text-warning fs-5">Rotation Period</p>
					<h1 className="text-white">{store.planets[params.theid].rotation_period}</h1>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="d-flex justify-content-start galaxyBackground">
				<Link type="button" className="btn btn-warning ms-2 mt-4" to={"/"}>Go Back</Link>
			</div>


		</>
	);
};

PlanetProfile.propTypes = {
	match: PropTypes.object
};
