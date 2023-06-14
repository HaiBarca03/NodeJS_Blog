
const Course = require('../models/Courses')
// const Tank = mongoose.model('Tank', yourSchema);
const {mongooseToObject} = require('../../ulti/mongoose')
class CourseController {
    //[GET] /search
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/show',{course: mongooseToObject(course)})
        })
        .catch(next)
        // res.send('detail - ' + req.params.slug)
    }
    
    //[GET] /courses /create
    create(req, res, next){
        res.render('courses/create')
    }
    //[POST] /courses /create
    store(req, res, next){
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ8dizlshzlql26YLAWlQ9qA9T5g`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {
            })
    }

    //[GET] /courses /:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }
    // [PUT] /courses /:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id},req.body)
            .then( () => res.redirect('/me/stored/courses'))
            .catch(next)
    }   
    // [DELETE] /courses /:id
    // sort delete
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
            .then( () => res.redirect('back'))
            .catch(next)
    }
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then( () => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /courses /:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then( () => res.redirect('back'))
            .catch(next)
    }

    // [POST] /courses/handle-action-form
    handleActionForm(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({_id: {$in: req.body.courseIds}})
                    .then( () => res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json({massage: 'action is invalid !'})
        }
    }
    //post /courses/handle-action-form-trash
    handleActionFormTrash(req, res, next){
        switch(req.body.action){
        case 'restore':
            Course.restore({_id: {$in: req.body.courseIds}})
            .then( () => res.redirect('back'))
            .catch(next)
                break
        case 'forceDelete':
            Course.deleteMany({_id: {$in: req.body.courseIds}})
            .then( () => res.redirect('back'))
            .catch(next)
                break
            default:
                res.json({massage: 'action is invalid !'})
        }
    }
}
module.exports = new CourseController()