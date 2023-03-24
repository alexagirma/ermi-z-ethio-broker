import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import Profile from "./layouts/admin/Profile";
import Home from "./components/frontend/Home";
import Registration from "./components/frontend/Registration";
import Login from "./components/frontend/Login";
import Profile from "./components/frontend/profile/Profile";
import ProfilePage from "./components/frontend/profile/ProfilePage";


import ProductList from "./components/frontend/ProductList";
import Product from "./components/frontend/productdetails/Product";
import styled from 'styled-components'

import Navbar from "./layouts/frontend/nav/Navbar";

import axios from 'axios';
import ProductForm from "./components/frontend/ProductForm";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accepts'] = 'application/json'; 
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});




  
   const Container = styled.div`
  background-color: #ecf6fb7f;
   `;
   
   function App() {
    
   


  return (    
 
             
    <Container>
   
      <Router>
        <Routes>
         
        


         { /*<Route path="/admin" element={<MasterLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/profile" element={<Profile />}></Route>*/}
           <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/productdetail" element={<ProductList/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
{/*<Route path="/profile" element={<Profile/>}></Route>*/}
<Route path="/pro" element={<ProfilePage/>}></Route>
          <Route path="/nav" element={<Navbar/>}></Route>
          <Route path="/prod" element={<ProductForm/>}></Route>



         



        </Routes>
      </Router>
     
          
      <Profile/>
   
    </Container>
  
  
  );
}

export default App;
