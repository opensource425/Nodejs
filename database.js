const mongoose = require("mongoose");
const config = require("./config");
const logger = require('../utils/logger');

mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log('Mongoose connected successfully');
    })
    .catch((error) => {
        console.error(`Mongoose connection error: ${error.message}`);
        console.error(error);
        logger.error(error.message);
        process.exit(1);
    });

function monitorConnection() {
    const db = mongoose.connection;

    db.on('disconnected', () => {
        console.warn('Mongoose connection error: Mongoose disconnected');
        logger.error('Mongoose disconnected');
    });

    db.on('error', (err) => {
        console.error(`Mongoose connection error: ${err.message}`);
        console.error(err);
        logger.error(err.message);
        process.exit(1);
    });

    db.on('reconnected', () => {
        console.log('Mongoose reconnected succesfully');
        logger.info('Mongoose reconnected succesfully');
    });

    db.on('reconnectFailed', () => {
        console.error('Mongoose connection error: Mongoose failed to reconnect to the database.');
        logger.info('Mongoose failed to reconnect to the database');
    });
}

monitorConnection();
