import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShareBtnsComponent.module.css';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

const iconsize = 50;
const emailbody = "Hey come Chip-in with us for a gift!";

const currentlink = window.location.href;

const ShareBtnsComponent = () => (
  <div className={styles.ShareBtnsComponent}>

    <div className={styles.sharetitle}>
      <h3>Share this link via</h3>
    </div>
    <div>
      <div className={styles.sharebutton}>
        <EmailShareButton className={styles.sharebutton} url="www.google.ca" subject='Chippin with me!' body={emailbody} separator='   '>
          <EmailIcon size={iconsize} round={true} />
        </EmailShareButton>
      </div>
      <div className={styles.sharebutton}>
        <TwitterShareButton url="www.google.ca" >
          <TwitterIcon size={iconsize} round={true} />
        </TwitterShareButton>
      </div>
      <div className={styles.sharebutton}>
        <FacebookShareButton url="www.google.ca" >
          <FacebookIcon size={iconsize} round={true} />
        </FacebookShareButton>
      </div>
      <div className={styles.sharebutton}>
        <InstapaperShareButton url="www.google.ca">
          <InstapaperIcon size={iconsize} round={true} />
        </InstapaperShareButton>
      </div>
      <div className={styles.sharebutton}>
        <WhatsappShareButton url="www.google.ca">
          <WhatsappIcon size={iconsize} round={true} />
        </WhatsappShareButton>
      </div>
      <div className={styles.sharebutton}>
        <LinkedinShareButton url='www.google.ca'>
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
);

ShareBtnsComponent.propTypes = {};

ShareBtnsComponent.defaultProps = {};

export default ShareBtnsComponent;
