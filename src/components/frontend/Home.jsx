import React from 'react';
import Test from '../../layouts/frontend/product/Test';

import Announcement from "../../layouts/frontend/Announcement"
import Navbar from "../../layouts/frontend/navbar/Navbar"
import Slider from "../../layouts/frontend/slider/Slider"
//import Products from "../../layouts/frontend/Products";
import Sidebar from '../../layouts/frontend/sidebar/Sidebar';
import Footer from '../../layouts/frontend/footer/Footer';
import Intro from '../../layouts/frontend/Intro/Intro';
//import Home from '../../layouts/frontend/pages/Home/index/';

import styled from 'styled-components';
import Product from './productdetails/Product';
import Products from '../../layouts/frontend/product/Products';
//import AppHeader from '../../layouts/frontend/AppHeader/AppHeader';



const Container = styled.div`
   display: flex;
   width: 100%
   background-color: #0999e6;

`;
const wrap = styled.div`
   display: flex;
   width: 100%
   background-color: #0999e6;

`;


function Home() {
    return (
      <>

        <Navbar/>
        
      
        <Slider/>
      

        <Container>
        <Sidebar/>
         <Products/>
        </Container>
       <Footer/>
     
        
        </>
       
    )
  }
    

export default Home;


