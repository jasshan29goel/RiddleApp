const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
  },
    text: {
        type: String,
        required: true
  },
    name: {
        type: String,
  },
    date: {
        type: Date,
        default: Date.now
  },
  answers:[
      {
        user:{
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        },
      }
  ]

});

module.exports = Question = mongoose.model('Question', QuestionSchema);