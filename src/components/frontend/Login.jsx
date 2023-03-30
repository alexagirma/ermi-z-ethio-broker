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
  useNavigate,
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
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
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
    //cursor: "pointer",
    borderRadius: 3,
    border: "none",
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

    const navigate = useNavigate();


    const classes = useStyles();
    // create state variables for each input
    
  {/*}  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(email, password);
      handleClose();
    };*/}
    const [loginInput, setLogin] = useState({
      email: '',
      password: '',
      error_list: [],
    });

    const handleInput = (e) => {
      e.persist();
      setLogin({...loginInput, [e.target.name]: e.target.value});
       
    }

    const loginSubmit = (e) => {
      e.preventDefault();

      const data = {
        token: true,
        email: loginInput.email,
        password: loginInput.password,
      }
      axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get(`api/customer/login`, data).then(res =>{
        //console.log(res.data.data.id);
        if(res.status === 200){
          //localStorage.setItem('auth_token', res.data.token);
          //localStorage.setItem('auth_first_name', res.data.data.first_name);
          //localStorage.setItem('auth_last_name', res.data.data.last_name);
        swal("Success", res.data.message, "success");
          navigate('/profile');
          // console.log(res.status);
          // console.log(res.data.token);
        }
        else if(res.status === 401)
        {
          swal("warning", res.data.message, "warning");
        }
        else
        {
          setLogin({...loginInput, error_list: res.data.validation_errors })
        }
        
        // if(res.status === 200)
        // {

        //   localStorage.setItem('auth_token', res.data.token);
        //   localStorage.setItem('auth_first_name', res.data.first_name);
        //   localStorage.setItem('auth_last_name', res.data.last_name);
        // swal("Success", res.message, "success");
        //   navigate('/profile');

        // }
        // else if(res.data.status === 401)
        // {
        //   swal("warning", res.data.message, "warning");
        // }
        // else
        // {
        //   setLogin({...loginInput, error_list: res.data.validation_errors })
        // }
      });

      });
    }
  


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
          <Box sx={style} >
          <div>
            <Button sx={{marginTop: "-3.5rem", marginLeft: "17rem"}}  onClick={handleClose}>
            ❌
        </Button>
            </div>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              LOGIN PAGE
            </Typography>
            <form className={classes.root} onSubmit={loginSubmit}>
      
      <TextField
        label="Email"
        size='small'
        maxlength="NaN"
        autoComplete='off'
        variant="outlined"
        type="email"
        name="email"
        required
        value={loginInput.email}
        onChange={handleInput}
        //helperText={loginInput.error_list.email}

      />
      <TextField
        label="Password"
        size="small"
        variant="outlined"
        type="password"
        name="password"

        required
        value={loginInput.password}
        onChange={handleInput}
        helperText={loginInput.error_list.password}

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


