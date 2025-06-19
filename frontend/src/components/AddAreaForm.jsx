import React, { useState } from 'react';
import API from '../api';

const AddAreaForm = ({ onAreaAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await API.post('/areas', { name });
      setName('');
      onAreaAdded(); // refresh area list
    } catch (err) {
      alert('Error adding area');
      console.error(err);
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
      />
      <button type="submit">Add Area</button>
    </form>
  );
};

export default AddAreaForm;
