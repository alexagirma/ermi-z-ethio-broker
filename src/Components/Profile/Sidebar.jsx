import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';


const Sidebar = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul className="profile">
        <li className="profile"><Link to="/profile">Profile</Link></li>
        <li className="profile"><Link to="/profile/addpost">Add Post</Link></li>
        <li className="profile"><Link to="/profile/messages">Messages</Link></li>
        <li className="profile"><Link to="/profile/newsfeed">Newsfeed</Link></li>
        <li className="profile"><Link to="/profile/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
