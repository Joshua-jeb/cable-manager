const express = require('express');
const router = express.Router();
const Area = require('../models/Area');

// Get all areas
router.get('/', async (req, res) => {
  const areas = await Area.find();
  res.json(areas);
});

// Add a new area
router.post('/', async (req, res) => {
  const { name } = req.body;
  const area = new Area({ name });
  await area.save();
  res.status(201).json(area);
});

module.exports = router;
