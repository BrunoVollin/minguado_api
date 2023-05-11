const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true }
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;
