const axios = require('axios');
require('dotenv').config();
const URL = process.env.SERVER_URL;

let myFavorites = [];

const postFav = (req, res) => {
    const { id, name, status, species, gender, origin, image } = req.body;
    try {
        if (!id || !name || !status || !species || !gender || !origin || !image) {
            return res.status(404).send('Character not found')
        }
        const character = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        }
        myFavorites.push(character);
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(500).send(error.message);
    }

};

const deleteFav = (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).send('ID not found')
        }
        const favoritesList = myFavorites.filter((character) => {
            character.id !== Number(id)
        });
        myFavorites = favoritesList;
        res.status(200).json(myFavorites);  
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    postFav,
    deleteFav
};