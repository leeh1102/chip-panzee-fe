import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostCreateComponent.module.css';

const PostCreateComponent = () => (
  <div className={styles.PostCreateComponent}>

    <div>
      <h1 className={styles.PostCreateComponentTitle}>
        WELCOM TO CHIPPIN
      </h1>

      <p className={styles.PostCreateDescription}>The most convenient and fastest way of chipping in with your pals for any gifts 🎁 💰</p>

      <hr className={styles.PostCreateTitleHr} />

    </div>



  </div>
);

PostCreateComponent.propTypes = {};

PostCreateComponent.defaultProps = {};

export default PostCreateComponent;
