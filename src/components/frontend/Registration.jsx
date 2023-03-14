import React, { useState } from 'react';
import styled from 'styled-components';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleForm from './GoogleForm';
import { FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@mui/material/Checkbox';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

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
    width: 320,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    border: "none",
  };



const Container = styled.div`
   display: flex;
   width: 100%
   background-color: #050c10;

`;

function Registration() {
{/*const [inputs, setInputs] = useState({
  terms: false,
});

//input change func
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: [e.target.value],
  }));
}

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
    axios.post('/api/register').then(res =>{

    });
  };*/}
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
  terms: false,
});




//input change func
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: [e.target.value],
  }));
}


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[registerInput, setRegister] = useState({
    firstname: '',
    lastname: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({...registerInput, [e.target.name]: e.target.value});
  }  

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      phone_number: registerInput.phone_number,
      email: registerInput.email,
      password: registerInput.password,
      confirm_password: registerInput.confirm_password,
    }
     axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/v1/customer/register`, data).then(res =>{
        if(res.data.status === 200)
        {

          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_firstname', res.data.firstname);
          localStorage.setItem('auth_lastname', res.data.lastname);
          swal("Success", res.data.message, "success");
          navigate('/');

        }
        else
        {
         setRegister({...registerInput, error_list: res.data.validation_errors});
        }
      });
    });
  }
   

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
            <Button sx={{marginTop: "-3.5rem", marginLeft: "19rem"}}  onClick={handleClose}>
            ❌
        </Button>
            </div>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Sign UP
            </Typography>
            <form /*className={classes.root}*/ onSubmit={registerSubmit}>
      <TextField
        label="First Name"
        variant="outlined"
        size="small"
        name="firstname"
        //required
        value={registerInput.firstname}
        onChange={handleInput}
        helperText={registerInput.error_list.firstname}

        /*value={firstName}*/
          
        /*onChange={e => setFirstName(e.target.value)}*/
      />
      <TextField
        label="Last Name"
        variant="outlined"
        size="small"
        name="lastname"
        //required
        value={registerInput.lastname}
        onChange={handleInput}
        helperText={registerInput.error_list.lastname}
       /* value={lastName}
        onChange={e => setLastName(e.target.value)}*/
      />
 <TextField
        label="Phone Number"
        variant="outlined"
        size="small"
        name="phone_number"
        type="phone_number"
        value={registerInput.phone_number}
        onChange={handleInput}
        helperText={registerInput.error_list.phone_number}
        //required
        /*value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}*/
      />

      <TextField
        label="Email"
        variant="outlined"
        size="small"
        name="email"
        type="email"
        value={registerInput.email}
        onChange={handleInput}
        helperText={registerInput.error_list.email}
        /*value={email}
        onChange={e => setEmail(e.target.value)}*/
      />
      
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        type="password"
        name="password"
        //required
        value={registerInput.password}
        onChange={handleInput}
        helperText={registerInput.error_list.password}
        /*value={password}
        onChange={e => setPassword(e.target.value)}*/
      />
        <TextField
        label="Confirm Password"
        variant="outlined"
        size="small"
        type="confirm_password"
        name="confirm_password"
        //required
        value={registerInput.confirm_password}
        onChange={handleInput}
        helperText={registerInput.error_list.confirm_password}
        /*value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}*/
      />
<br/>
<FormGroup sx={{paddingRight: "5px"}} >
     <FormControlLabel
      label ="I agree to terms and conditions"
      control= {
      <Checkbox
      onChange={() =>
      setInputs((prevState) =>({
        ...prevState,
        terms: !inputs.terms,
      }))
    }
    /> 
  }

      />
    </FormGroup>
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


