import React from 'react';

const Blog = (props) => {
    return(
        
        <section className='blog' >

        <div className='deleteButt' onClick={() => props.deleteBlog(props.blog.id)} >X</div>
        <h1 className='blogTitle'>{props.blog.title}</h1>
        <div className='blogContent'>{props.blog.content}</div>
        <div className='editButt' onClick={() => props.editBlogBody(props.blog.id, props.content)}> edit </div>

        </section>

    )
}

export default Blog;