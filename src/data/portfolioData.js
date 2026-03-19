import port01 from '../assets/portfolio/port01.png';
import selectionImg from '../assets/portfolio/selection.png';
import dietDashboard from '../assets/portfolio/diet-plus/dashboard.png';
import dietProducts from '../assets/portfolio/diet-plus/products.png';
import dietConsulting from '../assets/portfolio/diet-plus/consulting.png';
import selection01 from '../assets/portfolio/selection/selection01.png';
import selection02 from '../assets/portfolio/selection/selection02.png';
import selection03 from '../assets/portfolio/selection/selection03.png';
import shreeOmjiImg from '../assets/portfolio/shreeomjisaraf.png';
import shreeOmji01 from '../assets/portfolio/shree_omji_01.png';
import shreeOmji02 from '../assets/portfolio/shree_omji_02.png';
import shreeOmji03 from '../assets/portfolio/shree_omji_03.png';

import alfaHero from '../assets/portfolio/alfa-motors/hero.png';
import alfaServices from '../assets/portfolio/alfa-motors/services.png';
import alfaDetailing from '../assets/portfolio/alfa-motors/detailing.png';
import alfaGallery from '../assets/portfolio/alfa-motors/gallery.png';

import jawariyaHero from '../assets/portfolio/jawariya-dental/hero.png';
import jawariyaServices from '../assets/portfolio/jawariya-dental/services.png';
import jawariyaAbout from '../assets/portfolio/jawariya-dental/about.png';
import jawariyaGallery from '../assets/portfolio/jawariya-dental/gallery.png';

import tgSalonHero from '../assets/portfolio/tg-salon/hero.png';
import tgSalonAbout from '../assets/portfolio/tg-salon/about.png';
import tgSalonServices from '../assets/portfolio/tg-salon/services.png';
import tgSalonGallery from '../assets/portfolio/tg-salon/gallery.png';

