const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
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
