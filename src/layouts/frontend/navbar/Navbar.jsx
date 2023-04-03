import { Badge, Button, Switch } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState, Component }  from 'react';
import styled from 'styled-components';
import logo from '../../../assets/frontend/img/logo.png';

//import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../Theme";
import InputBase from "@mui/material/InputBase";
//import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
//import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";



import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
//import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,

} from "react-router-dom";
import Registration from '../../../components/frontend/Registration';
import Login from '../../../components/frontend/Login';
import Agent from '../../../components/frontend/Agent';
import axios from 'axios';
import swal from 'sweetalert';



 
const Container = styled.div`
    
     z-index:
     
     
  `;

const Wrapper = styled.div`
     padding: 10px 20px 13px 8px;''
     display: flex;''
     align-items: center;
     justify-content: space-between;
     background-color: #2badf2;
     color: white;
     height: 70px;
      
    // position: -webkit-sticky;
  //position: sticky;
  //top: 0;
    
     //box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
     z-index:1;

     //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

     //font-weight: bold;
     
       `;

const Left = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     font-size: 15px;
     padding: 0px 0px 8px 10px;
     `;

/*const logo = styled.img`
font-weight: bold;
color: #fdae5c;
font-size: -75em;
`;*/
/*const Language = styled.span`
     font-size: 14px;
     cursor: pointer; 
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
  border: none;      
`;*/ 

/*const Center = styled.div `
     flex: 1;
     text-align: center;
     `;

//const Logo = styled.h1`
    font-weight: bold;
`; */  
const Right = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     color: #f7d410;
margin-top: -60px



     
     
     `;  
    

const MenuItems = styled.div`

     display: flex;
     align-items: center;
     justify-content: flex-end;
     color: white;
     margin-right: 15px;
     padding: 5px 0px 5px 0px;
    background-color:  #f7d410;
    font-size:5px;
    cursor: pointer;
    border-radius: 5px;
    border: none;


    `;
  const Form = styled.div` 
  //margin-top: -60px
  //background-color:  #f7d410;
    font-size:50px;
    cursor: pointer;
    margin-right: 5px;
    //border-radius: 4px;
    //border: none;
    flex: 1;
     display: flex;
     align-items: center;
     //justify-content: space-between;
     //color: #f7d410;
    // padding: 8px 10px 8px 10px;
    //flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     //color: #f7d410;

//margin-top: -60px
    
    
    `;
    

const Language = styled.span`
     font-size: 14px;
     cursor: pointer;
     margin-left: 25px;
`;

/*const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
`*/

const Input = styled.input`
  border: none;
`;




function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

 // const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  //const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const logoutSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem('auth_token'));
    axios.get(`api/customer/logout`).then(res => {
     
      /* if(res.status === 200)
      {
        localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_first_name');
          localStorage.removeItem('auth_last_name',);
          swal("Success", res.data.message, "success");
          navigate('/');
      } */

    })
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      <MenuItem onClick={handleMenuClose}>Setting</MenuItem>

    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  var AuthButtons = '';
  if(!localStorage.getItem('auth_token'))
  {
    AuthButtons = (
      <Form>
      <MenuItems ><Registration/></MenuItems>
              <MenuItems><Login/></MenuItems>
              <MenuItems><Agent/></MenuItems>
       {/* <Link to="/profile" underline="none"><Login/></Link>
        <Link to="/" ><Registration /></Link>
    <Link to="/" ><Agent /></Link>*/}
      </Form>      
    );
  }
  else
  {
    AuthButtons = (

      <>
      <Box sx={{ flexGrow: 1 }}>
      <button type="button" onClick={logoutSubmit} className=" nav-link btn btn-danger btn-sm text-white">Logout</button>
      {renderMobileMenu}
      {renderMenu}

      </Box></>
    );
  }
  

   return (

    
  <Container>

      
        <Wrapper>
          
            <Left>

            
            <Link to='/'><img sx={{ fontSize: "5px",  width: "44px", height: "40px", maxWidth: "44px", maxHeight: "40px"}} src={logo} alt="" onClick={() => Navigate("/")}/></Link> 
           
  
            </Left>
            <Right>
          {/*  <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}  
        </IconButton>
        </Box>*/}
        {renderMenu}
        {AuthButtons}
        <Language>EN</Language>
       
           
           
            {/*<MenuItem to="/login" ><Registration/></MenuItem>
              <MenuItem><Login/></MenuItem>
              <MenuItem><Agent/></MenuItem>
      <Language>EN</Language>*/}
              
               


                
                


            </Right>
        </Wrapper>
    
   
     </Container>

     

   )
 }
 
 export default Navbar
 