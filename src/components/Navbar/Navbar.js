import React from 'react'
import './Navbar.css'

function Navbar(){

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3000px-Netflix_2015_logo.svg.png" alt="" />
                </div>

                <div className="nav-items">
                    <ul className="links">
                        <li><a className='link'>Home</a></li>
                        <li><a className='link'>Movies</a></li>
                        <li><a className='link'>Series</a></li>
                        <li><a className='link'>My List</a></li>
                        
                        <li><i className='fas fa-search'></i></li>
                        <li><i className='fas fa-bell'></i></li>
                        <li><i className='fas fa-user'></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Navbar


