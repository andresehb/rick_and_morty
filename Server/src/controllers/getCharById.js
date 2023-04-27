const axios = require('axios');
require('dotenv').config();
const URL = process.env.SERVER_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({ id, status, name, species, origin, image, gender }) => {
        if (name) {
            const character = {
                id,
                name,
                species,
                origin,
                image,
                gender,
                status
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found')
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
};