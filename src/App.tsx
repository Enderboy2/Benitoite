import { useState } from 'react'
import styles from 'styles/app.module.scss'
import SideBar from './SideBar';

const App: React.FC = () => {
  return (
    <>
      <div className="sidebar-container flex flex-row w-64 h-screen">
        <div className="sidebar-left flex flex-col justify-around bg-gray-900">
          <button>A</button>
          <button>B</button>
          <button>C</button>
        </div>
        <div className="sidebar-right bg-custom-2">
          <a href="">First</a>
          <a href="">Second</a>
          <a href="">Third</a>
          <a href="">Fourth</a>
        </div>
      </div>
    </>
  );
}

export default App
