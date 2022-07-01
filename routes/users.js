const app = require('../app');

const express = require('express');
const router = express.Router();
let  {users,register,getLogin,postLogin, addUser, getUser} = require('../controller/userController');


router.get('/', users);
router.get('/addUser', addUser)
router.get('/register', register)
router.post('/login', getUser)

module.exports = router;
