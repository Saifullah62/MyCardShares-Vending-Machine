const { Sequelize } = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

// Import all models here
const User = require('./user')(sequelize);
const ShareInventory = require('./shareInventory')(sequelize);
const UserInventory = require('./userInventory')(sequelize);
const Transaction = require('./transaction')(sequelize);

// Export sequelize and models for use
module.exports = {
    sequelize,
    User,
    ShareInventory,
    UserInventory,
    Transaction
};
