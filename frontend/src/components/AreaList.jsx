import React, { useEffect, useState } from 'react';
import API from '../api';

const AreaList = ({ onSelectArea }) => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    API.get('/areas')
      .then(res => setAreas(res.data))
      .catch(err => console.error('Error fetching areas:', err));
  }, []);

  return (
    <div>
      <h2>Select Area</h2>
      {areas.map(area => (
        <button key={area._id} onClick={() => onSelectArea(area)}>
          {area.name}
        </button>
      ))}
    </div>
  );
};

export default AreaList;
