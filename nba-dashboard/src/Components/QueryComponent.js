// QueryComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const QueryComponent = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const executeQuery = async () => {
    try {
      const response = await axios.post('http://localhost:3001/execute-query', {
        query: query,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error executing query:', error);
      setResult(null);
    }
  };

  return (
    <div>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter SQL query"
      />
      <button onClick={executeQuery}>Execute Query</button>
      {result && (
        <div>
          <h2>Query Results:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QueryComponent;
