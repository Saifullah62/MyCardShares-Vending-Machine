const { ShareInventory } = require('../models');

exports.getAvailableShares = async (req, res) => {
    try {
        const shares = await ShareInventory.findAll({ where: { available: true } });
        res.json(shares);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching shares.' });
    }
};
