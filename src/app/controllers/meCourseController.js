const Course = require('../models/courseModel');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class MeCourseController {

    // [GET] /me/stored-courses
    index(req, res, next) {
        const course = async () => {
            try {
                const courses = await Course.find({});

                // render course page
                res.render('me/stored-courses', {
                    layout: 'main',
                    title: 'Stored Courses Page',
                    courses: mutipleMongooseToObj(courses),
                });
            } catch (error) {
                next(error);
            }
        };

        course();
    }

};

module.exports = new MeCourseController;
