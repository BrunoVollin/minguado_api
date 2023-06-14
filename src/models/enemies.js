const mongoose = require('mongoose');

const enemiesSchema = new mongoose.Schema({}, { strict: false });

const Enemies = mongoose.model('Enemies', enemiesSchema);
module.exports = Enemies;
