const express = require('express'); 
const router = express.Router();
const {getToken, stkpush} = require('../Controller/stkPush');

router.post('/', getToken, stkpush); // call the getToken function

module.exports = router;