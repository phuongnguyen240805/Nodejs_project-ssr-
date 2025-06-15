const siteRouter = require('./site')
const newsRouter = require('./news')

function router(app) {

    // [GET]: /
    app.use('/', siteRouter);

    // [GET]: /news
    // app.use('/news', newsRouter)
};

module.exports = router;
