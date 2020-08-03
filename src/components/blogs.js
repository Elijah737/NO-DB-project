import React from 'react';
import Blog from './blog'

const Blogs = (props) => {
    const blogMap = props.blogs.map(blog => {
        return <Blog key={blog.id} blog={blog} editBlogBody={props.editBlogBody} deleteBlog={props.deleteBlog}/>
    })

    return(
        <section className="blogCollection" >
        
        {blogMap}

        </section>
    )
}

export default Blogs;