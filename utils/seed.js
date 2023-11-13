const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];

  for (let i = 0; i < 20; i++) {

    const thoughts = getRandomThought(20);
    const fullName = getRandomUser();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    users.push({
      first,
      last,
      thoughts,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertOne({
    thoughtName: "HI!",
    reaction: "Loved This!",
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
