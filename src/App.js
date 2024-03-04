
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
  <div className='container'>
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    <Main />
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
  );
}

export default App;
