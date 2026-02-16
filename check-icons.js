import * as fa6 from 'react-icons/fa6';

const iconsToCheck = [
    'FaHandHoldingDollar', 'FaLayerGroup', 'FaLightbulb', 'FaHeadset', 'FaArrowTrendUp', 'FaShieldHalved'
];

iconsToCheck.forEach(icon => {
    console.log(`${icon}: ${!!fa6[icon]}`);
});
