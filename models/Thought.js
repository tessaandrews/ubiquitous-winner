const { Schema, Types } = require('mongoose');
const { STRING } = require('sequelize');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
  
    id: {
      type: String,
      required: true,
    },
    reactions: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    toJSON: {
      //getters: true,
    },
    //id: false,
  }
);

//const thought = model('thought', thoughtSchema);


module.exports = thoughtSchema;

//* `thoughtText`
 // * String
 // * Required
 // * Must be between 1 and 280 characters

//* `createdAt`
 // * Date
  //* Set default value to the current timestamp
 // * Use a getter method to format the timestamp on query

//* `username` (The user that created this thought)
 // * String
  //* Required

//* `reactions` (These are like replies)
 // * Array of nested documents created with the `reactionSchema`
