import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Option',
    },
  ],
});

const QuestionModel = mongoose.model('Question', questionSchema);
export default QuestionModel;
