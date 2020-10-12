
const express = require('express');
const router = express.Router();

const getPosts = require('../controllers/get-posts.js');
const getPost = require('../controllers/get-post.js');
const createPost = require('../controllers/create-post.js');
const deletePost = require('../controllers/delete-post.js');

router
    .route('/posts')
    .get(getPosts)
router
    .route('crPosts/')
    .post(createPost);

router
    .route('posts/:id')
    .get(getPost)
    .delete(deletePost)

module.exports = router;