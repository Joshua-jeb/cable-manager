import React, { useEffect, useState } from 'react';
import API from '../api'; // Your axios config

const AreaList = () => {
  const [areas, setAreas] = useState(null); // Initially null

  useEffect(() => {
    API.get('/areas')
      .then(res => {
        console.log("API response:", res.data); // 👈 This will show the real format
        setAreas(res.data);
      })
      .catch(err => {
        console.error("Error fetching areas:", err);
        setAreas([]); // Set empty array on error to prevent crash
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
