const siteRouter = require('./site');
const newsRouter = require('./news');
const courseRouter = require('./course');

function router(app) {

    // [GET]: /courses
    app.use('/courses', courseRouter);

    // [GET]: /news
    // app.use('/news', newsRouter)

    // [GET]: /
    app.use('/', siteRouter);
};

module.exports = router;
