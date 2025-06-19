const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');




dotenv.config();
const app = express();
app.use(cors({
  origin: 'https://cable-manager.vercel.app',
}));

app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use('/api/areas', require('./routes/areaRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
