import * as React from 'react';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import "react-pro-sidebar/dist/css/styles.css";

import Sidebar from '../../Components/Profile/Sidebar';
import { BrowserRouter as  Outlet } from 'react-router-dom';
//import '../../../App.css';
import './profile.css';
import Navbar from '../../Components/navbar/Navbar';
 





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const preventDefault = (event) => event.preventDefault();


 function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <>
         <Navbar/>

    <div sx={{display: 'flex', justifyContent: 'space-between', flexDirection: "row" }}>
    {/*<Card sx={{ maxWidth: 280, marginTop: '40px', marginLeft: '100px',  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500],  width: 100, height: 100, margin: '1.0px 10px 0.5px 70px',justifyContent: "center", display: "flex" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        />
        <CardHeader sx={{marginLeft: "50px", paddingTop: "5px",  fontWeight: 'bold'}}
        title="Ermi z Ethiopia"
        subheader="September 14, 2016"
      />
    
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
    <ProductForm sx ={{ml: 5}}></ProductForm>*/}



    <div className="profile">
    <div className="container">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  

  

</div>
    {/*<Card sx={{ maxWidth: 280, height: 47, marginTop: '5px', marginLeft: '100px'}}>
      <CardContent >
        
        <Typography variant="body2" color="text.secondary" >
          Follower
        
        </Typography>
        </CardContent>
        </Card>
        <Card sx={{ maxWidth: 280, height: 47, marginTop: '5px', marginLeft: '100px'}}>
        <CardContent>

        <Typography variant="body2" color="text.secondary">
          my post 
        </Typography>
        </CardContent>
        </Card>
        <Card sx={{ maxWidth: 280, height: 45, marginTop: '5px', marginLeft: '100px'}}>
        <CardContent>

        <Typography variant="body2" color="text.secondary">
          Feedback 
        </Typography>
        </CardContent>
        </Card>
        <Card sx={{ maxWidth: 280,  height: 45, marginTop: '5px', marginLeft: '100px', }}>
        <CardContent>

        <Typography variant="body2" color="text.secondary">
           Frequently Asked Questions
           </Typography>
      </CardContent>
      
    </Card>*/}
      {/*<Pro/>*/}
    </div>
    
    </>
  );
}

export default RecipeReviewCard;
