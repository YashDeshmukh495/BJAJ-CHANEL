const express = require('express');
const router = express.Router();

// Hardcoded user information
const USER_ID = 'yash_deshmukh_25052003';
const EMAIL = 'yash.deshmukh@acropolis.in';
const ROLL_NUMBER = '0827AL243D12';

/**
 * Utility function to check if a number is prime
 */
function isPrime(num) {
  const n = parseInt(num);
  if (isNaN(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Get file MIME type from Buffer
 */
function getMimeType(buffer) {
  // Check magic numbers for common file types
  if (!buffer || buffer.length === 0) return 'application/octet-stream';

  const hex = buffer.toString('hex', 0, 4).toUpperCase();

  // PNG
  if (hex.startsWith('89504E47')) return 'image/png';
  
  // JPEG
  if (hex.startsWith('FFD8FF')) return 'image/jpeg';
  
  // PDF
  if (hex.startsWith('25504446')) return 'application/pdf';
  
  // GIF
  if (hex.startsWith('47494638')) return 'image/gif';
  
  // BMP
  if (hex.startsWith('424D')) return 'image/bmp';
  
  // ZIP / DOCX / XLSX
  if (hex.startsWith('504B0304')) return 'application/zip';
  
  // Default
  return 'application/octet-stream';
}

/**
 * Validate Base64 string
 */
function isValidBase64(str) {
  try {
    if (!str || typeof str !== 'string') return false;

    const decoded = Buffer.from(str, 'base64');
    const reEncoded = decoded.toString('base64');

    return reEncoded === str.replace(/\r?\n|\r/g, '');
  } catch {
    return false;
  }
}

/**
 * GET /bfhl
 * Returns operation code
 */
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      operation_code: 1
    });
  } catch (error) {
    console.error('GET /bfhl error:', error);
    res.status(500).json({
      is_success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /bfhl
 * Processes data and file, returns processed information
 */
router.post('/', (req, res) => {
  try {
    const { data, file_b64 } = req.body;

    // Validation
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        message: 'Invalid request: data field must be an array'
      });
    }

    // Initialize response variables
    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = [];
    let is_prime_found = false;
    let file_valid = false;
    let file_mime_type = null;
    let file_size_kb = 0;

    // Process data array
    for (const item of data) {
      const str = String(item).trim();
      
      // Check if it's a number
      if (/^\d+$/.test(str)) {
        numbers.push(str);
        // Check for prime
        if (isPrime(str)) {
          is_prime_found = true;
        }
      }
      // Check if it's an alphabet (single character)
      else if (/^[a-zA-Z]$/.test(str)) {
        alphabets.push(str);
      }
    }

    // Find highest lowercase alphabet (a-z order)
    const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
    if (lowercaseAlphabets.length > 0) {
      const highest = lowercaseAlphabets.sort().pop();
      highest_lowercase_alphabet = [highest];
    }

    // Process file if provided
    if (file_b64 && file_b64.trim() !== '') {
      if (isValidBase64(file_b64)) {
        try {
          const buffer = Buffer.from(file_b64, 'base64');
          file_valid = true;
          file_mime_type = getMimeType(buffer);
          file_size_kb = (buffer.length / 1024).toFixed(2);
        } catch (error) {
          file_valid = false;
          console.error('File processing error:', error);
        }
      }
    }

    // Build response
    const response = {
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet,
      is_prime_found: is_prime_found,
      file_valid: file_valid,
      file_mime_type: file_mime_type,
      file_size_kb: file_size_kb
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('POST /bfhl error:', error);
    res.status(500).json({
      is_success: false,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      message: 'Internal server error',
      numbers: [],
      alphabets: [],
      highest_lowercase_alphabet: [],
      is_prime_found: false,
      file_valid: false,
      file_mime_type: null,
      file_size_kb: 0
    });
  }
});

module.exports = router;
