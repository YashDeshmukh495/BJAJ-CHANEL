# Bajaj Finserv Health Dev Challenge - Backend

A production-ready Node.js + Express backend API for the Bajaj Finserv Health Dev Challenge.

## Project Structure

```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies and scripts
├── routes/
│   └── bfhl.js        # BFHL API routes
└── README.md          # This file
```

## Features

- ✅ Express.js REST API
- ✅ CORS enabled
- ✅ Comprehensive error handling
- ✅ Input validation
- ✅ Prime number detection
- ✅ File MIME type detection
- ✅ Base64 file handling
- ✅ Production-ready code

## Installation

### Prerequisites
- Node.js 14+ installed
- npm installed

### Setup Steps

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `express` - Web framework
   - `cors` - Cross-Origin Resource Sharing
   - `file-type` - File type detection (optional, using magic numbers in code)

## Running the Server

### Development Mode
```bash
npm start
```

### Custom Port
```bash
PORT=5000 npm start
```

The server will start on `http://localhost:3000` (or your specified PORT).

## API Endpoints

### 1. GET /bfhl
Returns the operation code.

**Request:**
```bash
curl http://localhost:3000/bfhl
```

**Response (200 OK):**
```json
{
  "operation_code": 1
}
```

---

### 2. POST /bfhl
Processes data and file information.

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "data": ["M", "1", "334", "4", "B", "Z", "a", "7"],
  "file_b64": "BASE64_STRING_HERE"
}
```

**Response (200 OK):**
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
  "file_valid": true,
  "file_mime_type": "image/png",
  "file_size_kb": "15.50"
}
```

**Error Response (400 Bad Request):**
```json
{
  "is_success": false,
  "user_id": "yash_deshmukh_25052003",
  "email": "yash.deshmukh@college.edu",
  "roll_number": "BJAJ001",
  "message": "Invalid request: data field must be an array"
}
```

---

## Request Examples

### Using cURL

**GET request:**
```bash
curl -X GET http://localhost:3000/bfhl
```

**POST request with data only:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["M","1","334","4","B","Z","a","7"]}'
```

**POST request with file:**
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{
    "data":["M","1","334","4","B","Z","a","7"],
    "file_b64":"iVBORw0KGgoAAAANSUhEUgAAAAUA..."
  }'
```

### Using JavaScript/Node.js

```javascript
const axios = require('axios');

const payload = {
  data: ["M", "1", "334", "4", "B", "Z", "a", "7"],
  file_b64: "BASE64_STRING_HERE"
};

axios.post('http://localhost:3000/bfhl', payload)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

### Using Postman

1. **Create GET request:**
   - URL: `http://localhost:3000/bfhl`
   - Method: GET
   - Click Send

2. **Create POST request:**
   - URL: `http://localhost:3000/bfhl`
   - Method: POST
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "data": ["M", "1", "334", "4", "B", "Z", "a", "7"],
     "file_b64": "BASE64_STRING_HERE"
   }
   ```
   - Click Send

---

## Response Field Details

| Field | Type | Description |
|-------|------|-------------|
| `is_success` | boolean | Operation success status |
| `user_id` | string | Hardcoded user identifier |
| `email` | string | Hardcoded user email |
| `roll_number` | string | Hardcoded user roll number |
| `numbers` | array | Numeric strings from data |
| `alphabets` | array | Alphabetic characters from data |
| `highest_lowercase_alphabet` | array | Highest lowercase alphabet (a-z) |
| `is_prime_found` | boolean | Whether any prime found in numbers |
| `file_valid` | boolean | Is the Base64 file valid |
| `file_mime_type` | string | MIME type of the file (null if invalid) |
| `file_size_kb` | string | File size in KB (0 if invalid) |

---

## Algorithm Details

### Prime Number Detection
- Checks each number in the data array
- Returns `true` if any number is prime
- Uses trial division algorithm up to √n

### Highest Lowercase Alphabet
- Filters only lowercase letters (a-z)
- Sorts alphabetically
- Returns the last character in sorted order
- Example: ["a", "z", "m"] → ["z"]

### File Processing
- Validates Base64 encoding
- Detects MIME type using magic numbers
- Supported formats: PNG, JPEG, PDF, GIF, BMP, ZIP
- Calculates size in KB (2 decimal places)

### MIME Types Detected
- `image/png` - PNG files
- `image/jpeg` - JPEG files
- `application/pdf` - PDF files
- `image/gif` - GIF files
- `image/bmp` - BMP files
- `application/zip` - ZIP archives
- `application/octet-stream` - Unknown format

---

## Error Handling

The API includes comprehensive error handling:

1. **Invalid data array** - 400 Bad Request
2. **Missing fields** - 400 Bad Request
3. **Invalid Base64** - Returns `file_valid: false`
4. **Server errors** - 500 Internal Server Error

---

## Configuration

### Hardcoded Values (Update as needed)

Edit `routes/bfhl.js` and update these constants:
```javascript
const USER_ID = 'yash_deshmukh_25052003';
const EMAIL = 'yash.deshmukh@college.edu';
const ROLL_NUMBER = 'BJAJ001';
```

### Request Size Limits

Default limits in `server.js`:
- JSON body: 10MB
- URL-encoded body: 10MB

---

## Testing

### Quick Test

1. Start the server:
   ```bash
   npm start
   ```

2. In another terminal, test GET endpoint:
   ```bash
   curl http://localhost:3000/bfhl
   ```

3. Test POST endpoint:
   ```bash
   curl -X POST http://localhost:3000/bfhl \
     -H "Content-Type: application/json" \
     -d '{"data":["A","2","5","b"]}'
   ```

---

## Dependencies

```json
{
  "express": "^4.18.2",    // Web framework
  "cors": "^2.8.5",        // Cross-origin support
  "file-type": "^16.5.4"   // File type detection (optional)
}
```

---

## Deployment

### Using Node

```bash
npm install
npm start
```

### Using Docker (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t bfhl-api .
docker run -p 3000:3000 bfhl-api
```

---

## Performance Considerations

- Uses efficient prime checking (trial division)
- Minimal memory footprint
- Supports large Base64 files (up to 10MB)
- Handles concurrent requests efficiently

---

## License

MIT

---

## Support

For issues or questions, refer to the API documentation above or check the server logs.
