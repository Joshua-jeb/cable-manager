const mongoose = require('mongoose');
const Area = require('./models/Area');
const Customer = require('./models/Customer');

// 🔗 Your actual MongoDB Atlas URL here
const MONGO_URL = 'mongodb+srv://cabeladmin:Joshua%406705@cluster0.q4deun4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    // 1. Create Area
    const dharmapuri = new Area({ name: 'Dharmapuri' });
    await dharmapuri.save();

    // 2. Create Customers under that Area
    const customers = [
      {
        name: 'Ravi Kumar',
        setTopBoxNumber: 'STB001',
        area: dharmapuri._id,
        status: 'not recharged',
      },
      {
        name: 'Priya S',
        setTopBoxNumber: 'STB002',
        area: dharmapuri._id,
        status: 'recharged',
      },
    ];

    await Customer.insertMany(customers);
    console.log('Sample data inserted!');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDB();
