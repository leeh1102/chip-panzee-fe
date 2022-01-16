import React from 'react';
import styles from './PostCreateComponent.module.css'
import RobotCheckComponent from '../RobotCheckComponent/RobotCheckComponent';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Input } from '@mui/material';
import { Container, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera.js';
import Button from '@mui/material/Button';

//TODO Function to detect either one of the e-transfer information is filled; if both are not filled, the form can't be submitted.

// TODO Display the captcha when the user submit it 
const submitted = true;

export default function PostCreateComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // const captcha = document.getElementsByClassName('robotCheckComponent')[0];

    // captcha.style.display = 'block';

    console.log({
      name: data.get('userName'),
      passcode: data.get('passcode'),
    });


  };

  return (

    <Container maxWidth="xs">
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
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className={styles.uploadFile}>
                <Input accept="image/*" className={styles.uploadFileInput} id="icon-button-file" type="file" sx={{ display: 'none' }} />
                <IconButton color="primary" className={styles.photoCameraIcon} aria-label="upload picture" component="span">
                  <PhotoCameraIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="userName"
                required
                fullWidth
                id="userName"
                label="YOUR NAME"
                autoFocus
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="passcode"
                label="PASSCODE"
                name="passcode"
                type="password"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="postTitle"
                label="POST TITLE"
                name="postTitle"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fullAmount"
                required
                fullWidth
                id="fullAmount"
                label="FULL AMOUNT"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                autoFocus
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="numOfPals"
                label="# OF PALS"
                name="numOfPals"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="DESCRIPTION"
                placeholder="Description"
                name="description"
                multiline
                fullWidth
                rows={4}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="detailURL"
                label="PRODUCT DETAIL WEBSITE URL"
                name="detailURL"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <p>E-TRANSFER INFORMATION</p>
              <p>*Please provide one of the information below</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                fullWidth
                id="phoneNumber"
                label="PHONE #"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                autoFocus
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                label="EMAIL"
                name="email"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {submitted && <RobotCheckComponent />}
          </Grid>
          <Button
            className={styles.submitButton}
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#C9411D' }}
          >
            READY TO CHIP IN?
          </Button>
        </Box>
      </Box>

    </Container>

  );
}

PostCreateComponent.propTypes = {};

PostCreateComponent.defaultProps = {};

// export default PostCreateComponent;
