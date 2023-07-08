const express = require('express');

//carefull while catching the esported two variables from one module. Use curly brackets
const {getUsers, saveUser} = require('../controllers/users.controller');
const router = express.Router(); // carefull about capital later of R in router.

//Routing
router.get("/users", getUsers)

//Routing. Handling of the POST data after clicking submit buttom in html form by user. 
router.post("/users", saveUser);

module.exports = router;