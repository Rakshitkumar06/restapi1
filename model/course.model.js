const mongoose = require('mongoose');
const CourseSchema = mongoose.Schema;

let Course = new CourseSchema(
    {
    name: { type: String, required: true, minlength: 4 },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    createdAt: {type: Date, default: Date.now }
    },
    { collection: 'course' }
);

module.exports = mongoose.model('Course', Course);