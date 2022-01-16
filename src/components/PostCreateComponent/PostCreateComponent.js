import React, { useEffect } from 'react';
import styles from './PostCreateComponent.module.css';
import RobotCheckComponent from '../RobotCheckComponent/RobotCheckComponent';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Input } from '@mui/material';
import { Container, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera.js';
import Button from '@mui/material/Button';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import axios from 'axios';


export default function PostCreateComponent() {
  // const [imgBase64, setImgBase64] = useState([]);
  // const [imgFile, setImgFile] = useState(null);

  // const handleChangeFile = (event) => {
  //   console.log(event.target.files);
  //   setImgFile(event.target.files);
  //   setImgBase64([]);
  //   for (var i = 0; i < event.target.files.length; i++) {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[i]);
  //     reader.onloadend = () => {
  //       const base64 = reader.result;
  //       console.log(base64);
  //       if (base64) {
  //         var base64sub = base64.toString();
  //         setImgBase64(imgBase64 => [...imgBase64, base64sub]);
  //       }
  //     }
  //   }
  //   return event.target.files;
  // }


  const handleSubmit = (event) => {
    // let image = handleChangeFile();
    let user_captcha = document.getElementById('user_captcha_input').value;
    if (validateCaptcha(user_captcha) == true) {
      // Submitform
      if (event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
          name: data.get('userName'),
          passcodeContent: data.get('passcode'),
          description: data.get('description'),
          price: data.get('fullAmount'),
          numberOfPeople: data.get('numOfPals'),
          bankEmail: data.get('email'),
          bankPhone: data.get('phoneNumber')
          // image: image
        };
        console.log(data.get('postImage'));
        axios.post("http://localhost:2000", body)
          .then((res) => {
            alert("Your post is created!");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = "";
      return true;
    }
    else {
      document.getElementById('user_captcha_input').value = "";
      return false;
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
                <input accept="image/*" id="icon-button-file" type="file" name="postImage" multiple="multiple" />
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
          <Grid item xs={12} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <div className={styles.contain}>
                <div className="form-group">
                  <div className={styles.capt}>
                    <LoadCanvasTemplate />
                  </div>
                  <div className="col mt-3">
                    <div>
                      <input placeholder="Enter Captcha" className={styles.textinput} id="user_captcha_input" name="user_captcha_input" type="text"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
