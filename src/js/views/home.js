import React from "react";
import "../../styles/home.css";
import { CardPeople } from "../component/card_people.jsx";
import { CardPlanets } from "../component/card_planets.jsx";
import { CardVehicles } from "../component/card_vehicles.jsx";

export const Home = () => (
	<div className="text-center">
		<CardPeople />
		<CardPlanets />
		<CardVehicles />
	</div>
);