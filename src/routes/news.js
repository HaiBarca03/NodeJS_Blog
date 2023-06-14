const express = require('express')
const router = express.Router()

//cho thằng này bằng cái bên file NewsController.js
const newsController =  require('../app/controllers/NewsController')


//newController.index: lấy ra cái index của cái thằng đấy ra
router.get('/:slug', newsController.show) 
router.get('/', newsController.index) 

module.exports = router