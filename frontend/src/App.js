import React, { useState, useEffect } from 'react';
import API from './api';
import AddCustomerForm from './components/AddCustomerForm';

function App() {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      const res = await API.get('/areas');
      setAreas(res.data);
    };
    fetchAreas();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📡 Cable Manager</h2>

      <h3>Select Area:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        {areas.map((area) => (
          <button
            key={area._id}
            onClick={() => setSelectedArea(area)}
            style={{
              padding: '10px 20px',
              backgroundColor: selectedArea?._id === area._id ? '#007bff' : '#ccc',
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

      {selectedArea && (
        <div>
          <h3>➕ Add Customer for {selectedArea.name}</h3>
          <AddCustomerForm areaId={selectedArea._id} />
        </div>
      )}
    </div>
  );
}

export default App;
