
const Course = require('../models/Courses')
const {mutipleMongooseToObject} = require('../../ulti/mongoose')
class MeController {

    //[GET] /me/stored.courses
    storedCourses(req, res, next){

        let courseQuery = Course.find({})

        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses',{
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(() => {})
        }
    
            //  nó là cái bên trên sử dụng destructuring,... promise để gộp lại.Như này để có thể render ra view cái số lượng bản ghi trong thùng rac
        // Course.countDocumentsDeleted()
        // .then((deletedCount) => {
        //     console.log(deletedCount)
        // })
        // .catch(() => {})

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses',{
        //         courses: mutipleMongooseToObject(courses)
        //     }))
        //     .catch(next)
    // }

    //[GET] /me/trash.courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses',{
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }
}

module.exports = new MeController()