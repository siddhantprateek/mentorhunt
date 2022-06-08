const mongoose= require('mongoose');


const commentSchema = new mongoose.Schema({
    commentedTo: {
        type: String,
        require: true
    },
    avg_rating: Number,
    comments: [{
        rating: Number,
        name: {
            type: String,
            required: true
        },
        user_imgsrc: {
            type: String,
            require: true 
        },
        text: String,
    }]
});

module.exports = mongoose.model('comment', commentSchema);