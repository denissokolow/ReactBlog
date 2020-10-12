const Post = require('../model/post.js');

module.exports = async (req, res) => {
    res.send(await Post.find());
};