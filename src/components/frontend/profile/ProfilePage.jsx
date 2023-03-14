import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  profileImage: {
    width: 150,
  },
  }
  
  function ProfilePage() {
    return (
      <div style={styles.container}>
        <div style={styles.profile}>
          <img src="https://via.placeholder.com/150" alt="Profile Picture" style={styles.profileImage} />
          <div style={styles.profileInfo}>
            <h1 style={styles.profileName}>John Doe</h1>
            <p style={styles.profileTitle}>Web Developer</p>
            <p style={styles.profileEmail}>john.doe@example.com</p>
            <p style={styles.profileAddress}>123 Main St, Anytown USA</p>
          </div>
        </div>
      </div>
    );
  }
  

export default ProfilePage;
