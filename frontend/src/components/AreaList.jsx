import React, { useEffect, useState } from 'react';
import API from '../api'; // Your axios config

const AreaList = () => {
  const [areas, setAreas] = useState(null); // Initially null

  useEffect(() => {
  API.get('/areas')
    .then(res => {
      console.log("API response:", res.data);
      setAreas(res.data); // Make sure res.data is actually an array!
    })
    .catch(err => {
      console.error("API error:", err);
      setAreas([]); // fallback to avoid crash
    });
}, []);


  return (
    <div>
      <h2>Areas</h2>

      {/* Show loading message while fetching */}
      {!areas && <p>Loading...</p>}

      {/* Show message if empty array */}
      {Array.isArray(areas) && areas.length === 0 && <p>No areas found</p>}

      {/* Render only if areas is an array */}
      {Array.isArray(areas) &&
        areas.map((area) => (
          <div key={area._id}>{area.name}</div>
        ))
      }
    </div>
  );
};

export default AreaList;
