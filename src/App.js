
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

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
  </div>
  );
}

export default App;
