import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Profile from "./Pages/profile/Profile";
import Product from "./Pages/productdetails/Product";
import styled from 'styled-components'
import axios from 'axios';
import Aboutus from "./Pages/AboutUs";

//Layout
import RootLayout from "./Layout/RootLayout";
import UserProfile from "./Components/Profile/UserProfile";
import Newsfeed from "./Components/Profile/Newsfeed";
import Messages from "./Components/Profile/Messages";
import Settings from "./Components/Profile/Settings";
import PostAd from "./Components/Profile/postproduct/ProductForm";
import Filters from "./Components/filter/Home/Home";



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
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
          <Route path="product" element={<Product/>} />
          <Route path="aboutus" element={<Aboutus/>} />
          <Route path="filter" element={<Filters/>} />
          </Route>
          <Route path="/profile" element={<Profile/>}>
          <Route index element={<UserProfile />} />
          <Route path="addpost" element={<PostAd/>} />
          <Route path="newsfeed" element={<Newsfeed/>} />
          <Route path="messages" element={<Messages/>} />
          <Route path="settings" element={<Settings/>} />

    </Route>
  </Routes>
  </Router>
        
 

         { /*<Route path="/admin" element={<MasterLayout />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/profile" element={<Profile />}></Route>
           <Route path="/" element={<Home />}></Route>*/}
   
{/*<Route path="/profile" element={<Profile/>}></Route>*/}
{/*<Route path="/pro" element={<ProfilePage/>}></Route>
*/}       
          
          



         



     
      
  
   
    </Container>
  
  
  );
}

export default App;
