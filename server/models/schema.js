const mongoose= require('mongoose');


const commentSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true 
    },
    commentedTo: {
        type: String,
        require: true 
    },
    imgsrc: {
        type: String,
        require: true 
    },
    rating: Number,
    comment: {
        type: String,
        require: true 
    } 
});

module.exports = mongoose.model('comment', commentSchema);