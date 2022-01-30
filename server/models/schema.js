const mongoose= require('mongoose');


const commentSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true 
    },
    rating: Number,
    comment: String 
});

module.exports = mongoose.model('Comment', commentSchema);