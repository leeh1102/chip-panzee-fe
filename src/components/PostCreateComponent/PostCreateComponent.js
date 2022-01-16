import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCreateComponent.module.css';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Container, IconButton, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera.js';
import Button from '@mui/material/Button';

export default function PostCreateComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      passcode: data.get('passcode'),
    });
  };

  return (

    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h1 className={styles.PostCreateComponentTitle}>
          WELCOME TO CHIPPIN
        </h1>
        <p className={styles.PostCreateDescription}>The most convenient and fastest way of chipping in with your pals for any gifts 🎁 💰</p>

        <Box
          component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

        </Box>
      </Box>

    </Container>

    /* <div className={styles.PostCreateComponent}>
  
      <div>
        <h1 className={styles.PostCreateComponentTitle}>
          WELCOM TO CHIPPIN
        </h1>
  
        <p className={styles.PostCreateDescription}>The most convenient and fastest way of chipping in with your pals for any gifts 🎁 💰</p>
  
        <hr className={styles.PostCreateTitleHr} />
  
      </div> */

    /* <form className={styles.CreatePostForm}> */
    // <Box
    //   className={styles.CreatePostForm}
    //   component="form" sx={{ mt: 3 }}
    //   noValidate
    //   autoComplete="off"
    //   onSubmit={handleSubmit}>
    //   <div className={styles.uploadFile}>
    //     <Input accept="image/*" className={styles.uploadFileIcon} type="file" />
    //     <IconButton color="primary" className={styles.photoCameraIcon} aria-label="upload picture" component="span">
    //       <PhotoCameraIcon />
    //     </IconButton>
    //   </div>
    //   <p>Hi</p>
    // </Box>
    /* </form> */

    // </div>
  );
}

PostCreateComponent.propTypes = {};

PostCreateComponent.defaultProps = {};

// export default PostCreateComponent;
