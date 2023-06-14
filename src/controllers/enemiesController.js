const Enemies = require('../models/enemies');

exports.getEnemies = async (req, res) => {
    try {
        const enemies = await Enemies.find();
        res.status(200).json(enemies);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}


exports.postEnemies = async (req, res) => {
    try {
        const newEnemies = new Enemies(req.body);
        const quest = await newEnemies.save();

        res.status(201).json(quest);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}