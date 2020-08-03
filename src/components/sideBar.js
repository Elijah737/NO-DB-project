import React from 'react';
import Form from './form'

const SideBar = (props) => {
    return(
        <main className='sideBar'>
            <header>
                <h1>THE<br/><span>BLOG</span><br/>OF<br/><span>ETERNAL</span><br/>STENCH</h1>
            </header>
            <Form {...props} />
        </main>
    )
}

export default SideBar;