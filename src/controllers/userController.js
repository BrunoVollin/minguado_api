const User = require('../models/user');
const Quest = require('../models/quest');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) throw new Error('User not found');
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getAllQuests = async (req, res) => {
  try {
    // const quests = await Quest.find();
    const quests = [
      {
        "type": "Principal",
        "title": "Impeça o Bonnie de explodir o mundo",
        "steps": [
          "Freddy se encontra em algum lugar da ilha nivel III, vá até la",
          "Derrote seus lacáios e descubra sua localização",
          "Vença o Bonnie"
        ],
        "rewards": [
          { "reward": "Moedas", "qtd": 1000 },
          { "reward": "XP", "qtd": 1000 }
        ]
      },
      {
        "type": "Secundária",
        "title": "Ajude o Mr Cleiton a conquistar sua amada",
        "steps": [
          "Vá ao bosque glamuroso e colete 20 rosas de sangue",
          "Interaja com o jardineiro para conseguir o buque"
        ],
        "rewards": [
          { "reward": "Moedas", "qtd": 500 },
          { "reward": "XP", "qtd": 500 }
        ]
      }
    ];
    res.status(200).json(quests);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
