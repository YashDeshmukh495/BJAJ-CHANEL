import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Roll number as browser title
  useEffect(() => {
    document.title = '0827AL243D12';
  }, []);

  const validateJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setResponse(null);
    setSelectedOptions([]);

    if (!jsonInput.trim() || !validateJSON(jsonInput)) {
      setError('Invalid JSON format');
      return;
    }

    setLoading(true);

    try {
      const parsedData = JSON.parse(jsonInput);

      const apiResponse = await fetch('https://bajaj-backend-32p9.onrender.com/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });

      if (!apiResponse.ok) {
        throw new Error();
      }

      const result = await apiResponse.json();
      setResponse(result);
    } catch {
      setError('API request failed');
    }

    setLoading(false);
  };

  // Multi-select dropdown handler
  const handleSelectChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(values);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Bajaj Finserv Health</h1>
        <p className="subtitle">Data Processing Challenge</p>
      </header>

      <main className="app-main">
        <div className="card input-card">
          <h2>JSON Input</h2>

          <form onSubmit={handleSubmit}>
            <textarea
              className="json-input"
              value={jsonInput}
              onChange={handleInputChange}
              placeholder={`{
  "data":["A","C","z"]
}`}
              disabled={loading}
            />

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        </div>

        {response && (
          <div className="card response-card">
            <h2>Select Data</h2>

            {/* Multi Select Dropdown */}
            <select
              multiple
              className="multi-select"
              value={selectedOptions}
              onChange={handleSelectChange}
            >
              <option value="Alphabets">
                Alphabets
              </option>

              <option value="Numbers">
                Numbers
              </option>

              <option value="Highest Lowercase Alphabet">
                Highest Lowercase Alphabet
              </option>
            </select>

            <div className="response-display">
              {selectedOptions.includes(
                'Alphabets'
              ) && (
                <div className="response-item">
                  <h4>Alphabets</h4>
                  <div className="data-array">
                    {response.alphabets?.map(
                      (item, idx) => (
                        <span
                          key={idx}
                          className="data-badge"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {selectedOptions.includes(
                'Numbers'
              ) && (
                <div className="response-item">
                  <h4>Numbers</h4>
                  <div className="data-array">
                    {response.numbers?.map(
                      (item, idx) => (
                        <span
                          key={idx}
                          className="data-badge"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {selectedOptions.includes(
                'Highest Lowercase Alphabet'
              ) && (
                <div className="response-item">
                  <h4>
                    Highest Lowercase
                    Alphabet
                  </h4>

                  <div className="data-array">
                    {response.highest_lowercase_alphabet?.map(
                      (item, idx) => (
                        <span
                          key={idx}
                          className="data-badge"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              className="reset-button"
              onClick={() => {
                setJsonInput('');
                setResponse(null);
                setSelectedOptions([]);
                setError('');
              }}
            >
              Reset
            </button>
          </div>
        )}
      </main>
    </div>
  );
}