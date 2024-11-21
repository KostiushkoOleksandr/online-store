require('dotenv').config();

const models = require('./models/models');
const sequelize = require('./db');
const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
    } catch (e) {
        console.error(e);
    }
}

start()

