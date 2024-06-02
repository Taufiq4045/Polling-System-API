import express from 'express';
import {
  createQuestion,
  createOption,
  deleteQuestion,
  deleteOption,
  addVote,
  getQuestion,
} from '../controllers/question.controller.js';

const questionRouter = express.Router();

questionRouter.route('/create').post(createQuestion);
questionRouter.route('/:id/options/create').post(createOption);
questionRouter.route('/:id/delete').delete(deleteQuestion);
questionRouter.route('/options/:id/delete').delete(deleteOption);
questionRouter.route('/options/:id/add_vote').put(addVote);
questionRouter.route('/:id').get(getQuestion);

export default questionRouter;
