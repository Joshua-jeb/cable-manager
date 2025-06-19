import React, { useState } from 'react';
import API from '../api'; // axios instance with baseURL set from .env

const AddAreaForm = ({ onAreaAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const response = await API.post('/areas', { name });
      console.log("Area added:", response.data);
      setName('');
      onAreaAdded(); // callback to refresh list
    } catch (err) {
      alert('Error adding area');
      console.error("AddAreaForm error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter area name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: '10px',
          fontSize: '16px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Area
      </button>
    </form>
  );
};

export default AddAreaForm;
