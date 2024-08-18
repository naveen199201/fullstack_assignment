const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./models');
const cardRoutes = require('./routes/cardRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

// Test the database connection
db.sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Sync the database
db.sequelize.sync()
  .then(() => console.log('Database synced...'))
  .catch(err => console.log('Error: ' + err));

// API Routes
app.use('/api', cardRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
