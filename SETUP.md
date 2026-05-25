# Complete Setup Guide - Frontend & Backend

## 📦 Project Overview

```
BJAJ/
├── backend/          # Express.js API server
│   ├── server.js
│   ├── routes/bfhl.js
│   ├── package.json
│   └── README.md
│
└── frontend/         # React application
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── README.md
```

---

## 🚀 Complete Setup (From Scratch)

### Prerequisites
- Node.js 14+ (https://nodejs.org/)
- npm (comes with Node.js)

---

## Backend Setup

### 1. Navigate to Backend
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

Installs:
- `express` - Web framework
- `cors` - Cross-origin support

### 3. Start Backend Server
```bash
npm start
```

Expected output:
```
Server is running on http://localhost:3000
```

**Keep this terminal running!**

---

## Frontend Setup (New Terminal)

### 1. Navigate to Frontend
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

Installs:
- `react` - UI library
- `react-dom` - React rendering
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

### 3. Start Frontend Dev Server
```bash
npm run dev
```

Expected output:
```
  VITE v4.3.9  ready in XXX ms

  ➜  Local:   http://localhost:5173/
```

Browser will open automatically. If not, visit http://localhost:5173

---

## ✅ Verify Complete Setup

### Check Backend
```bash
curl http://localhost:3000/bfhl
```

Response should be:
```json
{
  "operation_code": 1
}
```

### Check Frontend
1. Open http://localhost:5173 in browser
2. Browser tab title should show: **0827AL243D12**
3. Header shows: **Bajaj Finserv Health**
4. Textarea visible with JSON placeholder
5. Submit button is clickable

### Test Full Integration
1. In frontend, paste this in textarea:
```json
{"data":["A","1","b","2"]}
```

2. Click Submit
3. Wait for response
4. Select "Numbers" checkbox
5. Should display: **1**, **2**

✅ If all works → Setup is complete!

---

## 🧪 Test Scenarios

### Scenario 1: Valid Data
**Input:**
```json
{"data":["M","1","334","4","B","Z","a","7"]}
```

**Expected:**
- No error
- Response displays
- Can select options
- Shows correct data

### Scenario 2: Invalid JSON
**Input:**
```
{invalid json}
```

**Expected:**
- Error message: "Invalid JSON format"
- Submit button disabled
- No API call made

### Scenario 3: Missing Data
**Input:**
```json
{}
```

**Expected:**
- Error message: "Invalid JSON format"
- No API call

### Scenario 4: Backend Down
**Steps:**
1. Stop backend (Ctrl+C)
2. Try submitting in frontend

**Expected:**
- Error message: "API request failed"
- Frontend handles gracefully

---

## 📊 Port Configuration

### Default Ports
- **Backend:** 3000
- **Frontend:** 5173

### Change Backend Port
In `backend/server.js`, modify:
```javascript
const PORT = process.env.PORT || 3000;
```

Or run:
```bash
PORT=8000 npm start
```

### Change Frontend Port
In `frontend/vite.config.js`:
```javascript
server: {
  port: 5174  // Change this
}
```

Or run:
```bash
npm run dev -- --port 5174
```

---

## 🔄 Development Workflow

### Terminal 1: Backend
```bash
cd backend
npm start
```

### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```

### Terminal 3 (Optional): Testing
```bash
# Test backend
curl http://localhost:3000/bfhl

# Or use frontend directly
# Visit http://localhost:5173
```

---

## 📝 Environment Variables

### Backend (.env)
Create `backend/.env`:
```
PORT=3000
NODE_ENV=development
```

### Frontend (Optional)
Vite automatically uses .env files if created in `frontend/.env`

---

## 🛠️ Troubleshooting

### "Port Already in Use" Error

**Backend:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti :3000 | xargs kill -9
```

**Frontend:**
```bash
npm run dev -- --port 5174
```

### "Cannot Find Module" Error

**Solution:**
```bash
# Clear node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Backend Not Responding from Frontend

**Check:**
1. Backend is running: `npm start` in backend folder
2. Correct URL: http://localhost:3000/bfhl
3. CORS is enabled (it is by default)
4. Browser console for errors (F12)

### Frontend Shows Blank Page

**Solution:**
1. Check console for errors (F12)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Restart `npm run dev`

### JSON Validation Error

**Ensure:**
- Valid JSON syntax (use jsonlint.com)
- Proper format: `{"data": [...]}`
- Commas between items
- No trailing commas

---

## 🏗️ Build for Production

### Backend
Backend is ready for production as-is.

Deploy using:
- Heroku
- Railway
- Render
- AWS/Azure/GCP

### Frontend

Build:
```bash
npm run build
```

Creates `dist/` folder with production-ready files.

Deploy using:
- Vercel (recommended for React)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

#### Deploy to Netlify
```bash
npm run build
# Drag dist/ to netlify.com
```

---

## 📚 API Documentation

See `backend/README.md` for full API docs.

### Quick Reference
```
GET /bfhl
→ Returns: {"operation_code": 1}

POST /bfhl
→ Accepts: {"data": [...], "file_b64": "..."}
→ Returns: Full response with processed data
```

---

## 🧬 Project Configuration Files

### Backend

**package.json** - Dependencies and scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  }
}
```

**server.js** - Express setup with CORS

**routes/bfhl.js** - API logic

### Frontend

**package.json** - React and build tools
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**vite.config.js** - Vite configuration

**index.html** - HTML entry point (title: 0827AL243D12)

**src/main.jsx** - React mount point

**src/App.jsx** - Main component

**src/App.css** - Styling

---

## ✨ Features Checklist

### Backend ✅
- [x] Express server with CORS
- [x] GET /bfhl endpoint
- [x] POST /bfhl endpoint
- [x] JSON validation
- [x] Prime number detection
- [x] Lowercase alphabet logic
- [x] File handling (Base64)
- [x] MIME type detection
- [x] Error handling
- [x] Production-ready code

### Frontend ✅
- [x] React functional components
- [x] JSON input validation
- [x] Fetch API integration
- [x] Loading states
- [x] Multi-select filtering
- [x] Error handling
- [x] Responsive design
- [x] Modern animations
- [x] Browser title: 0827AL243D12
- [x] No external UI libraries
- [x] Production-ready code

---

## 🔐 Security Notes

1. **CORS Enabled** - Backend allows frontend requests
2. **Input Validation** - Both frontend & backend validate input
3. **Error Messages** - Generic messages (no sensitive data)
4. **No Secrets** - No API keys in code (all hardcoded demo values)

---

## 📈 Performance Tips

1. **Frontend:**
   - Uses Vite for fast dev server
   - CSS animations at 60fps
   - No unnecessary re-renders

2. **Backend:**
   - Efficient prime checking
   - Minimal dependencies
   - Request size limits (10MB)

---

## 🎯 Next Steps

1. **Backend running?** ✓
2. **Frontend running?** ✓
3. **Test integration?** ✓
4. **Ready for submission!** ✓

---

## 📞 Support Resources

- Frontend docs: `frontend/README.md`
- Backend docs: `backend/README.md`
- Test examples: `backend/TEST_EXAMPLES.js`
- Quick start: `frontend/QUICKSTART.md`

---

**Both projects are production-ready and fully functional!** 🎉

Need help? Check the README files or browser console for error details.
