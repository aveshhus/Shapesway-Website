import port01 from '../assets/portfolio/port01.png';
import selectionImg from '../assets/portfolio/Selection.png';
import dietDashboard from '../assets/portfolio/diet-plus/dashboard.png';
import dietProducts from '../assets/portfolio/diet-plus/products.png';
import dietConsulting from '../assets/portfolio/diet-plus/consulting.png';
import selection01 from '../assets/portfolio/Selection/Selection01.png';
import selection02 from '../assets/portfolio/Selection/Selection02.png';
import selection03 from '../assets/portfolio/Selection/Selection03.png';
import shreeOmjiImg from '../assets/portfolio/shreeomjisaraf.png';
import shreeOmji01 from '../assets/portfolio/shree_omji_01.png';
import shreeOmji02 from '../assets/portfolio/shree_omji_02.png';
import shreeOmji03 from '../assets/portfolio/shree_omji_03.png';

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
        mission: 'To democratize precious metal investment by making it accessible, transparent, and secure for everyone through advanced digital vaults and sub-₹1 entry barriers.',
        vision: 'To become India’s premier digital asset gateway, seamlessly blending physical jewelry tradition with cutting-edge blockchain-grade security and transparency.',
        philosophy: 'Trust, Transparency, and Tradition (T3). We architect systems where the integrity of physical assets is matched by the precision of digital code.',
        challenge: 'Synchronizing high-frequency market data across web and mobile interfaces while maintaining low latency, and implementing a secure O2O (Online-to-Offline) fulfillment protocol with OTP-based verification for store pickups.',
        solution: 'Built a decoupled architecture using React 18 and Next.js App Router for the frontend, integrated with an encrypted RESTful API layer. We implemented a 256-bit bank-level encryption standard and a custom state-management system to handle real-time portfolio revaluations.',
        features: [
            'Real-Time Market Price Engine (30s Sync)',
            'Integrated KYC Engine (PAN/Aadhaar Verification)',
            'Secure Digital Vaulting with Insured Storage',
            'O2O Pickup Protocol (Vaishali Nagar Jaipur Hub)',
            'Market-Linked Refund & Settlement Algorithm',
            'Scalable Investment Entry (Starting at ₹1)',
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
            { metric: '₹1 Entry', label: 'Minimum Investment barrier broken' },
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
    }
];
