const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const storeController = require('../controllers/storeController');
const questController = require('../controllers/questController');
const inventoryController = require('../controllers/inventoryController');
const enemiesController = require('../controllers/enemiesController');
const { authenticateUser } = require('../middlewares/authMiddleware.JS');

router.post('/', userController.createUser);
router.get('/', userController.getUserById);

router.get('/quests', authenticateUser, questController.getAllQuests);
router.post('/quests', authenticateUser, questController.postQuests);
router.put('/quests', authenticateUser, questController.updateQuests);
router.delete('/quests', authenticateUser, questController.deleteQuests);

router.get('/store', authenticateUser, storeController.getAllStore);
router.post('/store', authenticateUser, storeController.postStore);
router.put('/store', authenticateUser, storeController.updateStore);
router.delete('/store', authenticateUser, storeController.deleteStore);

router.get('/inventory', authenticateUser, inventoryController.getInventory);
router.post('/inventory', authenticateUser, inventoryController.postInventory);

router.get('/enemies', authenticateUser, enemiesController.getEnemies);
router.post('/enemies', authenticateUser, enemiesController.postEnemies);

module.exports = router;