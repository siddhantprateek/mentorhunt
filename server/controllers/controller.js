const schema = require('../models/schema.js');

const getMessages = async (req, res) => {
    try {
        const read = await schema.find({});
        res.status(200).json({ read })
    }
    catch (error) {
        res.status(200).json({ message: error.message })
    }
}

const postMessage = async (req, res) => {
    try {
        const post = await schema.create(res.body);
        res.status(201).json({ post })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const editMessage = async (req, res) => {
    try {
        const {messageId: msgId} = req.params;
        const edit = await schema.findByIdAndUpdate({ _id: msgId }, req.body, {
            new: true,
            runValidators: true
        })
        if (!edit) {
            return res.statusnode(404).json({ message: 'Message is not found' })
        }
        res.status(200).json({ edit })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMessage = async (req, res) => {
    try {
        const { messageId: msgId } = req.params;
        const delmsg = await schema.findByIdAndDelete({ _id: msgId });

        if (!delmsg) {
            return res.status(404).json({ message: 'No items with that ID' })
        }

        res.status(200).json({ delmsg })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getMessages,
    postMessage,
    editMessage,
    deleteMessage
}