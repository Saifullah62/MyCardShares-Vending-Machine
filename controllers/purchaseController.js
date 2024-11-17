const { ShareInventory, UserInventory, Transaction } = require('../models');
const randomizer = require('../utils/randomizer');

exports.purchaseShare = async (req, res) => {
    const userId = req.user.userId;

    try {
        const shareTier = randomizer.getRandomTier();
        const availableShare = await ShareInventory.findOne({ where: { tier: shareTier, available: true } });

        if (!availableShare) {
            return res.status(404).json({ error: 'No shares available at this tier.' });
        }

        await availableShare.update({ available: false });
        await UserInventory.create({
            user_id: userId,
            share_id: availableShare.id,
            ownership_percentage: availableShare.share_percentage,
        });
        await Transaction.create({
            user_id: userId,
            share_id: availableShare.id,
            transaction_type: 'purchase',
            amount: availableShare.market_value,
        });

        res.json({ message: 'Purchase successful!', share: availableShare });
    } catch (error) {
        res.status(500).json({ error: 'Error processing purchase.' });
    }
};
