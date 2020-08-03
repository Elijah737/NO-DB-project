import React, {Component} from 'react';
import axios from 'axios';
import './reset.css'
import './App.css'
import SideBar from './components/sideBar';
import Blogs from './components/blogs'


class App extends Component {
  constructor(){
    super();
    this.state= {
      blogs: []
    }
    this.addBlog = this.addBlog.bind(this);
    this.deleteBlog=this.deleteBlog.bind(this);
    this.editBlogBody=this.editBlogBody.bind(this);
  }

  componentDidMount(){
    this.getBlogs();
  };

  getBlogs = () => {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({
          blogs: res.data
        })
      }
    ).catch( err => console.log(err))
  };

  addBlog = (event, title, content) => {
    event.preventDefault()
    axios.post('/api/blogs', {title, content})
      .then( res => {
      this.setState({
        blogs: res.data
      })
    })
    .catch( err => console.log(err))
  }

  deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
    .then(res => {
      this.setState({
        blogs: res.data
      })
    }).catch( err => console.log(err))
  }

  editBlogBody = (id, content) => {
    axios.put(`/api/blogs/content/${id}`, {content})
    .then(res => {
      this.setState({
        blogs: res.data
      })
    }).catch(err => console.log(err))
  }

  render(){
    console.log(this.state)
    return(

      <div className="appMain">

        <SideBar addBlog={this.addBlog} />
        <Blogs editBlogBody={this.editBlogBody} deleteBlog={this.deleteBlog} blogs={this.state.blogs} />

      </div>

    )
  }

}

export default App;