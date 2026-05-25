# Bajaj Finserv Health Dev Challenge - Frontend

A production-ready React frontend for the Bajaj Finserv Health Dev Challenge with modern UI and responsive design.

## Features

✅ React 18 with Functional Components  
✅ Modern responsive UI with card layout  
✅ JSON input validation  
✅ Multi-select data filtering  
✅ Loading states  
✅ Error handling  
✅ Smooth animations  
✅ Mobile-friendly design  
✅ Dark mode support  
✅ No external UI libraries (pure CSS)  

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx              # Main component with all logic
│   ├── App.css              # Complete styling
│   └── main.jsx             # React entry point
├── public/                  # Static assets
├── index.html               # HTML entry point (title: 0827AL243D12)
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── README.md                # This file
└── .gitignore              # Git ignore rules
```

## Installation

### Prerequisites
- Node.js 14+ installed
- npm installed

### Setup Steps

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Usage Guide

### 1. Input JSON Data
- Paste or type JSON in the textarea
- Example format:
  ```json
  {
    "data": ["A", "C", "z"]
  }
  ```

### 2. Submit the Form
- Click the "Submit" button
- The app validates JSON format automatically
- Shows "Processing..." while loading

### 3. Select Data to Display
After successful API response, use checkboxes to select:
- **Alphabets** - Display all alphabetic characters
- **Numbers** - Display all numeric strings
- **Highest Lowercase Alphabet** - Display the highest lowercase letter

### 4. View Results
Selected data displays in beautiful badge cards

### 5. Reset
Click "Reset" to clear all data and start over

## Component Details

### State Management (useState)
- `jsonInput` - Current textarea value
- `error` - Error message display
- `loading` - API loading state
- `response` - API response data
- `selectedOptions` - Selected display options (Set)

### Key Functions

**validateJSON(str)**
- Validates JSON format before API call
- Returns boolean

**handleSubmit(e)**
- Validates JSON
- Calls backend API at http://localhost:3000/bfhl
- Handles errors gracefully

**handleOptionChange(option)**
- Manages selected options using Set
- Toggles option on/off

**renderResponseData()**
- Renders only selected data
- Returns formatted badge components

## API Integration

### Endpoint
```
POST http://localhost:3000/bfhl
```

### Request Format
```json
{
  "data": ["A", "1", "b", "2"],
  "file_b64": ""
}
```

### Expected Response
```json
{
  "is_success": true,
  "user_id": "yash_deshmukh_25052003",
  "email": "yash.deshmukh@acropolis.in",
  "roll_number": "0827AL243D12",
  "numbers": ["1", "2"],
  "alphabets": ["A", "b"],
  "highest_lowercase_alphabet": ["b"],
  "is_prime_found": false,
  "file_valid": false,
  "file_mime_type": null,
  "file_size_kb": 0
}
```

## Styling

### Color Scheme
- Primary: `#0066cc` (Blue)
- Success: `#28a745` (Green)
- Danger: `#dc3545` (Red)
- Background: `#f5f7fa` (Light Gray)

### Key CSS Features
- CSS Grid for responsive layout
- Flexbox for component alignment
- Smooth animations and transitions
- CSS custom properties for theming
- Media queries for mobile responsiveness
- Dark mode support with prefers-color-scheme

### Breakpoints
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## Error Handling

### Input Validation
- Empty input → "Invalid JSON format"
- Invalid JSON → "Invalid JSON format"

### API Error
- Network error → "API request failed"
- Server error → "API request failed"

### Loading State
- Disabled submit button
- Shows "Processing..." text
- Prevents multiple submissions

## Animations

- **Slide In Up** - Card entrance animation
- **Fade In** - Response data appearance
- **Pop In** - Badge emergence
- **Spin** - Loading spinner

All animations respect `prefers-reduced-motion` for accessibility.

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Responsive Design

### Mobile (< 480px)
- Single column layout
- Larger touch targets
- Optimized font sizes
- Stacked options

### Tablet (481px - 768px)
- Two column layout where applicable
- Adjusted spacing
- Medium touch targets

### Desktop (> 768px)
- Full layout with sidebar space
- Optimized spacing
- Maximum content width

## Performance

- No external libraries (faster load)
- Optimized CSS animations (60fps)
- Efficient state management
- Lazy rendering of response data

## Accessibility

- Semantic HTML
- ARIA labels on inputs
- Keyboard navigation support
- High contrast colors
- Focus visible states
- Reduced motion support

## Building & Deployment

### Build for Production
```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Deploy to Vercel (Example)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify (Example)
```bash
npm run build
# Drag dist/ folder to Netlify
```

## Development Tips

1. **Test JSON validation** with various inputs
2. **Check browser console** for API errors
3. **Use browser DevTools** for styling adjustments
4. **Test on mobile devices** for responsiveness
5. **Clear localStorage** if needed: `localStorage.clear()`

## Known Limitations

- Backend must be running on http://localhost:3000
- No file upload UI (API accepts base64 in request body)
- Data size limited by browser/server (10MB default)

## Future Enhancements

- Add file upload feature
- Export results as JSON/CSV
- History of previous requests
- Theme toggle (light/dark)
- Copy to clipboard functionality

## Support

For issues or questions:
1. Check browser console for errors
2. Verify backend is running
3. Check CORS settings in backend
4. Review API response format

## License

MIT

---

**Browser Tab Title:** 0827AL243D12  
**Version:** 1.0.0
