const express = require('express')
const router = express.Router()


const meController =  require('../app/controllers/MeController')


//newController.index: lấy ra cái index của cái thằng đấy ra
router.get('/stored/courses', meController.storedCourses) 
router.get('/trash/courses', meController.trashCourses) 

module.exports = router