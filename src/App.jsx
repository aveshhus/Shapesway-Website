import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import Company from './pages/About/Company';
import WhyUs from './pages/About/WhyUs';
import GlobalPresence from './pages/About/GlobalPresence';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/Services/ServiceDetail';
import Industries from './pages/Industries/Industries';
import Technology from './pages/Technology/Technology';
import AIMachineLearning from './pages/Technology/AIMachineLearning';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileAppDevelopment from './pages/Services/MobileAppDevelopment';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment';
import UIUXDesign from './pages/Services/UIUXDesign';
import CloudServices from './pages/Services/CloudServices';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import OurWork from './pages/OurWork/OurWork';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';

import PrivacyPolicy from './pages/Policy/SitePrivacy';
import TermsOfService from './pages/Policy/SiteTerms';
import AIChat from './components/AIChat/AIChat';
import WhatsAppButton from './components/WhatsApp/WhatsAppButton';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/company" element={<Company />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/global-presence-trust" element={<GlobalPresence />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/ai-machine-learning" element={<AIMachineLearning />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
