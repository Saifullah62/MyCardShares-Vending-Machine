const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password_hash: { type: DataTypes.STRING, allowNull: false },
        wallet_balance: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.0 },
    });
    return User;
};
