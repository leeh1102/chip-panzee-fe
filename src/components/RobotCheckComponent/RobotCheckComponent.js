import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RobotCheckComponent.module.css';
import { style } from '@mui/system';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { render } from '@testing-library/react';

class RobotCheckComponent extends Component {

  componentDidMount() {
    loadCaptchaEnginge(6);
  };

  doSubmit = () => {
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) == true) {
      // Submitform
      alert('Captcha Matched');
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = "";
      return true;
    }

    else {
      alert('Captcha Does Not Match');
      document.getElementById('user_captcha_input').value = "";
      return false;
    }
  };

  render() {
<<<<<<< HEAD
=======

>>>>>>> 44c34ee6e6582eb26d1a46611aed27360c238764
    return (<div>
      <div className={styles.contain}>
        <div className="form-group">
          <div className={styles.capt}>
            <LoadCanvasTemplate />
          </div>
          <div className="col mt-3">
            <div>
              <input placeholder="Enter Captcha" className={styles.textinput} id="user_captcha_input" name="user_captcha_input" type="text"></input>
            </div>
<<<<<<< HEAD
=======
            <button class="btn btn-primary" onClick={() => this.doSubmit()}><p>Submit</p></button>
>>>>>>> 44c34ee6e6582eb26d1a46611aed27360c238764
          </div>
        </div>
      </div>
    </div>);
  };
}

RobotCheckComponent.propTypes = {};

RobotCheckComponent.defaultProps = {};

export default RobotCheckComponent;