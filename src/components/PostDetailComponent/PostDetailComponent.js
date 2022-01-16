import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostDetailComponent.module.css';

const PostDetailComponent = () => (
  <div className={styles.PostDetailComponent}>
    <div className={styles.PostDetailComponentTopEditBar}>
      <img src={require('./Edit_icon.png')} className={styles.PostDetailComponentEditIcon}/>
      <div className={styles.PostDetailComponentEditText}> 
      Edit
      </div>
    </div>

    <div className={styles.PostDetailComponentImageUpload}>
      {/* TODO: image upload component*/}
    </div>
    <div>
      {/* TODO: Title of the page */}
    </div>
    <div className={styles.PostDetailComponent.OrganizerName}>
      {/* organized by {props.name} */}
    </div>
    <hr/>
    <div className={styles.PostDetailComponent.PriceUpdate}> 
      {/* "${props.chippedIn} / ${props.tartgetAmount}" */}
    </div>
    <div className={styles.PostDetailComponent.DiscriptionTitle}>
      📌 Description
    </div>
    <div className={styles.PostDetailComponent.Discription}>
      {/* {props.description} */}
      <br/>
    </div>
    <div className={styles.PostDetailComponent.Url}>
      🔗 URL 
    </div> 
    <div className={styles.PostDetailComponent.UrlAddress}>
            {/* {props.urlAddress} */}
            <br/>
    </div>

    <div className='eTransferInfo'>
      💸 E-Transfer Information
      <br/>
    </div>
    <div className='phoneNum'>
      "PhoneNumber": 
    </div>
    <div className='emailaddress'>
      "Email Address"

    </div>


  </div>
);





PostDetailComponent.propTypes = {};

PostDetailComponent.defaultProps = {};

export default PostDetailComponent;
