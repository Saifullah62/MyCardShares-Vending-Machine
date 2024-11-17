const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Transaction = sequelize.define('Transaction', {
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        share_id: { type: DataTypes.INTEGER, allowNull: false },
        transaction_type: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    });
    return Transaction;
};
