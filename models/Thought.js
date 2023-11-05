const { Schema, model } = require('mongoose');


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
  getters: true,
  },
   username: {
     type: String,
     required: true,
   },
    reactions: {
      type: Number,
      required: true,
    },
   }
);
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Application model
const Reaction = model('reactions', thoughtSchema);

module.exports = Reaction;

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
