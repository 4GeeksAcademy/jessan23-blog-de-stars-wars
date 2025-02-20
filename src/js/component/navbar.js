


                import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		store.favorites;
	}, []);


	return (
		<nav className="navbar navbar-light ps-3 galaxyBackground">
			<Link to="/">
				<img src="https://infonegocios.info/content/images/2023/10/24/415577/conversions/star-wars-impactmkt-medium-size.jpg" alt="" width="200" height="100" />
			</Link>
			<div className="ml-auto pe-3">
				<div class="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="btnGroupDrop1">
						{store.favorites.length === 0 ? (
							<li className="task-item">There're not favorites</li>
						) : (
							store.favorites.map((item) => (
								<li class="d-flex" key={item.id}><a class="dropdown-item" href="#">{item.name}</a><button type="button" class="btn btn-light" onClick={() => { actions.deleteFavorite(item) }}><i class="fa-solid fa-trash"></i></button></li>
							))
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
