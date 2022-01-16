import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './ConfirmationDeleteComponent.module.css';

const ConfirmationDeleteComponent = () => (
    <div className={styles.ConfirmationDeleteComponent}>
        <div className={styles.checkmark}>
            <img alt='checkmarkimage'></img>
        </div>

        <div className={styles.congrats}>
            <FontAwesomeIcon icon={faGlassCheers} /><h3>Congratulations!</h3><FontAwesomeIcon icon={faGlassCheers} />
        </div>

        <div className={styles.success}>
            <h3>Your post has been successfully been deleted.</h3>
            <h3>See you next time!</h3><FontAwesomeIcon icon={faWaveSquare} />
        </div>

    </div>
)

ConfirmationDeleteComponent.propTypes = {};

ConfirmationDeleteComponent.defaultProps = {};

export default ConfirmationDeleteComponent;