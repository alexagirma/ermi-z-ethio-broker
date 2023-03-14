import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Navbar from '../../../layouts/frontend/nav/Navbar';



import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import HouseIcon from '@mui/icons-material/House';
import InventoryIcon from '@mui/icons-material/Inventory';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Pro from './Pro';
import Footer from '../../../layouts/frontend/footer/Footer';



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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Navbar/>
    <div sx={{display: 'flex', justifyContent: 'space-between', flexDirection: "column" }}>
    <Card sx={{ maxWidth: 280, marginTop: '40px', marginLeft: '100px',  }}>
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
    <Card sx={{ maxWidth: 280, height: 47, marginTop: '5px', marginLeft: '100px'}}>
    
      <CardContent >
        
        <Typography variant="body2" color="text.secondary" >
          Followers 
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
      
    </Card>
      <Pro/>
    </div>
    
    </>
  );
}