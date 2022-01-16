import React, { useState, useEffect } from 'react';
import styles from './CommentComponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import axios from "axios";

const CommentComponent = ({post, stateChanger}) => {
  const [newComment, setNewComment] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (response && response.data) {
      stateChanger(response.data);
    }
  }, [response]);

  function addComment(comment) {
    axios.get("/api/comment/" + post.stringId + "?comment=" + comment).then(res => {
      setResponse(res);
    });
  };

  function handleChange(event) {
    setNewComment(event.target.value);
  };

  return (
  <div className={styles.CommentComponent}>
    <p className={styles.TitleText}>💬&nbsp;COMMENTS</p>
    <div className={styles.CommentTextArea}>
      <ul className={styles.CommentUL}>
        {post && post.comments &&
          post.comments.map((comment, index) => {
            return <li key={'comments'+ index} className={styles.CommentListItems}>{comment}</li>;
        })}
      </ul>
    </div>
    <div>
      <input 
        className={styles.CommentEnterInput}
        placeholder='Your opinion matters, share you thoughts here.'
        value={newComment}
        onChange={handleChange}
      ></input>
      <button 
        className={styles.submitBtn}
        onClick={() => addComment(newComment)}
        disabled={newComment === null}
      ><FontAwesomeIcon icon={faPaperPlane} /></button>
    </div>
  </div>
)};

CommentComponent.propTypes = {};

CommentComponent.defaultProps = {};

export default CommentComponent;
