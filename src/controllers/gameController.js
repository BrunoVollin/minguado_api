const Game = require('../models/game');

exports.getGame = async (req, res) => {
    try {
        const game = await Game.findOne({ username: req.query.username });
        res.status(200).json(game);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

exports.updateGame = async (req, res) => {
    try {
        await Game.updateOne(
            { username: req.body.username },
            { $set: req.body }
        );

        res.status(200).json({ message: 'Updated game' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}