import React, { useState, useEffect } from 'react';
import API from './api';
import AddAreaForm from './components/AddAreaForm';

function App() {
  const [areas, setAreas] = useState([]);

  const fetchAreas = async () => {
    try {
      const res = await API.get('/areas');
      setAreas(res.data);
    } catch (err) {
      console.error("Failed to fetch areas", err);
    }
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📡 Cable Manager</h2>

      <AddAreaForm onAreaAdded={fetchAreas} />

      <h3>Areas:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {areas.map((area) => (
          <button
            key={area._id}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {area.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
