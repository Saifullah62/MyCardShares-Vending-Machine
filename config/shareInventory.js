const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ShareInventory = sequelize.define('ShareInventory', {
        card_name: { type: DataTypes.STRING, allowNull: false },
        share_percentage: { type: DataTypes.FLOAT, allowNull: false },
        market_value: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        tier: { type: DataTypes.STRING, allowNull: false },
        available: { type: DataTypes.BOOLEAN, defaultValue: true },
    });
    return ShareInventory;
};
