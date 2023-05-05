const axios = require('axios');
require('dotenv').config();
const URL = process.env.SERVER_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

async function getCharById(req, res) {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}${id}`);
        if (data.name) {
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin?.name,
                image: data.image,
                gender: data.gender,
                location: data.location?.name,
            };
            return res.status(200).json(character);
        } else {
            res.status(404).json({ message: "Character not found" });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getCharById,
};