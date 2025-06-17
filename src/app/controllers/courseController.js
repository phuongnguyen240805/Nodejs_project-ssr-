const Course = require('../models/courseModel');
const { mutipleMongooseToObj, mongooseToObj } = require('../../util/mongoose');

class CourseController {

    index(req, res, next) {
        const course = async () => {
            try {
                const courses = await Course.find({});

                // render course page
                res.render('course', {
                    layout: 'main',
                    title: 'Course Page',
                    courses: mutipleMongooseToObj(courses),
                });
            } catch (error) {
                next(error);
            }
        };

        course();
    }

    detail(req, res, next) {
        const courseDetail = async () => {
            try {
                const course = await Course.findOne({ slug: req.params.slug }); // find one course by slug

                // render courseDetail page
                res.render('courseDetail', {
                    layout: 'main',
                    title: 'Course Detail Page',
                    course: mongooseToObj(course),
                });
            } catch (error) {
                next(error);
            }
        };

        courseDetail();
    }
};

module.exports = new CourseController;
