import React, { useState} from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://flack-backend.onrender.com/api/quote');
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Quote of the Day</h1>
      <button onClick={fetchQuote}>Get Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
