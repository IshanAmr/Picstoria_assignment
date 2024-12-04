const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const db = require('./models/index.js');
const userRoutes = require('./routes/user.route.js');
const photoRoutes = require('./routes/photo.route.js');
app.use(express.json());
app.use(cors());

db.sequelize.authenticate()
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.error('Failed to connect to the database:', err);
});
app.use('/api/photos', photoRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}`);
})