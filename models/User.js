const { Schema, model } = require('mongoose');
//const usersSchema = require('./Thought')


const usersSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    thoughtName: {
      type: String,
       required: true,
      maxlength: 50,
      minlength: 4,
       default: 'Unnamed thought',
    unique: true,
      //trimmed: true,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
     // must match valid email address
    },
    //github: {
    //  type: String,
      //required: true,
     // max_length: 50,
   // },
    //thought: [thoughtSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

usersSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model('user', usersSchema);

module.exports = User;


//* `username`
 // * String
 // * Unique
 // * Required
 // * Trimmed

//* `email`
 // * String
 // * Required
 // * Unique
  //* Must match a valid email address (look into Mongoose's matching validation)

//* `thoughts`
 // * Array of `_id` values referencing the `Thought` model

//* `friends`
// * Array of `_id` values referencing the `User` model (self-reference)

//**Schema Settings**:

//Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
