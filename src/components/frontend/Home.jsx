import React from 'react';
import Test from '../../layouts/frontend/Test';

import Announcement from "../../layouts/frontend/Announcement"
import Navbar from "../../layouts/frontend/Navbar"
import Slider from "../../layouts/frontend/Slider"
import Products from "../../layouts/frontend/Products";
import Sidebar from '../../layouts/frontend/Sidebar';
import Footer from '../../layouts/frontend/Footer';
import Intro from '../../layouts/frontend/Intro/Intro';
import styled from 'styled-components';



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
          <Test />
        </Container>
       <Footer/>
        
        </>
       
    )
  }
    

export default Home;


