const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { paginate } = require('./plugins');

const mentorSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    courses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course',
        required : true
    }],
    bio: {
        type: String,
        required: true,
        trim: true,
    }, 
    socials: [
        {
            platform: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        }
    ]
}); 

mentorSchema.plugin(toJSON);
mentorSchema.plugin(paginate);

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;