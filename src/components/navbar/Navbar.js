import React from 'react'
import './navbar.css'
import avatar from "../../assets/avatar.png"
import { FaRegClock, FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className='navbar'>
        <div className='nav_icon' onClick={() => openSidebar()} >
            <FaBars className='i' />
        </div>
        <div className='navbar_left'>
            <a href=' ' className='a'>SAN</a>
            <a href=' ' className='a'>TIT</a>
            <a href=' ' className='a active_link'>Admin</a>
        </div>
        <div className='navbar_right'>
            <a href=' ' className='a'>
            <FaSearch  className='i'/>
            </a>
            <a href=' ' className='a'>
            <FaRegClock className='i' />
            </a>
            <a href=' ' className='a'>
                <img width="30" src={avatar} alt='avatar' />
            </a>
        </div>
    </nav>
  )
}

export default Navbar