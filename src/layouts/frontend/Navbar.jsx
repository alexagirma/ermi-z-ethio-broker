import { Badge, Button, Switch } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/frontend/img/logo.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,

} from "react-router-dom";
import Registration from '../../components/frontend/Registration';
import Login from '../../components/frontend/Login';
import Agent from '../../components/frontend/Agent';




 
const Container = styled.div`
     z-index:1;
     
     
  `;

const Wrapper = styled.div`
     padding: 10px 30px 13px 8px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: #2badf2;
     color: white;
     height: 70px;
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
     padding: 5px 5px 0px 5px;

     
     
     `;  
    

const MenuItem = styled.div`
  background-color:  #f7d410;
    font-size:30px;
    cursor: pointer;
    margin-left: 25px;
    border-radius: 4px;
    border: none;
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

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

   return (
    
     <Container>

      
        <Wrapper>
          
            <Left>

            
             <img sx={{ fontSize: "5px",  width: "44px", height: "40px", maxWidth: "44px", maxHeight: "40px"}} src={logo} alt="" onClick={() => Navigate("/")}/>
           
  
            </Left>
            <Right>

            
            
              <MenuItem><Registration/></MenuItem>
              <MenuItem><Login/></MenuItem>
              <MenuItem><Agent/></MenuItem>
               

                <Language>EN</Language>
             


            </Right>
        </Wrapper>
    
   {/*  <Switch>
          <Route exact path="../pages/Register">
            <Register/>
          </Route>
          <Route path="../pages/Login">
            <Login />
          </Route>
  </Switch>*/}
     </Container>

   )
 }
 
 export default Navbar
 