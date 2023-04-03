import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css'


const Sidebar = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul className="profile">
        <li className="profile"><Link to="/profile">Profile</Link></li>
        <li className="profile"><Link to="./addpost">Add Post</Link></li>
        <li className="profile"><Link to="/messages">Messages</Link></li>
        <li className="profile"><Link to="/newsfeed">Newsfeed</Link></li>
        <li className="profile"><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
