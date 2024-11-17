const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const UserInventory = sequelize.define('UserInventory', {
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        share_id: { type: DataTypes.INTEGER, allowNull: false },
        ownership_percentage: { type: DataTypes.FLOAT, allowNull: false },
    });
    return UserInventory;
};
