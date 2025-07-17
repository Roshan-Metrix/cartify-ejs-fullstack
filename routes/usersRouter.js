const express = require('express');
const router = express.Router();
const { createdUser,loginUser } = require('../controllers/authController')

router.get('/', (req, res) => {
    res.send('User home');
});

router.post('/register',createdUser);

router.post('/login', loginUser);

module.exports = router;