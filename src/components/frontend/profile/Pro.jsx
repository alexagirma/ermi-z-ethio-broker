import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { positions } from '@mui/system';

function Pro() {
  return (
    <div>
    <Card sx={{ maxWidth: 800, marginTop: -57.9,  marginLeft: 53, position: 'absolute'}}>
    
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, of squamate reptiles, of squamate reptiles, of squamate reptiles, of 
        </Typography>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 800, marginTop: -49.7,  marginLeft: 53, position: 'absolute'}}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
export default Pro;