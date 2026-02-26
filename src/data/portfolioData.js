import port01 from '../assets/portfolio/port01.png';
import selectionImg from '../assets/portfolio/Selection.png';
import dietDashboard from '../assets/portfolio/diet-plus/dashboard.png';
import dietProducts from '../assets/portfolio/diet-plus/products.png';
import dietConsulting from '../assets/portfolio/diet-plus/consulting.png';
import selection01 from '../assets/portfolio/Selection/Selection01.png';
import selection02 from '../assets/portfolio/Selection/Selection02.png';
import selection03 from '../assets/portfolio/Selection/Selection03.png';

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
    }
];
