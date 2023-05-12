const Inventory = require('../models/inventory');

exports.getInventory = async (req, res) => {
    try {
        const quests = await Inventory.find();
        res.status(200).json(quests);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}


exports.postInventory = async (req, res) => {
    try {
        const newQuest = new Inventory(req.body);
        console.log(req.body);
        const quest = await newQuest.save();

        res.status(201).json(quest);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}