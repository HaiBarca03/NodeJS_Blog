const express = require('express')
const router = express.Router()

//cho thằng này bằng cái bên file NewsController.js
const siteController =  require('../app/controllers/SiteController')


//siteController.index,rearch: lấy ra cái index,search của cái thằng đấy ra
router.get('/search', siteController.search) 
router.get('/', siteController.index) 

module.exports = router