const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema;

let Student = new StudentSchema(
    {
        name: { type: String, required: true, minlength: 4 },
        gender: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        createdAt: {type: Date, default: Date.now }
},
{ collection: 'student' }
);

module.exports = mongoose.model('Student', Student);