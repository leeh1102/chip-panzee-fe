import React from 'react';
import './PassCodeModal.css';

function Popup(props) {
    return (props.trigger)?(
        <div className='PopUp'>
            <div className='PopUpInner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default Popup