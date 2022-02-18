const express = require('express');
const router = express.Router();
const { getAllComments,
        getComment,
        editComments,
        deleteComments,
        postComments
    } = require('../controllers/controller.js');

router.route('/').get(getAllComments).post(postComments);

router.route('/:messageId').get(getComment).patch(editComments).delete(deleteComments);

module.exports = router;