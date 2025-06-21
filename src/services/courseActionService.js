const Course = require('../app/models/courseModel');

// Function to handle course actions
async function handleCourseAction(action, courseIds) {
    // check if action is valid
    if (!Array.isArray(courseIds) || courseIds.length === 0) {
        throw new Error('No course selected');
    }

    switch (action) {
        case 'delete':
            await Course.delete({ _id: { $in: courseIds } }); // soft delete courses
            break;
        case 'restore':
            await Course.restore({ _id: { $in: courseIds } }); // restore courses
            break;
        case 'force-delete':
            await Course.deleteMany({ _id: { $in: courseIds } }); // force delete courses
            break;
        default:
            throw new Error('Invalid action');
    };
};

module.exports = { handleCourseAction };