const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,

} = require('../../controllers/thoughts')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// api/thoughts/:thoughtText
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(removeReaction);


// /api/courses/:thoughtId


module.exports = router;