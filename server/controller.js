const blogs = require('./blogs.json');
let id = 6;

module.exports = {
    getBlogs: (req, res) => {
        res.status(200).send(blogs);
    },

    addBlog: (req, res) => {
        const { title } = req.body;
        const { content } = req.body;
        if (!title) {
            res.sendStatus(405)
        } else {
            const newBlog = {
                id,
                title,
                content
            };
            blogs.unshift(newBlog);
            id++;
            res.status(200).send(blogs);
        }
    },

    deleteBlog: (req, res) => {
        const {id} = req.params
        const index = blogs.findIndex(blog => blog.id === +id);
        if(index === -1){
            res.status(404).send('Blog not found in Blogs')
        } else {
            blogs.splice(index, 1);
            res.status(200).send(blogs)
        }
    },

    editBlogBody: (req, res) => {
        const {id} = req.params
        const index = blogs.findIndex( blog => blog.id ===  +id);
        if( index === -1 ){
            res.sendStatus(404)
        } else {
            blogs[index].content = req.body.content
            res.status(200).send(blogs)
        }
    }
}

