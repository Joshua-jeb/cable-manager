const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Get customers by area
router.get('/', async (req, res) => {
  const { areaId } = req.query;
  console.log("Fetching customers for areaId:", areaId); // 👈 log this
  const customers = await Customer.find({ area: areaId });
  console.log("Customers found:", customers); // 👈 log result
  res.json(customers);
});


// Add a new customer
router.post('/', async (req, res) => {
  try {
    const { name, setTopBoxNumber, areaId, status } = req.body;

    const newCustomer = new Customer({
      name,
      setTopBoxNumber,
      area: areaId, // ✅ save as 'area', not 'areaId'
      status,
    });

    const saved = await newCustomer.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding customer:', err);
    res.status(500).json({ message: 'Failed to add customer' });
  }
});



module.exports = router;
