const mongoose = require('mongoose');

const cardEffectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  order: { type: Number, required: true }
});

const cardSchema = new mongoose.Schema({
  effects: { type: [cardEffectSchema], required: true },
  image_url: { type: String, required: true },
  mp_cost: { type: Number, required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true },
  rarity: { type: String, required: true },
  targets: { type: String, required: true }
});

const shopSchema = new mongoose.Schema({

});

const currentEquipsSchema = new mongoose.Schema({
  sword: { type: any, required: true },
  armor: { type: any, required: true  },
  ring: { type: any, required: true  },
  bracelet: { type: any, required: true },
});

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  experience: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  current_equips: { type: currentEquipsSchema, default: [] },
  shop_equips: { type: [shopSchema], default: [] },
  deck: { type: [cardSchema], default: [] },
  current_class: { type: String, default: 'none' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
