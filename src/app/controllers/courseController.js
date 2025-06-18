const Course = require('../models/courseModel');
const { mutipleMongooseToObj, mongooseToObj } = require('../../util/mongoose');

class CourseController {

    // [GET] /course
    index(req, res, next) {
        const course = async () => {
            try {
                const courses = await Course.find({});

                // render course page
                res.render('course/course', {
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

    // [GET] /course/:slug
    detail(req, res, next) {
        const courseDetail = async () => {
            try {
                const course = await Course.findOne({ slug: req.params.slug }); // find one course by slug

                // render courseDetail page
                res.render('course/course-detail', {
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

    // [GET] /course/:id/edit
    edit(req, res, next) {
        const courseEdit = async () => {
            try {
                const course = await Course.findById(req.params.id); // find one course by id

                // render courseEdit page
                res.render('course/edit', {
                    layout: 'main',
                    title: 'Course Edit Page',
                    course: mongooseToObj(course),
                });
            } catch (error) {
                next(error);
            }
        };

        courseEdit();
    }

    // [PUT] /course/:id
    update(req, res, next) {
        const updateCourse = async () => {
            try {
                const formData = req.body;
                await Course.updateOne({ _id: req.params.id }, formData); // update course by id
                res.redirect('/me/stored/courses'); // redirect to the course index page after updating
            } catch (error) {
                next(error);
            }
        };

        updateCourse();
    }

    // [DELETE] /course/:id
    destroy(req, res, next) {
        const deleteCourse = async () => {
            try {
                const backUrl = req.get('Referer') || '/me/stored/courses';

                await Course.deleteOne({ _id: req.params.id }); // delete course by id
                res.redirect(backUrl); // redirect to the previous page after deleting
            } catch (error) {
                next(error);
            }
        };

        deleteCourse();
    }
};

module.exports = new CourseController;
