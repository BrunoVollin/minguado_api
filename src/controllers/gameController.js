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