export const projects = [
    {
        id: 'diet-plus-nutrition-hub',
        title: 'Diet Plus Nutrition Hub',
        category: 'Health & Wellness E-comm',
        status: 'Operational',
        client: 'Diet Plus Nutrition Hub',
        location: 'Jaipur, Rajasthan',
        year: '2024',
        color: '#10b981',
        image: port01,
        description: 'A revolutionary fitness ecosystem in Jaipur combining 100% authentic supplements with expert-led nutritional science.',
        longDescription: 'Diet Plus Nutrition Hub is more than a store; it is a roadmap to a healthier lifestyle. Engineered to provide 100% authentic nutrition to the fitness community of Jaipur, the platform integrates a professional consultation engine with a premium retail infrastructure. Our mission was to build a system where transparency, quality, and community building intersect through science-backed nutrition.',
        mission: 'To revolutionize the fitness industry in Jaipur by giving fitness enthusiasts 100% authentic supplements and free expert guidance, making premium nutrition accessible to every individual.',
        vision: 'To become India’s most trusted nutrition hub, recognized for setting the industry standard in transparency and quality while fostering a sustainable lifestyle for our community.',
        philosophy: 'The "Authenticity First" design language uses a bold emerald palette to symbolize vitality and growth, paired with a clean, high-performance interface that mirrors the transparency of their product curation.',
        challenge: 'Creating a unified digital presence that could effectively communicate the "100% Authentic Guarantee" while managing a massive inventory of international brands like Optimum Nutrition, MuscleBlaze, and Dymatize.',
        solution: 'Built a high-performance e-commerce architecture optimized for local delivery in Jaipur. We implemented a specialized indexing system for their "Elite Brand Ecosystem" and integrated a custom "Body Analysis Visualization" module to track user metabolic progress.',
        features: [
            '100% Authenticity Verification System',
            'Same-Day Delivery Engine (Local Jaipur)',
            'Certified Nutritionist Consultation Booking',
            'Body Analysis Module (Muscle Mass & Metabolic Tracking)',
            'Elite Brand Ecosystem (ON, MuscleBlaze, GNC, Dymatize)',
            'Community Support & Transformation Challenges',
            'Expert-led Free Guidance Portal'
        ],
        brands: ['Optimum Nutrition', 'MuscleBlaze', 'GNC', 'Dymatize', 'Ultimate Nutrition', 'MyProtein', 'Isopure', 'BSN'],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Framer Motion', 'Local API Integration'],
        techBreakdown: [
            { label: 'Delivery', value: '< 24hrs', icon: 'zap' },
            { label: 'Authenticity', value: '100% Verified', icon: 'lock' },
            { label: 'Active Users', value: '5k+', icon: 'globe' },
            { label: 'Integration', value: '8+ Global Brands', icon: 'sync' }
        ],
        results: [
            { metric: '100%', label: 'Authentic Product Guarantee' },
            { metric: 'Same Day', label: 'Local Delivery in Jaipur' },
            { metric: 'Free', label: 'Expert Nutrition Consulting' },
            { metric: '2500+', label: 'Monthly Active Fitness App Users' }
        ],
        testimonials: [
            { text: "My go-to store in Jaipur for all my fitness needs!", author: "Local Athlete" },
            { text: "Great prices, 100% genuine supplements. Highly recommended!", author: "S. Sharma" },
            { text: "Detailed body analysis helped me track progress accurately.", author: "Fitness Enthusiast" }
        ],
        gallery: [
            {
                title: 'Body Analysis Interface',
                desc: 'Real-time metabolic tracking and muscle mass analytics.',
                url: dietDashboard
            },
            {
                title: 'Elite Product Catalog',
                desc: 'A wide range of premium global brands with authenticity checks.',
                url: dietProducts
            },
            {
                title: 'Expert Consultation Bridge',
                desc: 'Direct scheduling for certified nutritionists.',
                url: dietConsulting
            }
        ]
    },
    {
        id: 'selections-interior',
        title: 'Selection Interior',
        category: 'Luxury Modular Furniture & Fit-Outs',
        status: 'Operational',
        client: 'Selection Interior // Mayank Kumawat',
        location: 'Jaipur, Rajasthan',
        year: '2024',
        color: '#b45309',
        image: selectionImg,
        description: 'Elite infrastructure and expert design team delivering luxury modular furniture for villas, apartments, and corporate offices.',
        longDescription: 'Selection Interior is a Jaipur-based powerhouse in interior design and modular manufacturing. With an advanced infrastructure featuring CNC machines and automatic edge banders, they deliver tailored interiors for diverse sectors. Led by Mayank Kumawat, the firm blends artistic inspiration with unmatched technical precision to create spaces that are visually stunning and deeply functional.',
        mission: 'To craft innovative and luxurious furniture solutions that redefine interiors — elevating spaces and enriching daily living through impeccable design, flawless functionality, and masterful craftsmanship.',
        vision: 'To be the most trusted name in interior furnishing, celebrated for bespoke quality, trend-setting designs, and customer-focused solutions that inspire and transform.',
        infrastructure: 'Advanced production facility with CNC Machines, Panel Saws, Cold Press (50 ton capacity), and Router machines. Capacity: 500+ modular units/month.',
        team: '25+ Employees including 5 Interior Designers/Architects and 20+ installation technicians.',
        philosophy: 'Driven by design and defined by excellence. We utilize smart layouts and modular solutions to optimize every inch of space while maintaining premium aesthetic appeal.',
        challenge: 'Balancing high-volume industrial production capacity (500+ units/month) with the bespoke, one-of-a-kind creative requirements of luxury boutique hotels and private villas.',
        solution: 'Developed a hybrid manufacturing-design pipeline that utilizes cutting-edge CNC technology for precision components while allowing our design studio (Team of 5 Architects) to iterate on custom prototypes for unique client needs.',
        features: [
            'Advanced CNC Production & Automatic Edge Banding',
            'Luxury Modular Kitchens & Space-Saving Wardrobes',
            'Bespoke High-Stakes Commercial Furniture',
            'Complete Turnkey Fit-Outs (Villas & Apartments)',
            'In-House Prototyping & Quality Logistics',
            'Ergonomic & Student-Friendly Institutional Design',
            'Smart Storage Solutions with Secure Functionality'
        ],
        sectors: ['Hotels & Resorts', 'Villas & Luxury Homes', 'Corporate Offices', 'Hospitals & Clinics', 'Restaurants', 'Schools & Colleges'],
        technologies: ['CNC Precision Machining', 'Panelsaw Engineering', 'Router Technology', '3D Design Prototyping', 'Modular Scalability'],
        techBreakdown: [
            { label: 'Capacity', value: '500+ Units/Mo', icon: 'zap' },
            { label: 'Precision', value: '0.1mm CNC', icon: 'lock' },
            { label: 'Designers', value: '5 Architects', icon: 'globe' },
            { label: 'Workflow', value: 'O2O Hybrid', icon: 'sync' }
        ],
        results: [
            { metric: '500+', label: 'Modular Units Produced Monthly' },
            { metric: '25+', label: 'Expert In-house Craftsmen' },
            { metric: '100%', label: 'Precision Engineering Guarantee' },
            { metric: 'Lux', label: 'High-end Bespoke Interiors' }
        ],
        testimonials: [
            { text: "At Selection Interior, creativity drives the approach. They bring fresh, imaginative ideas to every project.", author: "Architectural Review" },
            { text: "Their commitment to uniqueness sets them apart. Every space is tailored to the individual character.", author: "Luxury Homeowner" },
            { text: "Seamless balance of style and functionality. Incredible precision in modular execution.", author: "Office Project Manager" }
        ],
        gallery: [
            {
                title: 'Bespoke Interior Excellence',
                desc: 'A showcase of our high-precision modular craftsmanship and luxury finishes.',
                url: selection01
            },
            {
                title: 'Premium Living Space',
                desc: 'Integrating advanced infrastructure with elegant architectural design.',
                url: selection02
            },
            {
                title: 'Sophisticated Interior Concepts',
                desc: 'Tailored solutions reflecting the individual character of every client.',
                url: selection03
            }
        ]
    },
    {
        id: 'shree-omji-saraf',
        title: 'Shree Omji Saraf (GoldApp)',
        category: 'Cross-Platform Fintech // Gold & Silver Investment',
        status: 'Operational',
        client: 'Shree Omji Saraf // GoldApp',
        location: 'Jaipur, India (Flagship: Vaishali Nagar)',
        year: '2024',
        color: '#800000',
        image: shreeOmjiImg,
        description: "A high-performance cross-platform fintech ecosystem for buying, selling, and vaulting 24K Gold and Silver with real-time market integration.",
        longDescription: 'Shree Omji Saraf (GoldApp) is a sophisticated fintech platform that bridges traditional precious metal investment with modern digital architecture. Engineered using a full-stack Next.js environment, the platform handles high-concurrency real-time market price polling every 30 seconds. It features a robust KYC processing engine (PAN/Aadhaar integration) and a complex market-linked refund logic, ensuring platform stability during high commodity volatility.',
        mission: 'To democratize precious metal investment by making it accessible, transparent, and secure for everyone through advanced digital vaults and sub-\u20B91 entry barriers.',
        vision: 'To become India\u2019s premier digital asset gateway, seamlessly blending physical jewelry tradition with cutting-edge blockchain-grade security and transparency.',
        philosophy: 'Trust, Transparency, and Tradition (T3). We architect systems where the integrity of physical assets is matched by the precision of digital code.',
        challenge: 'Synchronizing high-frequency market data across web and mobile interfaces while maintaining low latency, and implementing a secure O2O (Online-to-Offline) fulfillment protocol with OTP-based verification for store pickups.',
        solution: 'Built a decoupled architecture using React 18 and Next.js App Router for the frontend, integrated with an encrypted RESTful API layer. We implemented a 256-bit bank-level encryption standard and a custom state-management system to handle real-time portfolio revaluations.',
        features: [
            'Real-Time Market Price Engine (30s Sync)',
            'Integrated KYC Engine (PAN/Aadhaar Verification)',
            'Secure Digital Vaulting with Insured Storage',
            'O2O Pickup Protocol (Vaishali Nagar Jaipur Hub)',
            'Market-Linked Refund & Settlement Algorithm',
            'Scalable Investment Entry (Starting at \u20B91)',
            'Automated Portfolio Valuation Dashboard',
            'Cross-Platform UI/UX Consistency'
        ],
        technologies: [
            'Next.js (App Router)',
            'React 18',
            'Node.js Ecosystem',
            'Tailwind CSS',
            'Radix UI Primitives',
            'Redux / Context API',
            'RESTful API Architecture',
            '256-bit AES Encryption',
            'OTP-based Authentication'
        ],
        testimonials: [
            { text: "The cross-platform consistency and real-time pricing are second to none in this niche.", author: "Fintech Analyst" },
            { text: "Seamless transition from digital gold investment to physical store pickup.", author: "Premium User" }
        ],
        techBreakdown: [
            { label: 'Real-Time Sync', value: '30s Buffer', icon: 'sync' },
            { label: 'Encryption', value: '256-bit AES', icon: 'lock' },
            { label: 'Latency', value: '< 200ms', icon: 'zap' },
            { label: 'Scale', value: '10k+ Req/s', icon: 'globe' }
        ],
        results: [
            { metric: '\u20B91 Entry', label: 'Minimum Investment barrier broken' },
            { metric: '995 Purity', label: 'Certified quality guarantee' },
            { metric: '100% Insured', label: 'Zero-risk digital vaulting' },
            { metric: '5min KYC', label: 'Express onboarding pipeline' }
        ],
        gallery: [
            {
                title: 'Market Trading Interface',
                desc: 'Real-time syncing with global gold and silver market indices.',
                url: shreeOmji01
            },
            {
                title: 'Secure Vault Dashboard',
                desc: 'End-to-end encrypted holdings with insured backup.',
                url: shreeOmji02
            },
            {
                title: 'Investment Analytics',
                desc: 'Comprehensive view of assets and market trends.',
                url: shreeOmji03
            }
        ]
    },
    {
        id: 'alfa-motors',
        title: 'Alfa Motors',
        category: 'Automotive Servicing & Detailing',
        status: 'Operational',
        client: 'Alfa Motors',
        location: 'India',
        year: '2024',
        color: '#0d6efd',
        image: alfaHero,
        description: 'A comprehensive automotive care platform offering premium maintenance, advanced detailing, cashless insurance, and certified used cars.',
        longDescription: 'Alfa Motors ("Always With You") is a premium automotive service ecosystem designed to simplify and elevate the car ownership experience. Our platform integrates a suite of services ranging from routine 70-point maintenance checkups to high-end graphene and PPF surface protection. With integrated functionality for cashless insurance claims and a digital used car marketplace, Alfa Motors serves as a one-stop lifecycle manager for vehicles.',
        mission: 'To redefine automotive care by providing transparent, high-quality, and accessible services that prioritize the longevity and optimal performance of every vehicle.',
        vision: 'To be the ultimate trusted partner in every car owner’s journey across India, setting the industry benchmark for honest pricing and technical excellence.',
        philosophy: 'Driven by the "Always With You" ethos. We believe in proactive maintenance, integrating digital ease with mechanical mastery.',
        challenge: 'Consolidating highly technical and varied automotive services—from mechanical repairs and detailing to insurance and vehicle sales—into a single, easy-to-navigate digital platform that builds trust instantly.',
        solution: 'Architected a highly performant and user-centric platform featuring a modern responsive grid of services. We prioritized clear value propositions, integrated high-fidelity before & after galleries for the detailing studio, and incorporated frictionless communication through instant WhatsApp integrations.',
        features: [
            'Premium Periodic Maintenance (70-Point Check)',
            'Advanced Detailing Studio (Graphene, Ceramic & PPF)',
            'Cashless Insurance Claims & Renewals portal',
            'Certified Used Cars Marketplace',
            'Instant WhatsApp Connectivity & Support',
            'Transparent Pricing Tiers',
            'Fast-track Denting & Painting Services'
        ],
        technologies: [
            'HTML5',
            'CSS3',
            'Vanilla JavaScript',
            'Bootstrap Layout Engine',
            'Responsive Architecture',
            'WhatsApp Business API'
        ],
        testimonials: [
            { text: "The detailing studio brought my car back to showroom condition. Absolutely stunning work.", author: "Premium Customer" },
            { text: "Quick and hassle-free cashless insurance claim. They truly live up to the 'Always With You' motto.", author: "Verified Client" }
        ],
        techBreakdown: [
            { label: 'Booking', value: 'Real-time SMS/WA', icon: 'zap' },
            { label: 'Platform', value: 'Static Arch', icon: 'globe' },
            { label: 'Performance', value: '< 1s Load', icon: 'sync' },
            { label: 'Integrity', value: '100% OEM Parts', icon: 'lock' }
        ],
        results: [
            { metric: '70-Point', label: 'Comprehensive diagnostic check' },
            { metric: '\u20B9800+', label: 'Transparent entry-level pricing' },
            { metric: '100%', label: 'Commitment to OEM parts' },
            { metric: '24/7', label: 'Consultation support' }
        ],
        gallery: [
            {
                title: 'Comprehensive Maintenance',
                desc: 'Detailed breakdown of our 70-point regular and premium service packages.',
                url: alfaServices
            },
            {
                title: 'Advanced Detailing Studio',
                desc: 'High-end surface protection featuring Graphene and Ceramic coatings.',
                url: alfaDetailing
            },
            {
                title: 'Quality Execution Showcase',
                desc: 'Visual proof of transformation and meticulous care in our automotive gallery.',
                url: alfaGallery
            }
        ]
    },
    {
        id: 'jawariya-dental-clinic',
        title: 'Jawariya Dental Clinic',
        category: 'Advanced Dental Care & Implants',
        status: 'Operational',
        client: 'Jawariya Dental Clinic',
        location: 'Udaipur, Rajasthan',
        year: '2024',
        color: '#00a3cc',
        image: jawariyaHero,
        description: 'A state-of-the-art dental clinic platform offering advanced oral care, implantology, and painless laser dentistry.',
        longDescription: 'Jawariya Dental Clinic & Implant Center is Udaipur’s premier destination for comprehensive oral healthcare. Under the expert leadership of Dr. Gaurav Jawariya, the clinic integrates cutting-edge international standards with personalized patient care. The digital platform was designed to reflect their commitment to precision, featuring seamless appointment booking and detailed educational resources spanning from routine cavity fillings to complex Orthognathic surgeries.',
        mission: 'To deliver world-class, painless dental care and transform smiles through advanced technology and compassionate, patient-first treatment plans.',
        vision: 'To be the most trusted name in digital and clinical dentistry across Rajasthan, making high-end oral healthcare accessible to everyone 7 days a week.',
        philosophy: 'Smiles built on Science and Trust. We champion preventative care and minimally invasive procedures powered by modern digital X-rays and laser techniques.',
        challenge: 'Architecting a medical platform that balances the necessary clinical authority with a warm, inviting patient experience, while securely managing high-volume appointment scheduling.',
        solution: 'Developed a responsive, high-performance web experience built on WordPress. We implemented the Slider Revolution engine for engaging, fast-loading visual storytelling, and integrated a robust appointment booking system alongside direct WhatsApp API connectivity for instantaneous patient support.',
        features: [
            'Real-Time Appointment Scheduling',
            'Advanced Treatment Showcase (Implants, RCT, Braces)',
            'Digital X-Ray & Laser Dentistry Education',
            'Instant WhatsApp Patient Support',
            'Dynamic Before & After Gallery',
            '7-Days-a-Week Availability Integration',
            'Secure Patient Information Portal'
        ],
        technologies: [
            'WordPress Core',
            'Elementor Pro',
            'Slider Revolution (SR7)',
            'PHP 8.x',
            'WhatsApp Business API',
            'Responsive Architecture'
        ],
        testimonials: [
            { text: "Dr. Gaurav Jawariya and his team provided the most painless dental implant experience I\'ve ever had. Highly recommended!", author: "Verified Patient" },
            { text: "The clinic\'s state-of-the-art equipment and 7-day availability makes them the best choice in Udaipur.", author: "Local Patient" }
        ],
        techBreakdown: [
            { label: 'Booking', value: 'Instant WA', icon: 'zap' },
            { label: 'Platform', value: 'WP Engine', icon: 'globe' },
            { label: 'Availability', value: '7 Days/Wk', icon: 'sync' },
            { label: 'Trust', value: 'Certified', icon: 'lock' }
        ],
        results: [
            { metric: '4+ Yrs', label: 'Specialized Implant Experience' },
            { metric: 'Painless', label: 'Advanced Laser Dentistry' },
            { metric: '100%', label: 'Patient Satisfaction Focus' },
            { metric: '24/7', label: 'Online Scheduling Capability' }
        ],
        gallery: [
            {
                title: 'Comprehensive Dental Services',
                desc: 'Detailed overviews of our advanced procedures including Implants, RCT, and Orthognathic surgeries.',
                url: jawariyaServices
            },
            {
                title: 'State-of-the-Art Infrastructure',
                desc: 'An inside look at our modern technology and Dr. Gaurav Jawariya\'s clinical excellence.',
                url: jawariyaAbout
            },
            {
                title: 'Transformative Case Studies',
                desc: 'Real patient transformations and visual proof of our cosmetic and restorative capabilities.',
                url: jawariyaGallery
            }
        ]
    },
    {
        id: 'tg-salon-furniture',
        title: 'Tanishka Global',
        category: 'Premium Salon Furniture Manufacturer',
        status: 'Operational',
        client: 'Tanishka Global',
        location: 'India',
        year: '2024',
        color: '#cda85c',
        image: tgSalonHero,
        description: 'A luxurious B2B e-commerce and portfolio platform for a premium salon furniture manufacturer.',
        longDescription: 'Tanishka Global (TG Salon Furniture) is a leading manufacturer of high-end salon furniture. Established in 2015, they blend ergonomic functionality with luxurious aesthetic design. Their digital platform serves as a massive B2B catalog and operational showcase, highlighting over 292+ successful projects and providing instant WhatsApp-based consultation for wholesale clients.',
        mission: 'To redefine salon experiences globally through meticulously crafted, ergonomic, and stylish furniture that empowers professionals.',
        vision: 'To be the ultimate industry standard in salon manufacturing, renowned for unparalleled craftsmanship, innovation, and client satisfaction.',
        philosophy: 'Crafting Excellence. We believe that premium salon experiences start with premium foundations. Every mirror and chair is engineered for both luxury and long-lasting durability.',
        challenge: 'Categorizing a vast, varied inventory of high-end furniture (from customized LED mirrors to heavy-duty hydraulic styling chairs) into an easily navigable digital experience that drives immediate B2B sales leads.',
        solution: 'Developed a robust, elegant digital catalog using HTML5, CSS3, and Bootstrap. We prioritized large, high-resolution imagery and integrated real-time WhatsApp Business routing, enabling instant customized quotes for bulk orders and bespoke designs.',
        features: [
            'Comprehensive Product Catalog',
            'WhatsApp Business Quoting Integration',
            'Progressive Web App (PWA) Capabilities',
            'Bespoke Design & Customization Showcase',
            'High-Resolution Gallery of 292+ Projects',
            'Mobile-First Responsive Architecture',
            'Testimonial & Social Proof Engine'
        ],
        technologies: [
            'HTML5',
            'CSS3',
            'Bootstrap Framework',
            'Vanilla JavaScript',
            'WhatsApp API',
            'Responsive Grid'
        ],
        testimonials: [
            { text: "Tanishka Global transformed our salon with their impeccable furniture. The quality and design are unmatched!", author: "Rajesh Sharma" },
            { text: "Outstanding service and premium products. Our clients constantly compliment the comfortable and stylish chairs.", author: "Priya Mehta" }
        ],
        techBreakdown: [
            { label: 'Booking', value: 'WhatsApp API', icon: 'zap' },
            { label: 'UI / UX', value: 'Bootstrap 5', icon: 'globe' },
            { label: 'Performance', value: 'PWA Ready', icon: 'sync' },
            { label: 'Scale', value: '292+ Projects', icon: 'lock' }
        ],
        results: [
            { metric: '175+', label: 'Satisfied Corporate Clients' },
            { metric: '2015', label: 'Established Manufacturing Legacy' },
            { metric: '100%', label: 'Ergonomic Quality Focus' },
            { metric: 'Custom', label: 'Bespoke Design Solutions' }
        ],
        gallery: [
            {
                title: 'Premium Styling Chairs',
                desc: 'Ergonomic and luxurious seating solutions designed for professional salons.',
                url: tgSalonServices
            },
            {
                title: 'Core Manufacturing Values',
                desc: 'A look into the mission, vision, and operational excellence of Tanishka Global.',
                url: tgSalonAbout
            },
            {
                title: 'Testimonials & Assurance',
                desc: 'Real social proof and client success stories from across the country.',
                url: tgSalonGallery
            }
        ]
    }
];
