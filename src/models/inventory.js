const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({}, { strict: false });

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
