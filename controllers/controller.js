const schema = require('../models/schema.js');

const getAllComments = async (req, res) => {
    try {
        const comment = await schema.find({});
        res.status(200).json(comment)
    }
    catch (error) {
        res.status(200).json({ message: error.message })
    }
}

const getComment = async (req, res) => {
    const { messageId: msgId } = req.params;
    const comment = await schema.findOne({ _id: msgId })
    try {
        if (!comment) {
            return res.statusnode(404).json({ message: 'Message is not found' })
        }

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const postComments = async (req, res) => {
    try {
        const comment = await schema.create(req.body);
        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const editComments = async (req, res) => {
    try {
        const { messageId: msgId } = req.params;
        const comment = await schema.findByIdAndUpdate({ _id: msgId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!comment) {
            return res.statusnode(404).json({ message: 'Message is not found' })
        }
        res.status(200).json({ comment })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteComments = async (req, res) => {
    try {
        const { messageId: msgId } = req.params;
        const comment = await schema.findByIdAndDelete({ _id: msgId });

        if (!comment) {
            return res.status(404).json({ message: 'No items with that ID' })
        }

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAllComments,
    postComments,
    editComments,
    deleteComments,
    getComment
}