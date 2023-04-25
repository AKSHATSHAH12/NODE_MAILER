const router =  require('express').Router();
const {signup,getbill} = require('../controller/appController.js')


//** HTTP request */
router.post('/user/signup',signup);
router.post('/product/getbill',getbill);

module.exports = router;