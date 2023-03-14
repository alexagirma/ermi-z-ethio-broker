//import { useEffect } from "react";
//import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data/data";
import Product from "./Product";
//import axios from "axios";


const Container = styled.div`
flex: 60%
    padding: 0px;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
    align-content: flex-start;
    margin-top: 12px;
    margin-right: 10em;

    
`;



/*const Title = styled.h1`
    padding: 15px;
    align-items: center;
    justify-content: space-between;
   text-shadow: 2px 2px 4px #000000;  cursor: pointer;
    text-align: center;
    color: #083d20;
    font-style: italic;
    font-size: 40px;
    `;*/


function Products() {
  return (
    <Container elevation={15}>



      {popularProducts.map(item => (
          <Product item={item} key={item.id} />
        ))}
      
     

    </Container>
  )
}

export default Products