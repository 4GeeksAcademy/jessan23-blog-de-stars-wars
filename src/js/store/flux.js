import { Await } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            characters: [],
            favorites: [],
        },
        actions: {
            loadPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error loading people:", error);
                }
            },

            loadVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error loading vehicles:", error);
                }
            },

            loadPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error loading planets:", error);
                }
            },

            loadData: async () => {
                const actions = getActions();
                await Promise.all([
                    actions.loadPeople(),
                    actions.loadVehicles(),
                    actions.loadPlanets(),
                ]);
            },

            getCharacters: async (id) => {
                try {
                    const response = await fetch(`https://swapi.tech/api/people/${id}`);
                    const data = await response.json();
                    setStore({ characters: data.result });
                } catch (error) {
                    console.error("Error fetching character:", error);
                }
            },

            notificacion: () => {
                alert("Notificación enviada");
            },

            seguir: () => {
                let actions = getActions();
                let store = getStore();
                console.log("ESTÁS SIGUIENDO AL USUARIO " + store.user);
                actions.notificacion();
            },

            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            removeFavorite: (uid) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.uid !== uid),
                });
            },
        },
    };
};

export default getState;
