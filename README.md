# Big Partner Education Consultancy

A comprehensive full-stack web application for educational consultancy services, helping students study abroad.

## Features

### Public Website
- 🏠 Home page with hero section, featured destinations, and testimonials
- ℹ️ About page with company information and team
- 🌍 Destinations page with country listings and detailed country pages
- 🎓 University listings by country
- 📝 Blog system with categories and SEO-friendly URLs
- 📞 Contact page with form and map integration
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

### Admin Panel
- 🔐 Secure authentication system
- 📊 Dashboard with statistics and recent enquiries
- 🌍 Complete country management (CRUD)
- 🎓 University management with country associations
- 📝 Blog management with rich content
- 📩 Enquiry management and status tracking
- ⚙️ Site settings configuration
- 🖼️ Image upload support

## Technologies Used

### Frontend
- React 18 with React Router
- Vite for fast development
- Axios for API requests
- React Icons
- Modern CSS with responsive design

### Backend
- Node.js with Express
- Better-sqlite3 for database
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- CORS and Helmet for security

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install frontend dependencies:**
```bash
npm install
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3. **Set up environment variables:**

Create `.env` file in the root (optional):
```
VITE_API_URL=http://localhost:3000/api
```

Backend `.env` is already configured in `backend/.env`

### Running the Application

1. **Start the backend server:**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:3000`

2. **Start the frontend development server (in a new terminal):**
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

3. **Access the application:**
- Public website: `http://localhost:5173`
- Admin panel: `http://localhost:5173/admin`
  - Default credentials: `admin@consultancy.com` / `admin123`

### Build for Production

**Frontend:**
```bash
npm run build
```
The production build will be in the `dist` directory.

**Backend:**
The backend is production-ready. Just set proper environment variables.

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── middleware/      # Auth, upload, error handling
│   │   ├── modules/         # Feature modules (countries, universities, etc.)
│   │   └── routes/          # API routes
│   ├── data/                # SQLite database (auto-created)
│   ├── uploads/             # Uploaded files (auto-created)
│   └── server.js           # Express server entry point
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/        # Navbar, Footer
│   │   └── admin/         # Admin components
│   ├── context/           # React context (Auth)
│   ├── pages/
│   │   ├── public/        # Public pages
│   │   └── admin/         # Admin pages
│   ├── services/          # API service layer
│   └── utils/             # Utility functions
└── package.json           # Frontend dependencies
```

## API Endpoints

### Public Endpoints
- `GET /api/countries` - Get all countries
- `GET /api/countries/:slug` - Get country details
- `GET /api/universities` - Get universities
- `GET /api/blogs` - Get published blogs
- `POST /api/enquiries` - Submit enquiry
- `GET /api/settings` - Get site settings

### Admin Endpoints (require authentication)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get admin profile
- `POST /api/countries` - Create country (with file upload)
- `PUT /api/countries/:id` - Update country
- `DELETE /api/countries/:id` - Delete country
- Similar CRUD endpoints for universities, blogs, enquiries
- `GET /api/settings/dashboard` - Dashboard statistics

## Default Admin Access

- Email: `admin@consultancy.com`
- Password: `admin123`

**Important:** Change these credentials in production!

## Features Implementation Status

✅ Complete - All core features implemented:
- Public website with all pages
- Admin authentication system
- Countries management
- Universities management
- Blog system
- Enquiry management
- Dashboard with statistics
- File upload support
- Responsive design
- SEO-friendly structure

## License

Private project for Big Partner Education Consultancy

