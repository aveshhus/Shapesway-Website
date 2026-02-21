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

const results = { fi: {}, si: {} };

fiIcons.forEach(icon => {
    results.fi[icon] = !!fi[icon];
});

siIcons.forEach(icon => {
    results.si[icon] = !!si[icon];
});

console.log(JSON.stringify(results, null, 2));
