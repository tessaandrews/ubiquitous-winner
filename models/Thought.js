const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
  type: Date,
  default: Date.now,
  get: timestamp => dateFormat (timestamp)
  },
   username: {
     type: String,
     required: true,
   },
    reactions: [reactionSchema]
      
    },
    {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
    }
   
);
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('reactions', thoughtSchema);
module.exports = Thought

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
