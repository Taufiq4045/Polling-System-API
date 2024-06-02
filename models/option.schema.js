import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const OptionModel = mongoose.model('Option', optionSchema);

export default OptionModel;
