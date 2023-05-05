require('dotenv').config();
const { User, Favorite } = require('../DB_connection');
const { use } = require('../utils/app');

async function postFav(req, res) {
    const { id, name, status, species, gender, origin, image, location, userId } = req.body;
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
            image,
            location,
        };
        const char = await Favorite.create(character);
        if (userId) {
            const user = await User.findByPk(userId);
            if (user) {
                await user.addFavorite(char);
            }
        }
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(404).json({ message: error });
    }

};

async function deleteFav(req, res) {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({ message: "ID not found" });
        }
        const char = await Favorite.findByPk(id);
        if (char) {
            await Favorite.destroy({
                where: {
                    id,
                },
            });
        }
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    postFav,
    deleteFav,
};