const tb = require('react-icons/tb');
const si = require('react-icons/si');
const fa = require('react-icons/fa');

const icons = [
    'TbHome', 'TbBuilding', 'TbTarget', 'TbWorld',
    'TbBrain', 'TbCode', 'TbDeviceMobile', 'TbPalette', 'TbCloud', 'TbVolume',
    'TbCpu', 'TbFileText', 'TbMessage',
    'TbLayoutGrid', 'TbServer', 'TbRocket',
    'TbMoodSmile', 'TbBriefcase', 'TbSchool',
    'TbBrandReact', 'TbBrandNodejs', 'TbBrandAws',
    'TbUsers',
    'TbBrandFacebook', 'TbBrandInstagram', 'TbBrandLinkedin',
    'SiFlutter',
    'FaBars', 'FaTimes', 'FaChevronDown'
];

icons.forEach(name => {
    const exists = !!tb[name] || !!si[name] || !!fa[name];
    console.log(`${name}: ${exists}`);
});
