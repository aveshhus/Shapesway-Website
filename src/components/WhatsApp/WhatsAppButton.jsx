import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = '+916367181952';
    const defaultMessage = 'Hello Shapesway Technologies, I would like to inquire about your services.';

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    const isBusinessHours = () => {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();

        // Monday to Saturday, 9 AM to 7 PM IST
        return day >= 1 && day <= 6 && hour >= 9 && hour < 19;
    };

    return (
        <div className="whatsapp-wrapper">
            <button
                className="whatsapp-button"
                onClick={openWhatsApp}
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp />
                {isBusinessHours() && <span className="whatsapp-badge">Online</span>}
            </button>

            {isBusinessHours() && !isOpen && (
                <div className="whatsapp-tooltip">
                    <p>Have a question? Chat with us!</p>
                </div>
            )}
        </div>
    );
};

export default WhatsAppButton;
