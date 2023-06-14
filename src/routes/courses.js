const express = require('express')
const router = express.Router()

//cho thằng này bằng cái bên file NewsController.js
const coursesController =  require('../app/controllers/CourseController')


//newController.index: lấy ra cái index của cái thằng đấy ra
router.get('/create', coursesController.create) 
router.post('/store', coursesController.store) 
router.get('/:id/edit', coursesController.edit) 
router.post('/handle-action-form', coursesController.handleActionForm)
router.post('/handle-action-form-trash', coursesController.handleActionFormTrash)
router.put('/:id', coursesController.update) 
router.patch('/:id/restore', coursesController.restore) 
router.delete('/:id', coursesController.destroy) 
router.delete('/:id/force', coursesController.forceDestroy) 
router.get('/:slug', coursesController.show) 

module.exports = router