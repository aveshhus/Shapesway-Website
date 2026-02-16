import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import './AIChat.css';

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "👋 Hi! I'm SWPL AI Assistant. I can help you with:\n\n• Custom software development\n• Mobile & web app solutions\n• AI integration & automation\n• Digital transformation\n• Project quotes & consultations\n\nWhat brings you here today?",
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [conversationContext, setConversationContext] = useState([]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const quickReplies = [
        'What services do you offer?',
        'I need a mobile app',
        'Tell me about AI solutions',
        'Get a project quote'
    ];

    const getAIResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();

        // Greeting responses
        if (lowerMessage.match(/\b(hi|hello|hey|good morning|good afternoon|good evening)\b/)) {
            return "Hello! 👋 Great to connect with you! I'm here to help you transform your business with cutting-edge technology solutions.\n\nWe specialize in:\n✅ Custom Software Development\n✅ Mobile & Web Applications  \n✅ AI/ML Integration\n✅ Digital Marketing\n✅ Cloud Solutions\n\nWhat challenge can we help you solve today?";
        }

        // Service inquiries - More detailed
        if (lowerMessage.includes('service') || lowerMessage.includes('what do you') || lowerMessage.includes('offer')) {
            return "We're a full-stack technology partner offering:\n\n📱 **Mobile & Web Development**\n• iOS, Android, React Native apps\n• Progressive Web Apps (PWA)\n• E-commerce platforms\n\n🤖 **AI & Automation**\n• Custom AI agents\n• Machine Learning models\n• Process automation\n• Chatbot development\n\n💼 **Enterprise Solutions**\n• ERP/CRM systems\n• FinTech platforms\n• Healthcare solutions\n\n🎨 **Design & Marketing**\n• UI/UX Design\n• Digital Marketing\n• SEO & Social Media\n\nWhich area interests you most?";
        }

        // Mobile app specific
        if (lowerMessage.includes('mobile app') || lowerMessage.includes('ios') || lowerMessage.includes('android')) {
            return "📱 **Mobile App Development Excellence**\n\nWe create powerful mobile experiences:\n\n✅ **Native Apps**: iOS (Swift) & Android (Kotlin)\n✅ **Cross-Platform**: React Native, Flutter\n✅ **Features**: Push notifications, offline mode, payments\n✅ **Timeline**: 8-16 weeks average\n✅ **Support**: 24/7 maintenance included\n\n**Our Process:**\n1. Discovery & planning\n2. Design & prototyping\n3. Development & testing\n4. Launch & optimization\n\n**Recent Success**: Delivered 200+ apps with 4.8★ average rating\n\nReady to discuss your app idea? Share some details!";
        }

        // Web development
        if (lowerMessage.includes('website') || lowerMessage.includes('web dev') || lowerMessage.includes('web app')) {
            return "🌐 **Web Development Solutions**\n\nWe build high-performance web experiences:\n\n✅ **Modern Frameworks**: React, Next.js, Vue\n✅ **Backend**: Node.js, Python, .NET\n✅ **E-Commerce**: Shopify, WooCommerce, Custom\n✅ **Performance**: 100/100 PageSpeed scores\n✅ **Security**: SSL, encryption, compliance\n\n**What We Deliver:**\n• Responsive, mobile-first design\n• SEO-optimized architecture\n• Fast loading (< 2s)\n• Scalable infrastructure\n\n**Average Project**: 6-12 weeks | Full support included\n\nWhat type of website do you need?";
        }

        // AI and ML queries - Much more detailed
        if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning') || lowerMessage.includes('automation')) {
            return "🤖 **AI & Automation Solutions**\n\nWe're an **AI-First development company** specializing in:\n\n🎯 **Custom AI Agents**\n• Sales & customer service bots\n• Document processing AI\n• Predictive analytics\n• Voice assistants\n\n⚙️ **Business Process Automation**\n• Workflow automation\n• Data extraction & processing\n• Email & report automation\n\n🧠 **Machine Learning**\n• Recommendation systems\n• Computer vision\n• NLP & sentiment analysis\n• Fraud detection\n\n**Technologies**: OpenAI, TensorFlow, PyTorch, Langchain\n\n📊 **Real Results**:\n• 60% reduction in manual work\n• 40% faster response times\n• 85% accuracy in predictions\n\nWant to see how AI can transform your business? Let's chat!";
        }

        // Pricing and quotes - More professional
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote') || lowerMessage.includes('budget') || lowerMessage.includes('estimate')) {
            return "💰 **Transparent Pricing & Free Consultation**\n\nOur pricing is customized based on:\n• Project scope & complexity\n• Timeline requirements\n• Technology stack\n• Team size needed\n\n**Typical Investment Ranges**:\n📱 Mobile App: $15K - $80K\n🌐 Website: $5K - $30K\n🤖 AI Solution: $20K - $100K\n💼 Enterprise System: $50K - $250K\n\n**We Offer**:\n✅ Free discovery call\n✅ Detailed proposal within 48hrs\n✅ Flexible payment plans\n✅ Satisfaction guarantee\n\n**Next Steps**:\n1. Share your project details\n2. Get a free estimate\n3. Review our proposal\n4. Start building!\n\nReady to get started? Share your email or phone number!";
        }

        // Technology stack queries
        if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('languages') || lowerMessage.includes('frameworks')) {
            return "⚡ **Our Technology Expertise**\n\n**Frontend**:\n• React.js, Next.js, Vue.js\n• React Native, Flutter\n• TypeScript, JavaScript\n\n**Backend**:\n• Node.js, Express\n• Python, Django, FastAPI\n• .NET Core, Java Spring\n\n**Mobile**:\n• iOS (Swift, SwiftUI)\n• Android (Kotlin, Java)\n• React Native, Flutter\n\n**AI/ML**:\n• OpenAI, GPT models\n• TensorFlow, PyTorch\n• Langchain, Vector DBs\n\n**Database**:\n• MongoDB, PostgreSQL\n• MySQL, Redis\n• Firebase, Supabase\n\n**Cloud & DevOps**:\n• AWS, Azure, GCP\n• Docker, Kubernetes\n• CI/CD pipelines\n\n**500+ projects delivered** using cutting-edge tech!\n\nWhat technology interests you?";
        }

        // Support and maintenance
        if (lowerMessage.includes('support') || lowerMessage.includes('maintenance') || lowerMessage.includes('help after')) {
            return "🛠️ **24/7 Support & Maintenance**\n\nWe've got you covered:\n\n✅ **Ongoing Support**:\n• 24/7 technical assistance\n• Bug fixes & updates\n• Performance monitoring\n• Security patches\n\n✅ **Maintenance Plans**:\n• Basic: $500/month (10hrs)\n• Standard: $1,500/month (30hrs)\n• Premium: $3,500/month (80hrs)\n\n✅ **What's Included**:\n• Priority response (< 2hrs)\n• Monthly performance reports\n• Feature enhancements\n• Technology upgrades\n\n✅ **SLA Guarantee**:\n• 99.9% uptime\n• <15min critical response\n• Dedicated support team\n\n**200+ clients** trust our support services!\n\nNeed immediate assistance? Call: +91 63671 81952";
        }

        // Portfolio and case studies
        if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('projects') || lowerMessage.includes('case stud') || lowerMessage.includes('example')) {
            return "🏆 **Our Success Stories**\n\n**Proven Track Record**:\n✅ 500+ projects delivered\n✅ 200+ happy clients globally\n✅ 4.9/5 average rating\n✅ 95% client retention\n\n**Industries We Serve**:\n🏥 Healthcare\n💰 FinTech\n🛒 E-commerce\n🎓 Education\n🏨 Hospitality\n🚗 Automotive\n\n**Recent Highlights**:\n• Built FinTech app with 100K+ users\n• AI chatbot reducing support costs by 60%\n• E-commerce platform processing $2M/month\n• Healthcare app serving 50+ clinics\n\n**Global Presence**:\n🇺🇸 USA | 🇦🇺 Australia | 🇦🇪 UAE | 🇪🇺 Europe\n\nView detailed case studies: shapesway.in/portfolio\n\nWant to be our next success story?";
        }

        // Timeline and process
        if (lowerMessage.includes('timeline') || lowerMessage.includes('how long') || lowerMessage.includes('process') || lowerMessage.includes('duration')) {
            return "⏱️ **Development Timeline & Process**\n\n**Typical Timelines**:\n📱 Mobile App: 8-16 weeks\n🌐 Website: 4-10 weeks\n🤖 AI Solution: 6-14 weeks\n💼 Enterprise System: 12-24 weeks\n\n**Our 4-Phase Process**:\n\n1️⃣ **Discovery (1-2 weeks)**\n• Requirements analysis\n• Technical planning\n• Design mockups\n\n2️⃣ **Development (60% of timeline)**\n• Agile sprints\n• Weekly demos\n• Continuous feedback\n\n3️⃣ **Testing (15% of timeline)**\n• QA & bug fixing\n• Performance optimization\n• Security audit\n\n4️⃣ **Launch (1-2 weeks)**\n• Deployment\n• Training\n• Go-live support\n\n**You Get**:\n✅ Dedicated project manager\n✅ Weekly progress updates\n✅ Source code access\n✅ Complete documentation\n\nReady to start your project?";
        }

        // Contact information
        if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('call') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
            return "📞 **Get In Touch**\n\n**Office Locations**:\n\n🏢 **Jaipur Office**\n4th Floor, Shree Amar Heights\n405, Ajmer Road\nJaipur, Rajasthan 302019\n\n🏢 **Udaipur Office**\nFortune 80 Complex, 205\nUniversity Road\nUdaipur, Rajasthan 313001\n\n**Contact Details**:\n📱 Phone: +91 63671 81952\n📧 Email: Info@shapesway.in\n💼 Business: Admin@shapesway.in\n\n**Business Hours**:\n🕐 Monday - Saturday: 9:00 AM - 7:00 PM IST\n🕐 Sunday: Closed\n\n**Quick Response**: We reply within 2 hours during business hours!\n\n**Prefer to chat now?** I can schedule a call for you. What time works best?";
        }

        // Company information
        if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you') || lowerMessage.includes('team')) {
            return "🌟 **About Shapesway Technologies**\n\n**Who We Are**:\nPremium IT solutions provider specializing in custom software, mobile apps, and AI-powered digital transformation.\n\n**Our Mission**:\nEmpowering businesses worldwide with innovative, scalable, and secure technology solutions.\n\n**By The Numbers**:\n✅ 50+ Expert developers\n✅ 15+ Countries served\n✅ 500+ Projects delivered\n✅ 200+ Happy clients\n✅ 10+ Years combined experience\n\n**Why Choose Us?**:\n🎯 AI-First approach\n🎯 Proven track record\n🎯 100% transparency\n🎯 Fast delivery\n🎯 Ongoing support\n🎯 Competitive pricing\n\n**Certifications**:\n• ISO 9001:2015\n• Google Partner\n• Microsoft Partner\n\n**Serving**: USA, Australia, UAE, Europe, India\n\nLet's build something amazing together!";
        }

        // Hiring and careers
        if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('hiring') || lowerMessage.includes('work with you')) {
            return "💼 **Join Our Team**\n\n**We're Hiring!**\n\nOpen positions:\n👨‍💻 Full Stack Developers\n📱 Mobile App Developers (iOS/Android)\n🤖 AI/ML Engineers\n🎨 UI/UX Designers\n📊 Digital Marketing Experts\n\n**Why Shapesway?**\n✅ Cutting-edge projects\n✅ Competitive packages\n✅ Remote flexibility\n✅ Learning opportunities\n✅ Growth-focused culture\n\n**Perks**:\n• Health insurance\n• Flexible hours\n• Training budget\n• Modern workspace\n• Team outings\n\nInterested? Send your resume to: careers@shapesway.in\n\nOr visit: shapesway.in/careers";
        }

        // Specific service requests
        if (lowerMessage.includes('ecommerce') || lowerMessage.includes('online store') || lowerMessage.includes('shop')) {
            return "🛒 **E-Commerce Solutions**\n\nWe build high-converting online stores:\n\n**Platforms**:\n• Shopify (setup & custom apps)\n• WooCommerce\n• Custom solutions\n\n**Features**:\n✅ Payment gateway integration\n✅ Inventory management\n✅ Multi-vendor support\n✅ Mobile apps\n✅ Analytics dashboard\n\n**Average Investment**: $8K - $40K\n**Timeline**: 6-10 weeks\n\n**Results We Deliver**:\n• 30% increase in conversions\n• Mobile-first design\n• Fast checkout (< 3 clicks)\n• SEO optimized\n\nReady to launch your online business?";
        }

        // Default intelligent response
        return `I'd love to help you with that! 🚀\n\nTo provide the best solution, could you tell me more about:\n\n• What problem you're trying to solve?\n• Your business goals?\n• Any specific requirements?\n\nOr ask me about:\n📱 Mobile/Web development\n🤖 AI & automation\n💰 Pricing & packages\n🏆 Our portfolio\n📞 Scheduling a call\n\n**Quick Contact**:\n📱 +91 63671 81952\n📧 Info@shapesway.in\n\nI'm here to help! 😊`;
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            type: 'user',
            text: input,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, userMessage]);
        setConversationContext([...conversationContext, input]);
        setInput('');
        setIsTyping(true);

        const delay = 1200 + Math.random() * 800;
        // Simulate AI thinking time
        setTimeout(() => {
            const aiResponse = {
                type: 'bot',
                text: getAIResponse(userMessage.text),
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, delay);
    };

    const handleQuickReply = (reply) => {
        setInput(reply);
        setTimeout(() => handleSend(), 100);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="ai-chat-wrapper">
            {/* Chat Button */}
            <button
                className={`chat-button ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? <FaTimes /> : <FaComments />}
                <span className="chat-badge">AI</span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <FaRobot className="chat-icon" />
                            <div>
                                <h4>SWPL AI Assistant</h4>
                                <span className="status online">Online • Instant Reply</span>
                            </div>
                        </div>
                        <button className="chat-close" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message message-${message.type}`}>
                                <div className="message-bubble">
                                    <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                                    <span className="message-time">{message.time}</span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message message-bot">
                                <div className="message-bubble typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    {messages.length <= 1 && !isTyping && (
                        <div className="quick-replies">
                            {quickReplies.map((reply, index) => (
                                <button
                                    key={index}
                                    className="quick-reply-btn"
                                    onClick={() => handleQuickReply(reply)}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div className="chat-input-wrapper">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="send-button" onClick={handleSend} disabled={!input.trim()}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIChat;
