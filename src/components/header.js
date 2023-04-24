import React from 'react'
import {Link} from 'react-router-dom'
import './component.css'

const Header=()=> {
    return (
        <>
            

            <div className="nav-container">
                <div className='nav-title'><span>Let's Chat</span></div>
                <div className='nav-options'><span><Link to="/">Home</Link></span>
                <span><Link to="/about">About</Link></span>
                <span><Link to="/contact">Contact</Link></span></div> 
            </div>
        </>
    )
}

export default Header