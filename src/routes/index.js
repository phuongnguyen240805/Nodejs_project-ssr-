const siteRouter = require('./site');
// const newsRouter = require('./news');
const courseRouter = require('./course');
const handleRouter = require('./handle');
const meCourseRouter = require('./me');

function router(app) {

    // [GET]: /me
    app.use('/me', meCourseRouter);

    // [GET]: /courses
    app.use('/courses', courseRouter);

    // [GET]: /news
    // app.use('/news', newsRouter);

    // [GET]: /data_handle
    app.use('/data_handle', handleRouter);

    // [GET]: /
    app.use('/', siteRouter);
};

module.exports = router;
