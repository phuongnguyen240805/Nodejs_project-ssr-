const Course = require('../models/courseModel');
const { mutipleMongooseToObj } = require('../../util/mongoose');
class SiteController {

    // [GET]: /
    index(req, res) {
        const course = async () => {
            try {
                let courses = await Course.find({});

                res.render('home', {
                    layout: 'main',
                    title: 'Home Page',
                    courses: mutipleMongooseToObj(courses),
                });
            } catch (error) {
                next(error);
            }
        };

        course();
    };

    // [GET]: /signup
    signup(req, res) {
        res.render('signup', {
            layout: 'main',
            title: 'SignUp Page',
        });
    };
};

module.exports = new SiteController;
