const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { paginate } = require('./plugins');

const mentorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
});

mentorSchema.plugin(toJSON);
mentorSchema.plugin(paginate);

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
