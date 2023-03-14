import React, { Fragment, useState } from 'react';
import { popularProducts } from "../../../data/data";
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


function Test()     {
    const [details, setDetails] = useState(popularProducts)

    const [value, setValue] = React.useState(0);

    const [values, setValues] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

    return(
    <Fragment>
        <section className="property">
          {/*  <div className="center">
                <h3>Product</h3>
    </div>*/}
            <div className="row">

{
    details.map((detail)=>{
        return(

<div className="column">
                    <div className="single-property">
                     <div className="card">
                        
                         
                        <div className="property-thumb">
                             <div className="property-tag"> For Sale </div>
                             <img src={detail.img} alt="Palace"/>
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
                            <h3>{detail.heading}</h3>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>{detail.span}</span>
                            </div>
                            <span className="amount">{detail.amount}</span>
                     </div> 
                     <div className="property-footer">
                        <ul>
                            <li>
                                <span>{detail.size}</span>
                            </li>
                            <li>
                                <img src={`${detail.bedImage}`} alt="bed" />
                                <span>{detail.bed}</span>
                            </li>
                            <li>
                                <img src={detail.bathImage} alt="bath" />
                                <span>{detail.bath}</span>
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

        )
    })
}
<Stack spacing={2}>
      
      <Pagination count={10} color="secondary" />
     
    </Stack>

                
            </div>

         {/*  <div className="More-property">
                <a className="property" href="#">More Properties</a>
</div>*/}
        </section>
    </Fragment>

)


}
export default Test;