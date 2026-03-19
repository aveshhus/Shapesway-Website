import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Lazy loaded pages to optimize bundle size
const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/About/AboutUs'));
const Company = lazy(() => import('./pages/About/Company'));
const WhyUs = lazy(() => import('./pages/About/WhyUs'));
const GlobalPresence = lazy(() => import('./pages/About/GlobalPresence'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Services = lazy(() => import('./pages/Services/Services'));
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'));
const Industries = lazy(() => import('./pages/Industries/Industries'));
const Technology = lazy(() => import('./pages/Technology/Technology'));
const AIMachineLearning = lazy(() => import('./pages/Technology/AIMachineLearning'));
const WebDevelopment = lazy(() => import('./pages/Services/WebDevelopment'));
const MobileAppDevelopment = lazy(() => import('./pages/Services/MobileAppDevelopment'));
const SoftwareDevelopment = lazy(() => import('./pages/Services/SoftwareDevelopment'));
const UIUXDesign = lazy(() => import('./pages/Services/UIUXDesign'));
const CloudServices = lazy(() => import('./pages/Services/CloudServices'));
const DigitalMarketing = lazy(() => import('./pages/Services/DigitalMarketing'));
const OurWork = lazy(() => import('./pages/OurWork/OurWork'));
const ProjectDetail = lazy(() => import('./pages/OurWork/ProjectDetail'));
const PortfolioPage = lazy(() => import('./pages/Portfolio/PortfolioPage'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/Policy/SitePrivacy'));
const TermsOfService = lazy(() => import('./pages/Policy/SiteTerms'));

// Eagerly loaded components for initial render
import AIChat from './components/AIChat/AIChat';
import WhatsAppButton from './components/WhatsApp/WhatsAppButton';
import CallButton from './components/common/CallButton';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/global.css';

// Fallback loader
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#050510', color: '#fff' }}>
    <div className="loader" style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/our-work/:id" element={<ProjectDetail />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <AIChat />
        <WhatsAppButton />
        <CallButton />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
