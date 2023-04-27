import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./types";

export const addFav = (character) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:3001/rickandmorty/favorites', character);
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
        } catch (error) {
            console.log('ERR: Failed to add character', error)
        }
    }
};

export const removeFav = (id) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log('ERR: Failed to delete character', error);
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    };
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};

export const resetCards = () => {
    return {
        type: RESET
    };
};