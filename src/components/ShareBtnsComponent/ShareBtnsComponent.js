import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShareBtnsComponent.module.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const iconsize = 50;
const emailbody = "Hey come Chip-in with us for a gift!";

const currentlink = window.location.href;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ShareBtnsComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="inherit">Share</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Zoom>
        <div sx={style} className={styles.ShareBtnsComponent}>

          <div className={styles.sharetitle}>
            <h3>Share this link via:</h3>
          </div>
          <div>
            <div className={styles.sharebutton}>
              <EmailShareButton className={styles.sharebutton} url={currentlink}  subject='Chippin with me!' body={emailbody} separator='   '>
                <EmailIcon size={iconsize} round={true} />
              </EmailShareButton>
            </div>
            <div className={styles.sharebutton}>
              <TwitterShareButton url={currentlink}  >
                <TwitterIcon size={iconsize} round={true} />
              </TwitterShareButton>
            </div>
            <div className={styles.sharebutton}>
              <FacebookShareButton url={currentlink} >
                <FacebookIcon size={iconsize} round={true} />
              </FacebookShareButton>
            </div>
            <div className={styles.sharebutton}>
              <WhatsappShareButton url={currentlink} >
                <WhatsappIcon size={iconsize} round={true} />
              </WhatsappShareButton>
            </div>
            <div className={styles.sharebutton}>
              <LinkedinShareButton url={currentlink} >
                <LinkedinIcon size={iconsize} round={true} />
              </LinkedinShareButton>
            </div>

            <div className={styles.copylinktitle}>
              <h3>Or copy the link below:</h3>
            </div>

            <div>
              <u>
                {currentlink}
              </u>
            </div>


          </div>

        </div>
        </Zoom>
      </Modal>
    </div>
  );
}

ShareBtnsComponent.propTypes = {};

ShareBtnsComponent.defaultProps = {};

