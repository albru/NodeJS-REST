exports.getPosts = (req, res, next) => {
  res.status(200).json({ posts: [{ title: "Post" }] });
};

exports.postPost = (req, res, next) => {
    console.log(req)
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'Post created!',
        post: { id: new Date().toISOString(), title: title, content: content}
    })
}
