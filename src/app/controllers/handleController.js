const Course = require('../models/courseModel');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class HandleController {

    // [GET] /data_handle
    index(req, res, next) {
        const course = async () => {
            try {
                const courses = await Course.find({});
                res.render('data-handle/show', {
                    layout: 'sub',
                    title: 'Data Handle Page',
                    courses: mutipleMongooseToObj(courses),
                });
            } catch (error) {
                next(error);
            }
        }
        course();
    }

    // [GET] /data_handle/create
    create(req, res) {
        res.render('data-handle/create', {
            layout: 'sub',
            title: 'Create Data Handle Page',
        });
    }

    // [POST] /data_handle/store
    store(req, res, next) {
        const addCourse = async () => {
            try {
                const formData = req.body;
                const course = new Course(formData);
                await course.save();
                res.redirect('/data_handle'); // Redirect to the index page after storing the data
            } catch (error) {
                next(error);
            }
        }
        addCourse();
    }
};

module.exports = new HandleController();
