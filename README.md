# 🛍️ ShopApp - Modern E-commerce Platform

A beautiful, modern e-commerce application built with **Next.js 15**, **MongoDB**, and **Tailwind CSS**. Features stunning product cards, detailed product pages, and seamless user experience.

## ✨ Features

### 🎨 **Beautiful UI/UX**
- **Modern gradient designs** with smooth animations
- **Responsive product cards** with hover effects
- **Professional typography** and spacing
- **Mobile-first responsive design**
- **Smooth transitions** and micro-interactions

### 🏪 **Product Management**
- **Product catalog** with grid layout
- **Detailed product pages** with full specifications
- **Category-based organization**
- **Stock level indicators** with color coding
- **High-quality product images** from Unsplash

### 🔐 **Authentication System**
- **Cookie-based authentication**
- **Protected routes** with middleware
- **Login/logout functionality**
- **User session management**

### 📱 **Pages & Routes**
- **🏠 Homepage** - Hero section with features and testimonials
- **🛍️ Products Page** - Beautiful product grid with search
- **📄 Product Details** - Comprehensive product information
- **🔐 Login Page** - Secure authentication
- **➕ Add Item Page** - Product management (protected)

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router)
- **Database:** MongoDB with native driver
- **Styling:** Tailwind CSS with custom animations
- **Images:** Next.js Image optimization
- **Authentication:** Cookie-based sessions
- **Notifications:** React Hot Toast
- **Icons:** Heroicons & Custom SVGs

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd scic-itemstore/shop-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create `.env.local` file:
```env
MONGODB_URI=your_mongodb_connection_string
NEXT_MONGO_NAME=shopapp
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
shop-app/
├── src/
│   ├── app/
│   │   ├── page.jsx                 # Homepage with hero & features
│   │   ├── layout.jsx               # Root layout with Navbar
│   │   ├── globals.css              # Global styles & animations
│   │   ├── items/
│   │   │   ├── page.jsx             # Products listing page
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx         # Product details page
│   │   │   └── _componet/
│   │   │       └── ShopCard.jsx     # Product card component
│   │   ├── login/
│   │   │   └── page.jsx             # Login page
│   │   ├── add-item/
│   │   │   └── page.jsx             # Add product page (protected)
│   │   └── api/
│   │       ├── items/
│   │       │   ├── route.js         # Items API endpoints
│   │       │   └── [id]/
│   │       │       └── route.js     # Single item API
│   │       ├── login/
│   │       │   └── route.js         # Login API
│   │       └── logout/
│   │           └── route.js         # Logout API
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation component
│   │   └── Footer.jsx               # Footer component
│   ├── lib/
│   │   ├── dbConnect.js             # MongoDB connection
│   │   └── providers/
│   │       └── Providers.jsx        # Toast provider
│   └── services/
│       └── itemes.itemes.js         # API service functions
├── middleware.js                    # Route protection
├── next.config.mjs                  # Next.js configuration
├── package.json
└── README.md
```

## 🎨 Design Features

### **Product Cards**
- **Gradient overlays** on hover
- **Category and stock badges**
- **Smooth scale animations**
- **Professional pricing display**
- **Color-coded stock indicators**

### **Product Details Page**
- **Large product images** with zoom effect
- **Comprehensive product information**
- **Gradient pricing with discount badges**
- **Action buttons** (Add to Cart, Wishlist, Share)
- **Product specifications** in organized cards
- **Trust indicators** and guarantees

### **Homepage Sections**
1. **Hero Section** - Animated gradients with call-to-action
2. **Features** - Service highlights with icons
3. **Categories** - Product category grid
4. **About** - Company information with stats
5. **Testimonials** - Customer reviews
6. **Newsletter** - Email subscription
7. **Contact** - Contact information

## 🔐 Authentication

### Login Credentials
```
Email: admin@gmail.com
Password: 123456
```

### Protected Routes
- `/add-item` - Requires authentication
- Middleware automatically redirects to `/login`

## 🗄️ Database Schema

### Items Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String (URL),
  stock: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/items` | Get all products | Public |
| GET | `/api/items/[id]` | Get single product | Public |
| POST | `/api/items` | Add new product | Protected |
| POST | `/api/login` | User login | Public |
| POST | `/api/logout` | User logout | Protected |

## 🎨 Custom Animations

- **Blob animations** for background elements
- **Fade-in-up** animations for content
- **Float animations** for icons
- **Pulse-glow** effects for buttons
- **Smooth hover transitions** for cards
- **Scale animations** for interactive elements

## 📱 Responsive Design

- **Mobile-first approach**
- **Flexible grid layouts**
- **Adaptive typography**
- **Touch-friendly interactions**
- **Optimized for all screen sizes**

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌟 Key Highlights

- **Modern Next.js 15** with App Router
- **Beautiful UI** with Tailwind CSS
- **Smooth animations** and transitions
- **MongoDB integration** with native driver
- **Image optimization** with Next.js Image
- **SEO-friendly** server-side rendering
- **Type-safe** development experience
- **Production-ready** architecture

## 📸 Screenshots

### Homepage
- Hero section with animated gradients
- Feature highlights with icons
- Category grid with hover effects

### Products Page
- Beautiful product grid
- Search functionality
- Responsive card layout

### Product Details
- Large product images
- Comprehensive information
- Action buttons and specifications

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Environment Variables for Production
```env
MONGODB_URI=your_production_mongodb_uri
NEXT_MONGO_NAME=shopapp
NEXTAUTH_URL=your_production_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Unsplash** for high-quality product images
- **Heroicons** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework

---

**Built with ❤️ using Next.js 15 and MongoDB**
