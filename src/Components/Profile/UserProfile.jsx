import React from 'react';
import { Avatar, Button, IconButton, Paper, Typography } from '@material-ui/core';
import { Edit, LocationOn, Phone, Email } from '@material-ui/icons';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <Paper elevation={3} className="profile-paper">
        <div className="profile-header">
          <div className="profile-avatar-container">
            <Avatar className="profile-avatar" src="https://i.pravatar.cc/150" alt="Profile" />
            <IconButton className="profile-edit-icon">
              <Edit />
            </IconButton>
          </div>
          <div className="profile-name-container">
            <Typography variant="h4">John Doe</Typography>
            <Typography variant="h6">Web Developer</Typography>
            <Typography variant="body2" className="profile-location">
              <LocationOn />
              Lagos, Nigeria
            </Typography>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-contact">
            <div className="profile-contact-item">
              <Phone className="profile-contact-icon" />
              <Typography variant="body1" className="profile-contact-text">+234 1234567890</Typography>
            </div>
            <div className="profile-contact-item">
              <Email className="profile-contact-icon" />
              <Typography variant="body1" className="profile-contact-text">johndoe@gmail.com</Typography>
            </div>
          </div>
          <div className="profile-about">
            <Typography variant="h5">About Me</Typography>
            <Typography variant="body1" className="profile-about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat risus nec nulla vestibulum, ut fermentum turpis mattis. Proin vitae massa vel odio viverra euismod at vel libero. Ut bibendum consequat tortor, a euismod ipsum faucibus in. Quisque quis purus gravida, dictum urna at, faucibus elit. Aenean sed ex purus.
            </Typography>
          </div>
          <div className="profile-actions">
            <Button variant="contained" color="primary">Edit Profile</Button>
            <Button variant="outlined" color="primary" className="profile-message-button">Send Message</Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default UserProfile;
