import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import styled from 'styled-components'

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Container = styled.div`
  
   max-width: 200px;
    //min-height: 250px;
    display: flex;
    `;


const Title = styled.div`
font-size: 10px;

`;


 function Announcement() {


  return (
    <Container>
    <Card elevation={15} >
    
      <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Title>card title</Title>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
     
    </Card>
    </Container>
  );
}


export default Announcement