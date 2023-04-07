import React from 'react';
import Products from '../Components/product/Products';

import Slider from "../Components/slider/Slider"
//import Products from "../../layouts/frontend/Products";
import Sidebar from '../Components/sidebar/Sidebar';
import Footer from '../Components/footer/Footer';
//import Home from '../../layouts/frontend/pages/Home/index/';

import styled from 'styled-components';
import Navbar from '../Components/navbar/Navbar';
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


