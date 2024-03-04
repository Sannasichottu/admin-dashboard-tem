import React from 'react'
import './sidebar.css'
import logo from '../../assets/logo0.avif'
import { ImCross } from "react-icons/im";

import { FaBriefcase, FaBuilding, FaCalendarAlt, FaFileSignature, FaHandshake, FaMoneyBill, FaPowerOff, FaQuestion, FaSignOutAlt, FaUserFriends, FaUserSecret, FaWarehouse } from 'react-icons/fa';
const Sidebar = ({SidebarOpen, closeSidebar}) => {
  return (
    <div className={SidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
        <div className='sidebar_title'>
            <div className='sidebar_img'>
                <img src={logo} alt='logo' />
                <h1>Codersbite</h1>
            </div>
            <ImCross className='i' id='sidebarIcon' onClick={()=>closeSidebar()} />
        </div>
        <div className='sidebar_menu'>
            <div className='sidebar_link active_menu_link' >
            <FaUserSecret className='i' />
                <a href=' ' className='a'>Admin Management</a>
            </div>
            <div className='sidebar_link'>
            <FaBuilding className='i' />
            <a href=' ' className='a'>Company Management</a>
            </div>
            <div className='sidebar_link'>
            <FaUserFriends className='i' />
            <a href=' ' className='a'>Employee Management</a>
            </div>
            <div className='sidebar_link'>
            <FaWarehouse className='i' />
            <a href=' ' className='a'>Warehouse</a>
            </div>
            <div className='sidebar_link'>
            <FaHandshake className='i' />
            <a href=' ' className='a'>Contracts</a>
            </div>
           
           <h2>LEAVE</h2>
            <div className='sidebar_link'>
            <FaQuestion className='i' />
            <a href=' ' className='a'>Requests</a>
            </div>
            <div className='sidebar_link'>
            <FaSignOutAlt className='i' />
            <a href=' ' className='a'>Sign-out</a>
            </div>
            <div className='sidebar_link'>
            <FaCalendarAlt className='i' />
            <a href=' ' className='a'>Special Days</a>
            </div>
            <div className='sidebar_link'>
            <FaFileSignature className='i' />
            <a href=' ' className='a'>Apply for leave</a>
            </div>
            <h2>PAYROLL</h2>
            <div className='sidebar_link'>
            <FaMoneyBill className='i' />
            <a href=' ' className='a'>Payroll</a>
            </div>
            <div className='sidebar_link'>
            <FaBriefcase className='i' />
            <a href=' ' className='a'>Paygrade</a>
            </div>
            <div className='sidebar_logout'>
            <FaPowerOff className='i' />
            <a href=' ' className='a'>Log out</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar