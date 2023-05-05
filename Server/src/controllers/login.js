require('dotenv').config();
const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;
const { User } = require('../DB_connection');

const login = (req, res) => {
    const { email, password } = req.query;

    try {
        if (!email || !password) {
            return res.status(500).json({message: 'Check email and/or password'});
        }
    
        if (email === DB_EMAIL && password === DB_PASSWORD) {
            res.status(200).json({access: true})
        } else {
            res.status(200).json({access: false})
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }

};

module.exports = {
    login
};