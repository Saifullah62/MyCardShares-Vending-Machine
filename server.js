const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const shareRoutes = require('./routes/shareRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', shareRoutes);
app.use('/api', purchaseRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
