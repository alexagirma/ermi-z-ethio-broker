import React from 'react';
import Products from '../../layouts/frontend/product/Products';

import Navbar from "../../layouts/frontend/navbar/Navbar"
import Slider from "../../layouts/frontend/slider/Slider"
//import Products from "../../layouts/frontend/Products";
import Sidebar from '../../layouts/frontend/sidebar/Sidebar';
import Footer from '../../layouts/frontend/footer/Footer';
//import Home from '../../layouts/frontend/pages/Home/index/';

import styled from 'styled-components';
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


