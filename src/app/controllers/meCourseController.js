const Course = require('../models/courseModel');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class MeCourseController {

    // [GET] /me/stored/courses
    index(req, res, next) {
        const course = async () => {
            try {
                const [courses, deleteCount] = await Promise.all([
                    Course.find({}), // find all courses
                    Course.countDocumentsDeletedCustom() // count soft deleted courses
                ]);
                // render course page
                res.render('me/stored-courses', {
                    layout: 'main',
                    title: 'Stored Courses Page',
                    courses: mutipleMongooseToObj(courses),
                    deleteCount,
                });
            } catch (error) {
                next(error);
            }
        };

        course();
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        const course = async () => {
            try {
                const courses = await Course.findWithDeletedCustom(); // find courses that are soft deleted
                // render course page
                res.render('me/trash-courses', {
                    layout: 'main',
                    title: 'Trash Courses Page',
                    trashCourses: mutipleMongooseToObj(courses),
                });
            } catch (error) {
                next(error);
            }
        };

        course();
    }

};

module.exports = new MeCourseController;
