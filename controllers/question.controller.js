import QuestionModel from '../models/question.schema.js';
import OptionModel from '../models/option.schema.js';
import { ErrorHandler } from '../utils/errorHandler.js';

export const createQuestion = async (req, res) => {
  try {
    const { title } = req.body;
    const question = new QuestionModel({ title });
    await question.save();
    res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

export const createOption = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const option = new OptionModel({ text });
    const question = await QuestionModel.findById(id);
    question.options.push(option);
    await question.save();
    await option.save();
    res.status(201).json({ message: 'Option added successfully' });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await QuestionModel.findByIdAndDelete(id);
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

export const deleteOption = async (req, res) => {
  try {
    const { id } = req.params;
    await OptionModel.findByIdAndDelete(id);
    res.json({ message: 'Option deleted successfully' });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

export const addVote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const option = await OptionModel.findById(id);
    option.votes += 1;
    await option.save();
    res.json({ message: 'Vote added successfully' });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const question = await QuestionModel.findById(id).populate('options');
    const port = process.env.PORT;
    res.json({
      id: question._id,
      title: question.title,
      options: question.options.map((option) => ({
        id: option._id,
        text: option.text,
        votes: option.votes,
        link_to_vote: `http://localhost:${port}/options/${option._id}/add_vote`,
      })),
    });
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};
