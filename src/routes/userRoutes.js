const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const storeController = require('../controllers/storeController');

router.post('/', userController.createUser);
router.get('/?id', userController.getUserById);

router.get('/quests', userController.getAllQuests);

router.get('/store', storeController.getAllStore);
router.post('/store', storeController.postStore);
router.put('/store', storeController.updateStore);
router.delete('/store', storeController.deleteStore);



module.exports = router;