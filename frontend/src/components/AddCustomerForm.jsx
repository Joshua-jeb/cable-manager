import React, { useState } from 'react';
import API from '../api';

const AddCustomerForm = ({ areaId }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/customers', { name, contact, areaId });
      setName('');
      setContact('');
      alert('Customer added successfully');
    } catch (err) {
      alert('Failed to add customer');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
