import React from 'react';
import {
    TbBrandReact, TbBrandNodejs, TbBrandAws, TbBrandPython,
    TbBrandAngular, TbBrandVue, TbBrandHtml5, TbBrandCss3,
    TbBrandJavascript, TbBrandTypescript, TbBrandMongodb,
    TbBrandMysql, TbBrandFirebase, TbBrandFlutter,
    TbBrandAndroid, TbBrandApple, TbBrandDocker,
    TbCloud as TbBrandGoogleCloud, TbCloud as TbBrandAzure, TbServer as TbServer2,
    TbDeviceMobile, TbCloud as TbCloudComputing, TbCode
} from 'react-icons/tb';
import { SiPostgresql, SiKubernetes } from 'react-icons/si';
import './Technology.css';

const Technology = () => {
    return (
        <div className="technology-page">
            <section className="tech-hero">
                <div className="container">
                    <h1>Our Technology Stack</h1>
                    <p>We leverage the latest and most powerful technologies to build world-class solutions.</p>
                </div>
            </section>

            <section id="frontend" className="tech-section">
                <div className="container">
                    <h2><TbCode /> Frontend Technologies</h2>
                    <div className="tech-grid">
                        <div className="tech-card"><TbBrandReact className="tech-icon" /><span>React</span></div>
                        <div className="tech-card"><TbBrandAngular className="tech-icon" /><span>Angular</span></div>
                        <div className="tech-card"><TbBrandVue className="tech-icon" /><span>Vue.js</span></div>
                        <div className="tech-card"><TbBrandTypescript className="tech-icon" /><span>TypeScript</span></div>
                        <div className="tech-card"><TbBrandHtml5 className="tech-icon" /><span>HTML5</span></div>
                        <div className="tech-card"><TbBrandCss3 className="tech-icon" /><span>CSS3</span></div>
                        <div className="tech-card"><TbBrandJavascript className="tech-icon" /><span>JavaScript</span></div>
                    </div>
                </div>
            </section>

            <section id="backend" className="tech-section">
                <div className="container">
                    <h2><TbServer2 /> Backend Technologies</h2>
                    <div className="tech-grid">
                        <div className="tech-card"><TbBrandNodejs className="tech-icon" /><span>Node.js</span></div>
                        <div className="tech-card"><TbBrandPython className="tech-icon" /><span>Python</span></div>
                        <div className="tech-card"><SiPostgresql className="tech-icon" /><span>PostgreSQL</span></div>
                        <div className="tech-card"><TbBrandMongodb className="tech-icon" /><span>MongoDB</span></div>
                        <div className="tech-card"><TbBrandMysql className="tech-icon" /><span>MySQL</span></div>
                        <div className="tech-card"><TbBrandFirebase className="tech-icon" /><span>Firebase</span></div>
                    </div>
                </div>
            </section>

            <section id="mobile" className="tech-section">
                <div className="container">
                    <h2><TbDeviceMobile /> Mobile Technologies</h2>
                    <div className="tech-grid">
                        <div className="tech-card"><TbBrandFlutter className="tech-icon" /><span>Flutter</span></div>
                        <div className="tech-card"><TbBrandReact className="tech-icon" /><span>React Native</span></div>
                        <div className="tech-card"><TbBrandApple className="tech-icon" /><span>iOS (Swift)</span></div>
                        <div className="tech-card"><TbBrandAndroid className="tech-icon" /><span>Android (Kotlin)</span></div>
                    </div>
                </div>
            </section>

            <section id="cloud" className="tech-section">
                <div className="container">
                    <h2><TbCloudComputing /> Cloud & DevOps</h2>
                    <div className="tech-grid">
                        <div className="tech-card"><TbBrandAws className="tech-icon" /><span>AWS</span></div>
                        <div className="tech-card"><TbBrandGoogleCloud className="tech-icon" /><span>Google Cloud</span></div>
                        <div className="tech-card"><TbBrandAzure className="tech-icon" /><span>Azure</span></div>
                        <div className="tech-card"><TbBrandDocker className="tech-icon" /><span>Docker</span></div>
                        <div className="tech-card"><SiKubernetes className="tech-icon" /><span>Kubernetes</span></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;
