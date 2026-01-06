# Quick Setup Guide - Big Partner Education Consultancy

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 2: Start Backend Server

```bash
cd backend
npm start
# or for development with auto-reload:
npm run dev
```

You should see:
```
✅ Default admin created: admin@consultancy.com / admin123
✅ Default settings initialized
✅ Database initialized successfully
🚀 Server is running on port 3000
```

### Step 3: Start Frontend (in a new terminal)

```bash
# From project root
npm run dev
```

You should see:
```
VITE ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Step 4: Access the Application

**Public Website:**
- Open browser: http://localhost:5173
- Navigate through Home, About, Destinations, Blog, Contact pages

**Admin Panel:**
- Login URL: http://localhost:5173/admin
- Email: `admin@consultancy.com`
- Password: `admin123`

## 📊 What's Included

### Automatic Setup
When you start the backend for the first time, it automatically:
1. Creates SQLite database at `backend/data/consultancy.db`
2. Creates all necessary tables (admins, countries, universities, blogs, enquiries, settings)
3. Creates a default admin account
4. Initializes default site settings
5. Creates upload directories

### Pre-configured Features
- ✅ Complete authentication system
- ✅ All database models and relationships
- ✅ API endpoints (public and admin)
- ✅ File upload system
- ✅ Responsive UI for all pages
- ✅ Admin dashboard with statistics

## 🎯 Testing the Application

### 1. Test Public Website
- Browse destinations (currently empty - add via admin)
- Browse blog posts (currently empty - add via admin)
- Submit contact form (creates enquiry in database)

### 2. Test Admin Panel

**Login:**
1. Go to http://localhost:5173/admin
2. Use credentials: admin@consultancy.com / admin123

**Add a Country:**
1. Navigate to Countries section (will need to implement admin CRUD pages, currently shows dashboard only)
2. For now, you can test API with Postman or curl:

```bash
# Login to get token
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@consultancy.com","password":"admin123"}'

# Copy the token from response, then create a country:
curl -X POST http://localhost:3000/api/countries \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "United States",
    "short_description": "World-class universities and diverse study programs",
    "description": "The USA hosts the most international students worldwide...",
    "status": "active"
  }'
```

## 📁 Project Structure Overview

```
big-partner-consultancy/
├── backend/                    # Express API Server
│   ├── src/
│   │   ├── config/            # Database configuration
│   │   ├── middleware/        # Auth, upload, error handlers
│   │   ├── modules/           # Feature modules
│   │   │   ├── auth/         # Login, profile
│   │   │   ├── countries/    # Country management
│   │   │   ├── universities/ # University management
│   │   │   ├── blogs/        # Blog management
│   │   │   ├── enquiries/    # Contact form submissions
│   │   │   └── settings/     # Site settings & dashboard
│   │   └── routes/           # API routes
│   ├── data/                 # SQLite database (auto-created)
│   ├── uploads/              # Uploaded images (auto-created)
│   └── server.js            # Entry point
├── src/                      # React Frontend
│   ├── components/
│   │   └── layout/          # Navbar, Footer
│   ├── context/             # Authentication context
│   ├── pages/
│   │   ├── public/          # Public-facing pages
│   │   └── admin/           # Admin panel pages
│   ├── services/            # API service layer
│   └── App.jsx              # Main app with routing
├── FEATURES.md              # Complete feature list
└── README.md                # Detailed documentation
```

## 🔧 Configuration

### Backend Environment Variables
Edit `backend/.env`:
```env
PORT=3000
NODE_ENV=development
JWT_SECRET=your-secret-key-change-in-production-12345
```

### Frontend Environment Variables
Create `.env` in project root (optional):
```env
VITE_API_URL=http://localhost:3000/api
```

## 📝 Next Steps

1. **Add Content via Admin:**
   - Add countries with flags and descriptions
   - Add universities under each country
   - Create blog posts
   - Configure site settings

2. **Customize:**
   - Update logo and branding
   - Modify color scheme in CSS files
   - Add your office address and contact details
   - Update social media links

3. **Deploy:**
   - Build frontend: `npm run build`
   - Deploy `dist/` folder to hosting (Vercel, Netlify, etc.)
   - Deploy backend to Node.js hosting (Heroku, DigitalOcean, Railway, etc.)
   - Update CORS settings and API URLs

## 🐛 Troubleshooting

**Backend won't start:**
- Make sure port 3000 is available
- Check if all dependencies are installed
- Delete `backend/data/` folder and restart to reset database

**Frontend API errors:**
- Ensure backend is running
- Check browser console for CORS errors
- Verify API_URL in frontend .env

**Login not working:**
- Use exact credentials: admin@consultancy.com / admin123
- Check browser console for errors
- Clear localStorage and try again

## 📚 Documentation

- See `README.md` for complete documentation
- See `FEATURES.md` for feature checklist
- API documentation available in README.md

## 💡 Tips

- Use browser DevTools to inspect API calls
- Check backend terminal for API logs
- Admin dashboard shows recent activity
- All uploaded files are in `backend/uploads/`
- Database can be viewed with DB Browser for SQLite

## 🎓 Default Credentials

**Admin Panel:**
- Email: admin@consultancy.com
- Password: admin123

⚠️ **Important:** Change these credentials after first login!

## ✅ Verification Checklist

- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:5173
- [ ] Can navigate between pages
- [ ] Can login to admin panel
- [ ] Dashboard shows statistics
- [ ] Contact form submission works
- [ ] No console errors in browser

---

**Need Help?** Check the logs in terminal for detailed error messages.

**Ready to Deploy?** See the deployment section in README.md
