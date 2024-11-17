require('dotenv').config();

module.exports = {
    development: {
        mongoURI: process.env.MONGO_URI
    },
    production: {
        mongoURI: process.env.MONGO_URI
    },
    jwtSecret: process.env.JWT_SECRET,
};
