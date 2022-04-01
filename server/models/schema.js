const mongoose= require('mongoose');


const commentSchema = new mongoose.Schema({
    commentedTo: {
        type: String,
        require: true
    },
    rating: Number,
    comments: [{
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: {
            type: String,
            required: true
        },
        imgsrc: {
            type: String,
            require: true 
        },
        text: String,
    }]
});

module.exports = mongoose.model('comment', commentSchema);