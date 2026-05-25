# Quick Start Guide - BFHL Backend API

## 🚀 Getting Started (5 minutes)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

**Expected output:**
```
added XX packages in Xs
```

---

### Step 2: Start the Server
```bash
npm start
```

**Expected output:**
```
Server is running on http://localhost:3000
```

---

### Step 3: Test the API

Open a new terminal and run:

#### Test GET endpoint:
```bash
curl http://localhost:3000/bfhl
```

**Expected response:**
```json
{
  "operation_code": 1
}
```

#### Test POST endpoint:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["M","1","334","4","B","Z","a","7"]}'
```

**Expected response:**
```json
{
  "is_success": true,
  "user_id": "yash_deshmukh_25052003",
  "email": "yash.deshmukh@college.edu",
  "roll_number": "BJAJ001",
  "numbers": ["1", "334", "4", "7"],
  "alphabets": ["M", "B", "Z", "a"],
  "highest_lowercase_alphabet": ["a"],
  "is_prime_found": true,
  "file_valid": false,
  "file_mime_type": null,
  "file_size_kb": 0
}
```

---

## 📋 Common Tasks

### Update User Information
Edit `routes/bfhl.js` and change:
```javascript
const USER_ID = 'your_id_here';
const EMAIL = 'your_email@college.edu';
const ROLL_NUMBER = 'your_roll_number';
```

### Run on Different Port
```bash
PORT=8000 npm start
```

### Enable Development Mode
```bash
NODE_ENV=development npm start
```

---

## 🧪 Testing with Different Data

### Test with Prime Numbers
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["2","3","5","7","11"]}'
```

Response will have `"is_prime_found": true`

### Test with Only Lowercase
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["a","m","z","b"]}'
```

Response will have `"highest_lowercase_alphabet": ["z"]`

### Test with Base64 File
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{
    "data":["A","1"],
    "file_b64":"iVBORw0KGgoAAAANSUhEUgAAAAUA"
  }'
```

Response will have file details filled in.

---

## 📁 Project Structure
```
backend/
├── server.js              # Main application
├── package.json           # Dependencies
├── routes/
│   └── bfhl.js           # API logic
├── README.md             # Full documentation
├── QUICKSTART.md         # This file
├── TEST_EXAMPLES.js      # Test cases
├── .env.example          # Environment template
└── .gitignore           # Git ignore rules
```

---

## 🔍 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti :3000 | xargs kill -9
# Or use different port
PORT=3001 npm start
```

### npm install fails
```bash
# Clear npm cache
npm cache clean --force
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

### Server won't start
- Check Node.js version: `node --version` (should be 14+)
- Check port 3000 is available
- Check error message in console

---

## 📝 NPM Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Start the server |
| `npm list` | List installed packages |
| `npm outdated` | Check for outdated packages |
| `npm update` | Update all packages |

---

## 🌐 API Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/bfhl` | GET | Get operation code |
| `/bfhl` | POST | Process data and file |

---

## ✅ Checklist Before Submission

- [ ] Updated USER_ID in routes/bfhl.js
- [ ] Updated EMAIL in routes/bfhl.js
- [ ] Updated ROLL_NUMBER in routes/bfhl.js
- [ ] Tested GET /bfhl endpoint
- [ ] Tested POST /bfhl endpoint with data only
- [ ] Tested POST /bfhl endpoint with file
- [ ] All responses include required fields
- [ ] Error handling works (try invalid data)
- [ ] Server starts without errors
- [ ] Code follows best practices

---

## 💡 Tips

1. **Test in Postman**: Import TEST_EXAMPLES.js or use the collection details there
2. **Check Logs**: All errors are logged to console for debugging
3. **File Sizes**: Large files (>10MB) are rejected by default
4. **Base64**: Use valid Base64 encoding for file_b64
5. **Data Array**: Can contain strings of numbers or single alphabet characters

---

## 📞 Support

Refer to README.md for comprehensive documentation.

Happy coding! 🎉
