import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import GoogleForm from './GoogleForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,

} from "react-router-dom";
import Registration from './Registration';


const useStyles = makeStyles(theme => ({
  root: {
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
      Height: '50px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1.5),
      width: '300px',
    },
  },
}));



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const Container = styled.div`
   display: flex;
   width: 100%
   background-color: #050c10;
   color: #fdae5c;

`;

function Login() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles();
    // create state variables for each input
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(email, password);
      handleClose();
    };
  

    return (
      <Container>
      
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div>
            <Button sx={{marginTop: "-3.5rem", marginLeft: "19.5rem"}}  onClick={handleClose}>
            ❌
        </Button>
            </div>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              LOGIN PAGE
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit}>
      
      <TextField
        label="Email"
        size='small'
        maxlength="NaN"
        autoComplete='off'
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        size="small"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </form>
    <div>Don't have an account? <Registration/> </div>

            <GoogleForm/>
          </Box>
        </Fade>
      </Modal>
   

        </Container>
       
    )
  }
    

export default Login;


