import React, { useState } from 'react';
import API from '../api';

const AddCustomerForm = ({ area, onCustomerAdded }) => {
  const [name, setName] = useState('');
  const [setTopBoxNumber, setSetTopBoxNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!area) return alert('Please select an area first.');

    try {
      const response = await API.post('/customers', {
        name,
        setTopBoxNumber,
        areaId: area._id,
        status: 'not recharged',
      });

      if (response.status === 201) {
        console.log('Customer added:', response.data);

        setName('');
        setSetTopBoxNumber('');
        onCustomerAdded(); // ✅ triggers parent to reload customer list
      } else {
        alert('Customer not saved!');
      }
    } catch (err) {
      alert('Error adding customer!');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Customer name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Set Top Box number"
        value={setTopBoxNumber}
        onChange={(e) => setSetTopBoxNumber(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
