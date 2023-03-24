//import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Navbar from "../../../layouts/frontend/navbar/Navbar"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
//import IconButton from '@mui/material/IconButton';
import { blue, green } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import { white } from "material-ui/styles/colors";
import Test from "../../../layouts/frontend/product/Test"
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


  

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
`;
const ImgContainer = styled.div`
   flex: 1;
   max-width: 100%;
   margin-right: 3em;



`;

const Image = styled.img`
   width: 100%;
   height: 70vh;
   object-fit: cover;
   padding-left: 50px

`;
const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;

`;
const Title = styled.h1`
   font-weight: 200;

`;
const Desc = styled.p`
   margin: 20px 0px;

`;
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;

`;


const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;

`;
const Filter = styled.div`
   display: flex;
   align-items: center;


`;
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;

`;
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0px 5px;
   cursor: pointer;

`;
const FilterSize = styled.select`
   margin-left: 10%;
   padding: 7px;

`;
const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;

`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;


`;
{/*const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;


`;
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
    background-color: #497979;
   }



`;*/}




 function Product() {
  const [btnText, setBtnText]=useState("");

  const [images, setImages] = useState([
    'https://placeimg.com/640/480/animals',
    'https://placeimg.com/640/480/arch',
    'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
    'https://placeimg.com/640/480/arch',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    } else if (direction === 'next') {
      setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    }
  };
  return (
    <Container>

        <Navbar/>
       

        <Wrapper>
        <Card sx={{ maxWidth: 1000}}>
          <ImgContainer>
          <div className="product-detail">
          <div className="product-slider">
            <div className="slider-buttons">
              <button className="slider-button" onClick={() => handleSlider('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <img className="slider-image" src={images[currentImageIndex]} alt="Product" />
            <div className="slider-buttons">
              <button className="slider-button" onClick={() => handleSlider('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="image-gallery">
            {images.map((image, index) => (
              <img
                key={index}
                className={`gallery-image ${currentImageIndex === index ? 'active' : ''}`}
                src={image}
                alt={`Product ${index}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
{/*          <Image src="https://purepng.com/public/uploads/large/61502738450rmdyyubo5bupscm2oegdvnn6xb7yysuzcvpydir88l3gohfrpwxfagozxsdigyculn6z7gdtbrn48quwogndauzjsizmpaxijbab.png" />
            */}           <Title>Lorem Ipsum </Title>
           <Desc>
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here,It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here,

            </Desc>
            
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>

              </Filter>
              <Filter>
                <FilterTitle>Brands</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>Toyota</FilterSizeOption>
                  <FilterSizeOption>BMW</FilterSizeOption>
                  <FilterSizeOption>Ford</FilterSizeOption>
                  <FilterSizeOption>Tesla</FilterSizeOption>
                  <FilterSizeOption>Suzuki</FilterSizeOption>
                  <FilterSizeOption>Hyundai</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>

          </ImgContainer>
          </Card>
          <InfoContainer>
           
          
           
            <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 200,
          pl: 5,
          mr:11,
         
        },
      }}
      
    >
    <Paper elevation={2}>
    <Price sx={{f: 'bold'}}>ETB 5,000,000</Price>
    <Button sx={{ bgcolor: white[400], pl: 8, pr: 8,  ml: 1, mt: 3 }} variant="outlined" startIcon={<FontAwesomeIcon icon={CallIcon} />}>
       Request Call Back
      </Button>
    </Paper> 
      <Paper elevation={2}>
      <Card sx={{ maxWidth: 400,pr:15 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
       
        title="Ermi-Z-Ethiopia"
        subheader="September 14, 2016"
      />

      
      </Card>
      <Button onClick={()=>setBtnText("0911811672")} sx={{ bgcolor: green[400], pl: 11, pr: 11,  ml: 7, mt: 2 }} variant="contained" startIcon={<FontAwesomeIcon icon={CallIcon} />}  >
        {btnText ? btnText : "Show Contact"}
      </Button>
      <Button sx={{ bgcolor: white[400], pl: 11, pr: 11,  ml: 7, mt: 2 }} variant="outlined" startIcon={<FontAwesomeIcon icon={CallIcon} />}>
        Start Chat
      </Button>
      
      </Paper>
      <Paper elevation={2}>
      <Box component="ul" aria-labelledby="category-a" sx={{ pl: 6, mb: 10  }}>
      <Typography gutterBottom variant="h5" component="div">
         Tips
        </Typography>
                <li>Don't pay in advance, including for delivery</li>
                <li>Meet the seller at a safe public place</li>
                <li>Inspect the item and ensure it's exactly what you want</li>
                <li>On delivery, check that the item delivered is what was inspected</li>
                <li>Only pay when you're satisfied</li>
              </Box></Paper>
      
     
      
     
    
    </Box>

            <AddContainer>
               <AmountContainer>

                {/*<Remove/>
                <Amount>1</Amount>
                <Add/>*/}

               </AmountContainer>

             {/*  <Button>ADD TO CART</Button>
               */}
            </AddContainer>

          </InfoContainer>
         
        </Wrapper>
        <Typography sx={{ pl: 8, }} gutterBottom variant="h5" component="div">
        Related Product
       </Typography>
       <Test/>
      

       
      
    </Container>
  )
}


export default Product;
