const winston = require('winston');
const logConfiguration = {
    'transports': [
        new winston.transports.Console({
            level: 'warn'
        })
    ]
};
const logger = winston.createLogger(logConfiguration);
// Log a message
logger.log({
    // Message to be logged
    message: 'Hello, Winston!',

    // Level of the message logging
    level: 'warn'
});
// Log a message
// logger.warn('Hello, Winston!');