const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

(async () => await mongoose.connect('mongodb://bloger:123@84.38.180.19/blog'))();

module.exports = mongoose.model('Post', new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    author: {
        type: String
    },
    content: {
        type: String
    }
}));