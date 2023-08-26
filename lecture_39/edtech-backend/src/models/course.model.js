const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { paginate } = require('./plugins');

const courseSchema = mongoose.Schema({
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sections: [
    {
      title: {
        type: String,
        required: true,
      },
      videos: [
        {
          title: {
            type: String,
            required: true,
          },
          videoUrl: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});


courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
