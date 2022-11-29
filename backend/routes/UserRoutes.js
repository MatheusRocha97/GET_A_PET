const router = require('express').Router();

const UserController = require('../controllers/UserController');

router.post('/register', UserController.register);   // ('/register(URL) ,UserController.register - tratativa para acesso da URL ')

module.exports = router;