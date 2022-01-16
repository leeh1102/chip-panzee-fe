import React, { useState } from 'react';
import styles from './PostDetailComponent.module.css';
import ShareIcon from '@mui/icons-material/Share'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentComponent from '../CommentComponent/CommentComponent.js';
import Button from '@mui/material/Button';
import ShareBtnsComponent from '../ShareBtnsComponent/ShareBtnsComponent';
import axios from "axios";
import Logo from '../../assets/logo.png';

const PostDetailComponent = () => {
  const [passcode, setPasscode] = useState("");
  const [post, setPost] = useState(null);
  function checkPasscode(passcode) {
    axios.get("http://localhost:2000/checkpasscode/URHCFL?passcode=" + passcode).then(res => {
      if (res.data.code === 200) {
        setButtonPopup(false);
        getPost();
      } else {
        alert("Wrong Passcode");
      }
    });
  };

  function handleChange(event) {
    setPasscode(event.target.value);
  };

  async function getPost() {
    const response = await axios.get("http://localhost:2000/URHCFL?passcode=asdddd");
    setPost(response.data);
  }


  const [buttonPopup, setButtonPopup] = useState(true);
  return (<div className={styles.PostDetailComponent}>
    <img src={Logo} alt='Chippin Logo' id='logo' className={styles.PostDetailComponentLogo}/>

    {buttonPopup && <div className={styles.PasscodePopup}>
      <p>Enter your passcode</p>
      <input type="password"
       className={styles.PasscodePopupInput} 
       value={passcode}
       onChange={handleChange}/>
      <button onClick={() => checkPasscode(passcode)}>Come on in!</button>
    </div>}

    <div className={styles.PostDetailComponentImageUpload}>
      {/* TODO: image upload component*/}
    </div>
    <div className={styles.PostDetailComponentName}>
      {post && post.name &&
        <h1>{post.name}</h1>
      }
      {!post &&
      <h1>DEMO CHIPPIN POST PLACEHOLDER</h1>
      }
    </div>
    <div className={styles.PostDetailComponentOrganizerName}>
      {post && post.owner &&
        <p>Organized by {post.owner}</p>
      }
      {!post &&
        <p>Organized by CHIP-PINZEE</p>
      }
    </div>
    <hr />
    <div className={styles.PostDetailComponentPriceUpdate}>
      <div className={styles.PostDetailComponentPriceLeft}>
        <h4>Chip-in Amount</h4>
        {post && post.price &&
          <h1>&#36;{Math.ceil(post.price * 100 / post.numberOfPeople) / 100}</h1>
        }
        {!post &&
          <h1>&#36;99.99</h1>
        }
      </div>
      <div className={styles.PostDetailComponentPriceRight}>
        <h4>Target Amount</h4>
        {post && post.price &&
          <h1>&#36;{post.price}</h1>
        }
        {!post &&
          <h1>&#36;9999.99</h1>
        }
      </div>
    </div>
    <div className={styles.PostDetailComponentDescriptionTitle}>
      📌 Description <br />
      {post && post.description &&
        <p>{post.description}</p>
      }
      {!post &&
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus ipsum velit, maximus a nunc a, aliquet elementum felis.
          Nullam ut ullamcorper justo, sit amet cursus risus. Curabitur 
          nunc dui, eleifend eget lobortis at, aliquam id tellus. 
          Vestibulum sed gravida ex. Phasellus massa nisi, ullamcorper 
          non pretium ac, mollis vel purus. Suspendisse vitae purus ornare, 
          ullamcorper est in, tincidunt tellus. Duis volutpat nulla commodo 
          maximus placerat. Vestibulum convallis quis lacus ut ullamcorper. 
          Aenean lorem elit, ultricies quis tellus congue, eleifend dignissim 
          metus.</p>
      }
    </div>

    <div className={styles.PostDetailComponentUrl}>
      🔗 URL
      {post && post.url &&
        <p>{post.url}</p>
      }
      {!post &&
        <p>EXAMPLE.COM/EXAMPLE</p>
      }
    </div>

    <div className={styles.PostDetailComponentETransferInfoSection}>
      💸 E-Transfer Information
      <div className={styles.PostDetailComponentInfo}>
        <div className={styles.PostDetailComponentPhoneNum}>
          {post && post.bankPhone &&
            <h5><FontAwesomeIcon icon={faMobileAlt} />&nbsp;{post.bankPhone}</h5>
          }
          {!post &&
            <h5><FontAwesomeIcon icon={faMobileAlt} />&nbsp;6046046004</h5>
          }
        </div>
        <div className={styles.PostDetailComponentEmailaddress}>
          {post && post.bankEmail &&
            <h5><FontAwesomeIcon icon={faEnvelope} />&nbsp;{post.bankEmail}</h5>
          }
          {!post&&
            <h5><FontAwesomeIcon icon={faEnvelope} />&nbsp;EXAMPLE@EXAMPLE.COM</h5>
          }
        </div>
      </div>
    </div>
    
    <div className={styles.PostDetailComponentEditText}>
        <Button variant="outlined" startIcon={<ShareIcon />}>
          <ShareBtnsComponent />
        </Button>
      </div>

    <CommentComponent post={post} stateChanger={setPost} />
  </div>);
}




PostDetailComponent.propTypes = {};

PostDetailComponent.defaultProps = {};

ShareBtnsComponent.propTypes = {};

ShareBtnsComponent.defaultProps = {};

export default PostDetailComponent;
