import React, { useState } from 'react';
import styles from './PostDetailComponent.module.css';
import ShareIcon from '@mui/icons-material/Share'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentComponent from '../CommentComponent/CommentComponent.js';
import Popup from './PassCodeModal';
import Button from '@mui/material/Button';
import ShareBtnsComponent from '../ShareBtnsComponent/ShareBtnsComponent';


const PostDetailComponent = ({post, setPost}) => {
  const [buttonPopup, setButtonPopup] = useState(true);
  return (<div className={styles.PostDetailComponent}>
    <div className={styles.PostDetailComponentTopEditBar}>
      <div className={styles.PostDetailComponentEditText}> 
      <Button variant="outlined" startIcon={<ShareIcon/>}>
        <ShareBtnsComponent/>
      </Button>
      </div>
    </div>

    <Popup trigger={buttonPopup}>
          <div className={styles.PasscodePopup}>
            <p>Enter your passcode</p>
            <input type="password" className={styles.PasscodePopupInput}/>
            <button>Come on in!</button>
          </div>
    </Popup>

    <div className={styles.PostDetailComponentImageUpload}>
      {/* TODO: image upload component*/}
    </div>
    <div>
      {post && post.name &&
        <h1>{post.name}</h1>
      }
    </div>
    <div className={styles.PostDetailComponentOrganizerName}>
      {post && post.owner &&
        <p>Organized by {post.owner}</p>
      }
    </div>
    <hr/>
    <div className={styles.PostDetailComponentPriceUpdate}> 
      <div className={styles.PostDetailComponentPriceLeft}> 
        <h4>Chip-in Amount</h4>
        {post && post.price &&
          <h1>&#36;{Math.ceil(post.price * 100 / post.numberOfPeople) / 100}</h1>
        }
      </div>
      <div className={styles.PostDetailComponentPriceRight}>
        <h4>Target Amount</h4>
        {post && post.price &&
          <h1>&#36;{post.price}</h1>
        }
      </div>
    </div>
    <div className={styles.PostDetailComponentDescriptionTitle}>
      📌 Description <br/>
      {post && post.description &&
        <p>{post.description}</p>
      }
    </div>

    <div className={styles.PostDetailComponentUrl}>
      🔗 URL
      {post && post.url &&
        <p>{post.url}</p>
      }
    </div> 
    <div className={styles.PostDetailComponentUrlAddress}>
            {/* {props.urlAddress} */}
            <br/>
    </div>

    <div className={styles.PostDetailComponentETransferInfoSection}>
      💸 E-Transfer Information
      <div className={styles.PostDetailComponentInfo}>
        <div className={styles.PostDetailComponentPhoneNum}>
          {post && post.bankPhone &&
            <h5><FontAwesomeIcon icon={faMobileAlt} />&nbsp;{post.bankPhone}</h5>
          }
        </div>
        <div className={styles.PostDetailComponentEmailaddress}>
          {post && post.bankEmail &&
            <h5><FontAwesomeIcon icon={faEnvelope} />&nbsp;{post.bankEmail}</h5>
          }
        </div>
      </div>
    </div>
    <CommentComponent post={post} stateChanger={setPost} />
  </div>);
}




PostDetailComponent.propTypes = {};

PostDetailComponent.defaultProps = {};

export default PostDetailComponent;
