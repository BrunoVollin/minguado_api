const Quest = require('../models/quest');

exports.getAllQuests = async (req, res) => {
    try {
        const quests = await Quest.find();
        res.status(200).json(quests);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

exports.postQuests = async (req, res) => {
    try {
        const newQuest = new Quest(req.body);
        console.log(req.body);
        const quest = await newQuest.save();

        res.status(201).json(quest);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateQuests = async (req, res) => {
    const { oldTitle, newTitle, newSteps, newRewards } = req.query;
    try {
        await Quest.updateOne(
            { title: oldTitle },
            { $set: { title: newTitle, steps: newSteps, rewards: newRewards } }
        );

        res.status(200).json({ message: 'Updated quest' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteQuests = async (req, res) => {
    const { title } = req.query;

    try {
        await Quest.deleteOne({ title });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}