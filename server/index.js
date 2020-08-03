const express = require ('express');
const ctrl = require('./controller');
const app = express();
const port = 4020;

app.use(express.json());

app.get("/api/blogs", ctrl.getBlogs)
app.post("/api/blogs", ctrl.addBlog)
app.delete("/api/blogs/:id", ctrl.deleteBlog)
app.put("/api/blogs/content/:id", ctrl.editBlogBody)

app.listen(port, () => console.log(`I hear you lurking on port ${port}`));