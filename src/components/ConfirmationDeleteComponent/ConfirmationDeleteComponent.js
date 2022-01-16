import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConfirmationDeleteComponent.module.css';

const ConfirmationDeleteComponent = () => (
    <div className={styles.ConfirmationDeleteComponent}>
        <div className={styles.checkmark}>
            <img alt='checkmarkimage'></img>
        </div>

        <div className={styles.congrats}>
            <h3>Congratulations!</h3>
        </div>

        <div className={styles.success}>
            <h3>Your post has been successfully been deleted.</h3>
            <h3>See you next time!</h3>
        </div>

    </div>
)

ConfirmationDeleteComponent.propTypes = {};

ConfirmationDeleteComponent.defaultProps = {};

export default ConfirmationDeleteComponent;