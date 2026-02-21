import * as fi from 'react-icons/fi';
import * as si from 'react-icons/si';

const fiIcons = [
    'FiCpu', 'FiLayers', 'FiShield', 'FiZap', 'FiCode', 'FiCloud', 'FiActivity', 'FiArrowRight',
    'FiServer', 'FiMaximize', 'FiRepeat', 'FiCheckCircle', 'FiGlobe', 'FiDatabase'
];

const siIcons = [
    'SiReact', 'SiNodedotjs', 'SiPython', 'SiPostgresql', 'SiDocker', 'SiKubernetes',
    'SiAmazonwebservices', 'SiGooglecloud', 'SiMicrosoftazure', 'SiTailwindcss',
    'SiTypescript', 'SiFlutter', 'SiMongodb', 'SiFirebase', 'SiAngular', 'SiVuedotjs'
];

console.log('Checking FI Icons:');
fiIcons.forEach(icon => {
    if (!fi[icon]) console.error(`Missing FI Icon: ${icon}`);
    else console.log(`Found FI Icon: ${icon}`);
});

console.log('\nChecking SI Icons:');
siIcons.forEach(icon => {
    if (!si[icon]) console.error(`Missing SI Icon: ${icon}`);
    else console.log(`Found SI Icon: ${icon}`);
});
