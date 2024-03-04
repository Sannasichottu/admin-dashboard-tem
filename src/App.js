
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [sidebarOpen,setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }
  return (
  <div className='container'>
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    <h1>Dashboard Temp</h1>
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
  );
}

export default App;
