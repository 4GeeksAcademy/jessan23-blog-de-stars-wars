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
			vehicles: [],
			planets: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			loadData: async () => {
                try {
                    const urls = [
                        "https://www.swapi.tech/api/people",
                        "https://www.swapi.tech/api/vehicles",
                        "https://www.swapi.tech/api/planets"
                    ];
                    const [people, vehicles, planets] = await Promise.all(
                        urls.map(url => fetch(url).then(res => res.json()))
                    );

                    setStore({
                        people: people.results,
                        vehicles: vehicles.results,
                        planets: planets.results,
                    });
                } catch (error) {
                    console.error("Error loading data:", error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: (uid) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav.uid !== uid) });
            },
        },
    };

};
	
export default getState;
