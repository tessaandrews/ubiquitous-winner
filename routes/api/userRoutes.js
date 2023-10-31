const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addUser,
  removeUser,
} = require('../../controllers/users');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:usersId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:users/userId/thoughts').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:users/userId/thoughts/:thoughtId').delete(removeUser);

module.exports = router;