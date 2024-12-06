import React from 'react';
import './Sidebar.css';
import logo from '../Assets/logo.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <img src={logo} alt="" />
      <h2>LMS Menu</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/config_Settings">Config Settings</a></li>
        <li><a href="/student">Student</a></li>
        <li><a href="/human_resources">Human Resources</a></li>
        <li><a href="/exam_settings">Exam Settings</a></li>
        <li><a href="/timetable">Timetable</a></li>
        <li><a href="/fee_structure">Fee Structure</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/settings">Settings</a></li>

      </ul>
    </div>
  );
};

export default Sidebar;
