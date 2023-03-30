import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Property.css";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }


function Products() {
  const [products, setProducts] = useState([]);

  const [value, setValue] = React.useState(0);

  const [values, setValues] = React.useState(2);
const [hover, setHover] = React.useState(-1);

  useEffect(() => {
    axios.get(`api/v1/products?new=1`)
      .then(response => {
        console.log(response)
        setProducts(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
   
<section className="property">
    <div className="center">
        <h3>Product</h3>
</div>
    
    <div>
      {products.map(product => (
        <div key={product.id}>
         
          <div className="row">
          <div className="column">
            <div className="single-property">
             <div className="card">
                
                 
                <div className="property-thumb">
                     <div className="property-tag"> {product.new} </div>
                     <Link to='/product'>
                      <img src={product.base_image.small_image_url} alt={product.name} />
                     </Link>
                     
                </div>


                <Box sx={{ width: 150, padding: "0px 0px 0px 80px"}}>
<BottomNavigation
showLabels
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
>
<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
</Box>

                <div className="property-content">
                    <h3>{product.heading}</h3>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{product.span}</span>
                    </div>
                    <span className="price">{product.price}</span>
             </div> 
             <div className="property-footer">
                <ul>
                    <li>
                        <span>{product.size}</span>
                    </li>
                    <li>
                        <img src={`${product.bedImage}`} alt="bed" />
                        <span>{product.bed}</span>
                    </li>
                    <li>
                        <img src={product.bathImage} alt="bath" />
                        <span>{product.bath}</span>
                    </li>
                </ul>


                <Box
sx={{
width: 200,
display: 'flex',
alignItems: 'center',
}}
>
<Rating
name="hover-feedback"
value={values}
precision={0.5}
getLabelText={getLabelText}
onChange={(event, newValues) => {
  setValues(newValues);
}}
onChangeActive={(event, newHover) => {
  setHover(newHover);
}}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
{value !== null && (
<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : values]}</Box>
)}
</Box>


            </div>
        </div>

    </div> 
    </div>
        </div>
      ))}
    </div>
    </section>





      







);



  
}

export default Products;