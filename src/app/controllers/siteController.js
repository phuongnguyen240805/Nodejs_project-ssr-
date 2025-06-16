const Course = require('../models/courseModel');
class SiteController {

    // [GET]: /
    index(req, res) {
        const course = async () => {
            try {
                const courses = await Course.find({});
                res.json(courses);
            } catch (error) {
                throw new Error(error);
            }
        };

        course();

        res.render('home', {
            layout: 'main',
            title: 'Home Page',
        });
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
