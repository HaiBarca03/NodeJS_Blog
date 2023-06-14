
const Course = require('../models/Courses')
const {mutipleMongooseToObject} = require('../../ulti/mongoose')
class SiteController {
    
    //[GET] /
    index(req, res) {
        // res.render('home')
        Course.find({})
        // .then(courses => {res.json(courses)})
        // .then(courses => {res.render('home')})
        .then(courses => {
            res.render('home',{ 
                courses : mutipleMongooseToObject(courses)
            })
        })
        
            
        .catch(err => {res.status(400).json({ error: 'ERROR' })})
    }

    //[GET] /search
    search(req, res){
        res.render('search')

    }
}

module.exports = new SiteController()