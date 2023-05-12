const Store = require('../models/store');

exports.postStore = async (req, res) => {
    const { name, price, img } = req.body;
    try {
        const newStore = new Store({ name, price, img });
        const store = await newStore.save();

        res.status(201).json(store);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getAllStore = async (req, res) => {
    try {
        const store = await Store.find();
        res.status(200).json(store);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateStore = async (req, res) => {
    const { oldName, newName, newPrice, newImg } = req.query;
    try {
        await Store.updateOne(
            { name: oldName },
            { $set: { name: newName, price: newPrice, img: newImg } }
        );

        res.status(200).json({ message: 'Updated store' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteStore = async (req, res) => {
    const { name } = req.query;

    try {
        await Store.deleteOne({ name });
        res.status(200).json({ message: 'Deleted store' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


