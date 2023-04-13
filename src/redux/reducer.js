import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            };
        case REMOVE_FAV:
            const favorites = state.allCharacters.filter((character) => character.id !== payload)
            return {
                ...state,
                myFavorites: favorites,
                allCharacters: favorites
            };
        case FILTER:
            const filterCharacters = state.allCharacters.filter((character) => character.gender === payload)
            return {
                ...state,
                myFavorites: filterCharacters
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allCharacters]
            };
        case ORDER:
            const filterOrder = state.allCharacters.sort((a, b) => {
                if (a.id > b.id) {
                    return 'Ascendente' === payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return 'Descendente' === payload ? 1 : -1
                }
                return 0;
            });
            return {
                ...state,
                myFavorites: filterOrder
            };
    
        default:
            return state;
    };
};