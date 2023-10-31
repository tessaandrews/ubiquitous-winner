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
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:userId/thoughts').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/thoughts/:thoughtId').delete(removeUser);

module.exports = router;