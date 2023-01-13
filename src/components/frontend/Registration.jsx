import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleForm from './GoogleForm';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@mui/material/Checkbox';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,

} from "react-router-dom";



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
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      width: '300px',
      backgroundColor: '',
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

`;

function Registration() {

   const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, phoneNumber, password, confirmPassword, );
    handleClose();
  };
  

    return (
      <Container>
      
      <Button onClick={handleOpen}>Sign UP</Button>
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
            Sign UP
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="outlined"
        size="small"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        size="small"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
 <TextField
        label="Phone Number"
        variant="outlined"
        size="small"
        type="phoneNumber"
        required
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />

      <TextField
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
        <TextField
        label="Confirm Password"
        variant="outlined"
        size="small"
        type="confirmPassword"
        required
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

<Checkbox sx={{marginRight: "20px"}}
      label ="I agree to <b>terms and conditions</b>"
      checked={checked} I agree to terms and conditions
      onChange={handleChange}

      inputProps={{ 'aria-label': 'controlled' }}
    />
        
      <div>
        
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
    
            <GoogleForm/>
          </Box>

          
        </Fade>
      </Modal>
   

        </Container>
       
    )
  }
    

export default Registration;


