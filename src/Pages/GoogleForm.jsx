import React, {useEffect, useState} from 'react'
import  jwt_decode from "jwt-decode";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function GoogleForm() {

  const [user, setUser] = useState({

  });

  function handleCallbackResponse(response){
console.log("Encoded JWT ID token: " + response.credential);
var userObject = jwt_decode(response.credential);
console.log(userObject);
setUser(userObject);
document.getElementById("signInDiv").hidden = true; 
  }


  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }


  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id: "237878545214-gi8ksl1n9a33um1ik8hb39prgjtvmu2r.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "medium"}
    );

    google.accounts.id.prompt();
  }, []);
  //if we have no user; sign in button
  //if we have a user; show the log out button
  return (
    <div>
    <div id ="signInDiv">Agent</div>

    {Object.keys(user).length != 0 &&
    <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
    }


    
    { user &&
    <div>
     <Avatar src={user.picture}/>
      <h3>{user.name}</h3>
      <p>
        <strong>{user.id}</strong>
      </p>
      <p>
        <strong>{user.email}</strong></p>
      
    
    
     {/* <img src={user.picture}></img>
      <h3>{user.name}</h3>*/}
    </div>
    }
    </div>
  )
}

export default GoogleForm;