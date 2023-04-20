import * as React from 'react';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import "react-pro-sidebar/dist/css/styles.css";

import Sidebar from '../../Components/Profile/Sidebar';
import { Outlet } from 'react-router-dom';
//import '../../../App.css';
import './profile.css';
import Navbar from '../../Components/navbar/Navbar';
 





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const preventDefault = (event) => event.preventDefault();


 function Profile() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <>
         <Navbar/>

    <div sx={{marginBottom: 20, display: 'flex', justifyContent: 'space-between', flexDirection: "row" }}>
   <div className="profile">
    <div className="container">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  </div>
  </div>
    
    </>
  );
}

export default Profile;
