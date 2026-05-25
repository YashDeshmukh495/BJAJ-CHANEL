/**
 * Test Examples for BFHL API
 * Use these requests to test the API endpoints
 */

// Test Data Examples

const testCases = {
  // Test case 1: Basic data with lowercase alphabet
  test1: {
    description: "Basic test with numbers and alphabets",
    data: {
      data: ["A", "1", "2", "b", "3", "Z"],
      file_b64: null
    },
    expectedFields: {
      numbers: ["1", "2", "3"],
      alphabets: ["A", "b", "Z"],
      highest_lowercase_alphabet: ["b"],
      is_prime_found: true
    }
  },

  // Test case 2: With prime numbers
  test2: {
    description: "Test with prime numbers",
    data: {
      data: ["M", "1", "334", "4", "B", "Z", "a", "7"],
      file_b64: null
    },
    expectedFields: {
      numbers: ["1", "334", "4", "7"],
      alphabets: ["M", "B", "Z", "a"],
      highest_lowercase_alphabet: ["a"],
      is_prime_found: true // 7 is prime
    }
  },

  // Test case 3: Only numbers (no primes)
  test3: {
    description: "Only even numbers (no primes)",
    data: {
      data: ["2", "4", "6", "8"],
      file_b64: null
    },
    expectedFields: {
      numbers: ["2", "4", "6", "8"],
      alphabets: [],
      highest_lowercase_alphabet: [],
      is_prime_found: true // 2 is prime
    }
  },

  // Test case 4: Mixed with multiple lowercase
  test4: {
    description: "Multiple lowercase - should return highest",
    data: {
      data: ["a", "z", "m", "b", "1"],
      file_b64: null
    },
    expectedFields: {
      numbers: ["1"],
      alphabets: ["a", "z", "m", "b"],
      highest_lowercase_alphabet: ["z"],
      is_prime_found: false
    }
  },

  // Test case 5: No numbers or alphabets
  test5: {
    description: "Invalid data - special characters only",
    data: {
      data: ["!", "@", "#"],
      file_b64: null
    },
    expectedFields: {
      numbers: [],
      alphabets: [],
      highest_lowercase_alphabet: [],
      is_prime_found: false
    }
  }
};

/**
 * cURL Commands for Testing
 */

const curlCommands = {
  // GET request
  getRequest: `curl -X GET http://localhost:3000/bfhl`,

  // POST with basic data
  postBasic: `curl -X POST http://localhost:3000/bfhl \\
  -H "Content-Type: application/json" \\
  -d '{"data":["M","1","334","4","B","Z","a","7"]}'`,

  // POST with empty file_b64
  postNoFile: `curl -X POST http://localhost:3000/bfhl \\
  -H "Content-Type: application/json" \\
  -d '{"data":["A","1","b","2"],"file_b64":""}'`,

  // POST with invalid data
  postInvalidData: `curl -X POST http://localhost:3000/bfhl \\
  -H "Content-Type: application/json" \\
  -d '{"data":"not_an_array"}'`,

  // POST with invalid Base64
  postInvalidBase64: `curl -X POST http://localhost:3000/bfhl \\
  -H "Content-Type: application/json" \\
  -d '{"data":["a","1"],"file_b64":"invalid!!!base64"}'`
};

/**
 * Postman Collection (Import as JSON)
 */

const postmanCollection = {
  info: {
    name: "BFHL API Tests",
    description: "Test collection for Bajaj Finserv Health API",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  item: [
    {
      name: "GET /bfhl",
      request: {
        method: "GET",
        header: [],
        url: {
          raw: "http://localhost:3000/bfhl",
          protocol: "http",
          host: ["localhost"],
          port: "3000",
          path: ["bfhl"]
        }
      }
    },
    {
      name: "POST /bfhl - Basic",
      request: {
        method: "POST",
        header: [
          {
            key: "Content-Type",
            value: "application/json"
          }
        ],
        body: {
          mode: "raw",
          raw: JSON.stringify({
            data: ["M", "1", "334", "4", "B", "Z", "a", "7"],
            file_b64: ""
          }, null, 2)
        },
        url: {
          raw: "http://localhost:3000/bfhl",
          protocol: "http",
          host: ["localhost"],
          port: "3000",
          path: ["bfhl"]
        }
      }
    },
    {
      name: "POST /bfhl - With File",
      request: {
        method: "POST",
        header: [
          {
            key: "Content-Type",
            value: "application/json"
          }
        ],
        body: {
          mode: "raw",
          raw: JSON.stringify({
            data: ["M", "1", "334"],
            file_b64: "iVBORw0KGgoAAAANSUhEUgAAAAUA"
          }, null, 2)
        },
        url: {
          raw: "http://localhost:3000/bfhl",
          protocol: "http",
          host: ["localhost"],
          port: "3000",
          path: ["bfhl"]
        }
      }
    }
  ]
};

/**
 * JavaScript/Fetch Test
 */

async function testAPI() {
  const baseURL = "http://localhost:3000";

  try {
    // Test GET
    console.log("Testing GET /bfhl...");
    const getResponse = await fetch(`${baseURL}/bfhl`);
    const getData = await getResponse.json();
    console.log("GET Response:", getData);

    // Test POST
    console.log("\nTesting POST /bfhl...");
    const postResponse = await fetch(`${baseURL}/bfhl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: ["M", "1", "334", "4", "B", "Z", "a", "7"],
        file_b64: ""
      })
    });
    const postData = await postResponse.json();
    console.log("POST Response:", postData);

  } catch (error) {
    console.error("Error:", error);
  }
}

// Export for use in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    testCases,
    curlCommands,
    postmanCollection,
    testAPI
  };
}
