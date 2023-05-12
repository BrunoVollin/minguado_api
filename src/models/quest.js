const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({}, { strict: false });

const Quest = mongoose.model('Quest', questSchema);
module.exports = Quest;
