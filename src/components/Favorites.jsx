import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, orderCards, filterCards, resetCards } from "../redux/actions/actions";
import './Favorites.css';

export default function Favorites({ onClose }) {

    const { myFavorites } = useSelector((state) => state);

    const dispatch = useDispatch();

    const closeFavorites = (id) => {
        onClose(id)
        dispatch(removeFav(id))
    };

    const handleOrder = (event) => {
        event.preventDefault()
        const { value } = event.target
        dispatch(orderCards(value))
    };

    const handleFilter = (event) => {
        event.preventDefault()
        const { value } = event.target
        dispatch(filterCards(value))
    };

    const handleReset = () => {
        dispatch(resetCards())
    }

    return (
        <div>
            <select onChange={handleOrder} name="order" defaultValue={'DEFAULT'}>
                <option value={'DEFAULT'} disabled>Select Order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter} name="filter" defaultValue={'DEFAULT'}>
                <option value={'DEFAULT'} disabled>Select Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <button className="reset-btn" onClick={handleReset}>Reset</button>
            {
                myFavorites && myFavorites.map((element, index) => {
                    return (
                       <Card
                          key={index}
                          id={element.id}
                          name={element.name}
                          status={element.status}
                          species={element.species}
                          gender={element.gender}
                          origin={element.origin.name}
                          image={element.image}
                          onClose={() => closeFavorites(element.id)}
                       />
                    )
                 })
            }
        </div>
    )
};