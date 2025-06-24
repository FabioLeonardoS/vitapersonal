const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authJwt = require('../../middleware/authJwt');

router.get('/:id', [authJwt.verifyToken], userController.getUser);
router.put('/:id', [authJwt.verifyToken], userController.updateUser);
router.post('/:id/checkin', [authJwt.verifyToken], userController.addCheckin);

module.exports = router;