import { Badge, Switch } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,

} from "react-router-dom";
import Registration from '../../components/frontend/Registration';
import Login from '../../components/frontend/Login';
//import Register from '../pages/Register';
//import Login from '../pages/Login';



 
const Container = styled.div`
     height: 90px;
     
     
  `;

const Wrapper = styled.div`
     padding: 3px 30px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: #0999e6;
     color: white;
     //font-weight: bold;
     
       `;

const Left = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     `;

const Logo = styled.h1`
font-weight: bold;
`;

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

     `;  

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
    `;   

const Language = styled.span`
     font-size: 14px;
     cursor: pointer;
     margin-left: 25px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
`

const Input = styled.input`
  border: none;
`;

function Navbar() {
   return (
    
     <Container>
      
        <Wrapper>
            <Left>
            
             <Logo><img src="../assets/frontend/img/logo.png" alt="logo" onClick={() => Navigate("/")}/></Logo>

             
            </Left>
            <Right>

              <MenuItem ><Registration/></MenuItem>
              <MenuItem><Login/></MenuItem>
              <MenuItem>AGENT</MenuItem>
               

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
 