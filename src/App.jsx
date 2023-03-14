import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./layouts/admin/Dashboard";
//import Profile from "./layouts/admin/Profile";
import Home from "./components/frontend/Home";
import Registration from "./components/frontend/Registration";
import Login from "./components/frontend/Login";
import Profile from "./components/frontend/profile/Profile";
import ProfilePage from "./components/frontend/profile/ProfilePage";


import ProductList from "./components/frontend/ProductList";
import Product from "./components/frontend/Product";
import styled from 'styled-components'
import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Team from "./layouts/admin/Team";
import Contact from "./layouts/admin/Contact";
import Invoice from "./layouts/admin/Invoice";
import Form from "./layouts/admin/Form";
import Bar from "./layouts/admin/Bar";
import Pie from "./layouts/admin/Pie";

import Navbar from "./layouts/frontend/nav/Navbar";
import Line from "./layouts/admin/Line";
import Faq from "./layouts/admin/Faq";
import Calendar from "./layouts/admin/Calendar";
import Geography from "./layouts/admin/Geography";
import Topbar from "./layouts/admin/Topbar";
import Sidebar from "./layouts/admin/Sidebar";
import axios from 'axios';

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
         
          <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/team" element={<Team />} />
              <Route path="/admin/contacts" element={<Contact />} />
              <Route path="/admin/invoices" element={<Invoice />} />
              <Route path="/admin/form" element={<Form />} />
              <Route path="/admin/bar" element={<Bar />} />
              <Route path="/admin/pie" element={<Pie />} />
              <Route path="/admin/line" element={<Line />} />
              <Route path="/admin/faq" element={<Faq />} />
              <Route path="admin/calendar" element={<Calendar />} />
              <Route path="admin/geography" element={<Geography />} />



         { /*<Route path="/admin" element={<MasterLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/profile" element={<Profile />}></Route>*/}
           <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/productdetail" element={<ProductList/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
<Route path="/pro" element={<ProfilePage/>}></Route>
          <Route path="/nav" element={<Navbar/>}></Route>






        </Routes>
      </Router>
     
          
          
   
    </Container>
  
  
  );
}

export default App;
