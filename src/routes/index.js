
// nạp file news.js vào đây
const newsRouter = require('./news')

const meRouter = require('./me')

const courseRouter = require('./courses')

// nạp file site.js vào đây
const siteRouter = require('./site')

function route(app){
    // gọi đến để sử dụng thôi
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)

    // app.get('/', (req, res) => 
    //     res.render('home'))
    // app.get('/search', (req, res) => 
    //     // console.log(req.query)
    //     res.render('search'))
    // app.post('/search', (req, res) => {
    //     console.log(req.body.q)
    //     res.send('')})
}

module.exports = route
