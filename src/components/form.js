import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }

universalHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}


    render(){
        
    return(
        <section className='blogBuilder'>
            
            <form onSubmit={event => {
                this.props.addBlog(event, this.state.title, this.state.content)
                this.setState({title:"", content:""})}} >
                <input
                name='title'
                value={this.state.title} 
                type='text' 
                className="inputTitle" 
                placeholder='title'
                onChange={(e) => this.universalHandler(e)}>
                </input>

                <textarea
                name='content'
                value={this.state.content} 
                type='text' 
                className="inputContent" 
                placeholder='tell me a story'
                onChange={(e) => this.universalHandler(e)}>
                </textarea>
                <button>New Blog</button>
                {/* <div className="inputButt">NEW BLOG</div> */}
            </form>
        </section>
    )
}
}
export default Form;