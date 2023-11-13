const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughts')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);


// /api/courses/:thoughtId
router
  .route('/:thoughtText')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;