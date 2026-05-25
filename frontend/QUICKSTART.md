# Quick Start - Frontend

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

Expected output: `added XX packages`

### Step 2: Start Development Server
```bash
npm run dev
```

Expected output:
```
  VITE v4.3.9  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 3: Open in Browser
The app will automatically open at `http://localhost:5173`

---

## ✅ Verify Setup

1. **Check browser tab title** → Should show "0827AL243D12"
2. **Check header** → Shows "Bajaj Finserv Health"
3. **Check textarea** → Shows JSON placeholder
4. **Check button** → "Submit" button is visible and clickable

---

## 🧪 First Test

1. Paste this in the textarea:
```json
{
  "data": ["A", "1", "b", "2", "5"]
}
```

2. Click **Submit**

3. You should see:
   - Loading state briefly
   - Response card appears
   - Checkboxes for selecting data types

4. Check "Numbers" checkbox

5. You should see badges: **1**, **2**, **5**

---

## 📋 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server (auto-reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm install` | Install dependencies |

---

## ⚙️ Prerequisites

- Backend must be running on http://localhost:3000
- Node.js 14+ installed
- npm installed

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
VITE_PORT=5174 npm run dev
```

### npm install fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Backend Not Responding
```bash
# Make sure backend is running
# In another terminal:
cd backend
npm start
```

### JSON Validation Error
- Check JSON syntax (use validator: jsonlint.com)
- Must have valid format: `{"data": [...]}`

---

## 📁 File Structure Quick Reference

```
src/
├── App.jsx      ← Main component (all logic here)
├── App.css      ← All styling (no libraries used)
└── main.jsx     ← Entry point
```

---

## 🎨 What's Included

✅ **Functional Components** - All React code  
✅ **useState Hooks** - For state management  
✅ **Fetch API** - For backend communication  
✅ **JSON Validation** - Before API call  
✅ **Multi-Select UI** - Checkbox filtering  
✅ **Loading State** - While processing  
✅ **Error Handling** - User-friendly messages  
✅ **Responsive Design** - Works on all devices  
✅ **Animations** - Smooth transitions  
✅ **Dark Mode** - Auto-detected  

---

## 💡 Key Features in Code

### Input Validation
```javascript
const validateJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

### API Call with Fetch
```javascript
const apiResponse = await fetch('http://localhost:3000/bfhl', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(parsedData),
});
```

### Multi-Select Logic
```javascript
const handleOptionChange = (option) => {
  const newSelected = new Set(selectedOptions);
  if (newSelected.has(option)) {
    newSelected.delete(option);
  } else {
    newSelected.add(option);
  }
  setSelectedOptions(newSelected);
};
```

---

## 🌐 Test with Different Data

### Test 1: Numbers Only
```json
{"data": ["1", "2", "3", "5"]}
```
Select "Numbers" → Shows: 1, 2, 3, 5

### Test 2: Alphabets Only
```json
{"data": ["A", "b", "z", "M"]}
```
Select "Alphabets" → Shows: A, b, z, M  
Select "Highest Lowercase Alphabet" → Shows: z

### Test 3: Mixed Data
```json
{"data": ["X", "1", "y", "7", "2", "a"]}
```
Test all three options

### Test 4: Invalid JSON
```
{not valid json}
```
Should show error: "Invalid JSON format"

---

## ✨ Styling Highlights

- **No external libraries** - Pure CSS only
- **CSS Grid & Flexbox** - Modern layout
- **CSS Variables** - Easy theming
- **Smooth animations** - Polished UX
- **Mobile responsive** - Works on all screens
- **Dark mode** - Automatic based on OS

---

## 🔧 Development Tips

1. **Open DevTools** - F12 or Ctrl+Shift+I
2. **Check Console** - For errors or API issues
3. **Hot Reload** - Changes save automatically
4. **Network Tab** - See API requests in real-time
5. **Responsive Design Mode** - Test mobile view

---

## 📊 Vercel One-Click Deploy

1. Push to GitHub
2. Visit https://vercel.com/new
3. Select GitHub repo
4. Deploy (auto-configured for Vite)

---

## 📞 Support

Backend Documentation: See `backend/README.md`  
For issues: Check console errors or verify backend is running

---

**Ready? Run `npm run dev` and go! 🎉**
