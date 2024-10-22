import { Router } from 'express';
const router = Router();
import { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought, createReaction, deleteReaction, } from '../../controllers/thoughtControllers.js';
// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought);
// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction);
// api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
export { router as thoughtRouter };
