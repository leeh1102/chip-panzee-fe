import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';

const CommentComponent = () => {
  return (
  <div className={styles.CommentComponent}>
    <p className={styles.TitleText}><FontAwesomeIcon icon={faCommentDots} />&nbsp;COMMENTS</p>
    <div className={styles.CommentTextArea}>
      <ul>
      {items.map((item, index)=>{
          return <li key={index}>{item}</li>
      })}
    </ul>
    </div>
  </div>
)};

CommentComponent.propTypes = {};

CommentComponent.defaultProps = {};

export default CommentComponent;
