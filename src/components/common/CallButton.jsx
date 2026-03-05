import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './CallButton.css';

const CallButton = () => {
    const phoneNumber = '+916367181952';

    return (
        <div className="call-wrapper">
            <a
                href={`tel:${phoneNumber}`}
                className="call-button"
                aria-label="Call us"
            >
                <FaPhoneAlt />
            </a>
            <div className="call-tooltip">
                <p>Talk to an Expert</p>
            </div>
        </div>
    );
};

export default CallButton;
