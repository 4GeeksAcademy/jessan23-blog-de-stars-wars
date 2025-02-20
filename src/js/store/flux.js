const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			favorites: [],
			planets: [],
			vehicles: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomePeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						const peoplePromises = data.results.map(person =>
							fetch(`https://www.swapi.tech/api/people/${person.uid}`)
								.then(res => res.json())
								.then(data => ({
									id: person.uid,
									name: person.name,
									gender: data.result.properties.gender,
									hair_color: data.result.properties.hair_color,
									eye_color: data.result.properties.eye_color,
									description: data.result.description,
									height: data.result.properties.height,
									skin_color: data.result.properties.skin_color,
									birth_year: data.result.properties.birth_year,
									mass: data.result.properties.mass,
									homeworld: data.result.properties.homeworld,
									created: data.result.properties.created,
									edited: data.result.properties.edited,
								}))
						);
						return Promise.all(peoplePromises);
					})
					// .then(data => console.log(data))
					.then(data => setStore({ people: data }))
					.catch(error => console.error(error));

			},

			saveFavorite: (item) => {
				const store = getStore();
				const favorite = {name: item.name};
				setStore({ favorites: [...store.favorites, favorite] });
			},

			deleteFavorite: (item) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(favorite => favorite.name !== item.name);
				setStore({ favorites: updatedFavorites });
			},

			loadSomePlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(response => response.json())
					// .then(data => console.log(data.results))
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error))
			},

			loadSomeVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
					.then(response => response.json())
					// .then(data => console.log(data.results))
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => console.log(error))
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
