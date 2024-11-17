exports.getRandomTier = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum <= 60) return 'Common';
    else if (randomNum <= 90) return 'Rare';
    else if (randomNum <= 99) return 'Ultra-Rare';
    else return 'Grail';
};
