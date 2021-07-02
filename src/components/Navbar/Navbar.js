import React from 'react'
import './Navbar.css'
import { FiSearch } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { IconContext } from 'react-icons';

function Navbar(){

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3000px-Netflix_2015_logo.svg.png" alt="" />
                </div>

                <div className="nav-items">
                    <ul className="links">
                        <li><a className='nav-link'>Home</a></li>
                        <li><a className='nav-link'>Movies</a></li>
                        <li><a className='nav-link'>Series</a></li>
                        <li><a className='nav-link'>My List</a></li>   
                    
                    </ul>

                    <div className="icon-links">
                            <IconContext.Provider value={{color:"white", size:"19px"}}>
                                <FiSearch/>    
                            </IconContext.Provider>    
                            <IconContext.Provider value={{color:"white", size:"19px"}}>
                                <FiBell/>    
                            </IconContext.Provider>    
                            <IconContext.Provider value={{color:"white", size:"19px"}}>
                                <FiUser/>    
                            </IconContext.Provider> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar


