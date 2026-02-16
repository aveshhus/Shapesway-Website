# Shapesway Technologies Website

Enterprise-grade website for Shapesway Technologies Pvt. Ltd.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd "c:\Users\Admin\Desktop\Shapesway website"

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

## 📱 Features

- ✅ Fully responsive design
- ✅ 14 service pages with detailed information
- ✅ AI-powered chatbot (SWPL AI)
- ✅ WhatsApp integration with business hours detection
- ✅ Animated hero section
- ✅ Mega menu navigation
- ✅ Contact form
- ✅ Professional testimonials section
- ✅ SEO-optimized pages

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form
- **HTTP Client**: Axios

## 📂 Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── AIChat/
│   └── WhatsApp/
├── pages/           # Page components
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Contact/
│   ├── Blog/
│   └── Careers/
├── data/            # Static data
│   └── services.js
├── styles/          # Global styles
│   ├── design-system.css
│   └── global.css
└── App.jsx          # Main app component
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration (when backend is ready)
VITE_API_URL=http://localhost:5000/api

# Analytics (optional)
VITE_GA_TRACKING_ID=your_tracking_id
```

## 🎨 Design System

The website uses a comprehensive design system with:
- Color palette (Primary: #0066FF, Secondary: #6C5CE7, Accent: #00D4AA)
- Typography scale (Inter & Plus Jakarta Sans fonts)
- Spacing system
- Shadow system
- Animation curves

## 📞 Contact Information

- **Phone**: +91 63671 81952
- **Email**: Info@shapesway.in
- **Jaipur Office**: 4th Floor, Shree Amar Heights, 405, Ajmer Rd, Jaipur, Rajasthan 302019
- **Udaipur Office**: Fortune 80 Complex, 205, University Rd, Udaipur, Rajasthan 313001

## 📝 License

© 2024 Shapesway Technologies Pvt. Ltd. All rights reserved.

## 🚧 Coming Soon

- Backend API (Node.js + Express + MongoDB)
- Admin Panel for content management
- Blog system with CMS
- Advanced analytics dashboard
- Email integration
- Newsletter system

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header/Header.jsx`

### Customizing Services

Edit `src/data/services.js` to add/modify services.

## 🤝 Support

For technical support or inquiries, contact the development team at Admin@shapesway.in
