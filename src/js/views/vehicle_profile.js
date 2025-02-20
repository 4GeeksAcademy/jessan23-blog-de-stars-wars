import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleProfile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.vehicles);

	return (
		<>
			<div className="row d-flex align-items-center justify-content-center mx-1 galaxyBackground">
				<div className="col-lg-6 col-11 d-flex justify-content-center">
					<img
						src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.theid) + 1}.jpg`}
						onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available"; }}
						className="card-img-top"

					/>
				</div>
				<div className="col-lg-6 col-11 text-white text-center d-flex align-items-center">

					<p className="fs-5"><h1 className="text-warning" style={{ fontSize: "60px" }}>Description</h1><br></br>The {store.vehicles[params.theid].name} is a {store.vehicles[params.theid].vehicle_class} vehicle designed for specific purposes, with a model known as {store.vehicles[params.theid].model}. Manufactured by {store.vehicles[params.theid].manufacturer}, this vehicle reflects advanced engineering and functionality. Its estimated cost is {store.vehicles[params.theid].cost_in_credits} credits, making it a significant investment for its capabilities.

						Measuring {store.vehicles[params.theid].length} meters in length, the {store.vehicles[params.theid].name} achieves a maximum atmospheric speed of {store.vehicles[params.theid].max_atmosphering_speed} km/h. It is operated by a crew of {store.vehicles[params.theid].crew} and can accommodate up to {store.vehicles[params.theid].passengers} passengers, offering both operational efficiency and space for transport.

						With a cargo capacity of {store.vehicles[params.theid].cargo_capacity} kilograms and consumables lasting for {store.vehicles[params.theid].consumables}, it is well-suited for long-term operations in challenging environments. The vehicle's specifications were initially documented on {store.vehicles[params.theid].created} and later updated on {store.vehicles[params.theid].edited}, showcasing its enduring relevance and utility.

						Whether used for exploration, transport, or industrial tasks, the {store.vehicles[params.theid].name} exemplifies reliability and functionality in its class.</p>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="row mx-1 galaxyBackground">
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Name</p>
					<h1 className="text-white">{store.vehicles[params.theid].name}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Model</p>
					<h1 className="text-white">{store.vehicles[params.theid].model}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Passengers</p>
					<h1 className="text-white">{store.vehicles[params.theid].passengers}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Length</p>
					<h1 className="text-white">{store.vehicles[params.theid].length}</h1>

				</div>
				<div className="col-lg-2 col-6 border-end text-center">
					<p className="text-warning fs-5">Cargo Capacity</p>
					<h1 className="text-white">{store.vehicles[params.theid].cargo_capacity}</h1>

				</div>
				<div className="col-lg-2 col-6 text-center">
					<p className="text-warning fs-5">Vehicle Class</p>
					<h1 className="text-white">{store.vehicles[params.theid].vehicle_class}</h1>
				</div>

			</div>
			<hr className="border border-light border-3" />
			<div className="d-flex justify-content-start galaxyBackground">
				<Link type="button" className="btn btn-warning ms-2 mt-4" to={"/"}>Go Back</Link>
			</div>


		</>
	);
};

VehicleProfile.propTypes = {
	match: PropTypes.object
};
