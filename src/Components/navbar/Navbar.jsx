import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import logo from '../../assets/logo.png';
import profile from '../../assets/img/profile.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,

} from "react-router-dom";
import Login from "../../Pages/Login";
import Registration from "../../Pages/Registration";
import swal from 'sweetalert';
import axios from 'axios';


import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import { white } from "material-ui/styles/colors";


const settings = [
  
  {
    itemTitle:'Profile',
    to:'profile',
  },
  {
    itemTitle:'About us',
    to:'aboutus',
  },
  //'Profile', 'Account', 'Dashboard'];

];

function Navbar() {


  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [openModal, setOpenModal] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);



  const logoutSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`/api/logout`).then(res => {
        if(res.data.status === 200)
        {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal("Success",res.data.message,"success");
            navigate('/');

        }
    });

}

var AuthButtons = '';
if(!localStorage.getItem('auth_token'))
{
    AuthButtons = (
         <>
               <Button onClick={() => { setOpenModal(true); }} sx={{ marginLeft: "auto" }} > {openModal && <Login/>}</Button >
             
              
             <Button onClick={handleOpen} >
             {open && <Registration/>}
             </Button>
             

             <Button sx={{ marginLeft: "10px" }} variant="contained">
               Agent
             </Button>
            </>
    );
}
else
{
    AuthButtons = (
        <>
         <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                <Avatar alt="Remy Sharp" src={profile} sx={{  backgroundColor: white }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Link to={setting.to}>{setting.itemTitle}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Button sx={{ marginLeft: "10px" }} type="button" onClick={logoutSubmit} variant="contained"  className="nav-link btn btn-danger btn-sm text-white">Logout</Button>

        </>
    );
}



  return (
    <React.Fragment>
      <AppBar sx={{ background: "#2badf2" }}>
        <Toolbar>
      <a href="/">
      <img sx={{ fontSize: "5px",  width: "44px", height: "40px", maxWidth: "44px", maxHeight: "40px"}} src={logo} alt="" onClick={() => Navigate("/")}/>
      </a>
          {isMatch ? (
            <>
             
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
             
                <Tab label="About Us" href="/aboutus"/>
                <Tab label="Contact" />
              </Tabs>
              {AuthButtons}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
