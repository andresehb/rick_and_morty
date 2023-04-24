const axios = require('axios');
require('dotenv');
const URL = process.env.SERVER_URL
const STATUS_OK = 200;
const STATUS_ERROR = 500;

const getCharById = (req, res) => {
    const { id } = req.params;
    try {
        axios.get(`${URL}${id}`).then(({ data }) => {
            if (data) {
                const character = {
                    id: data.id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin.name,
                    image: data.image,
                    gender: data.gender
                }
                return res.status(STATUS_OK).json(character)
            }
        })
    } catch (error) {
        return res.status(STATUS_ERROR).json({ message: error })
    }
};

module.exports = {
    getCharById
};