import React, { useEffect, useState } from 'react';
import API from '../api';

const CustomerList = ({ area, refreshFlag }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      if (!area?._id) return;

      try {
        const res = await API.get(`/customers?areaId=${area._id}`);
        setCustomers(res.data);
        console.log('Fetched customers:', res.data); // ✅ Debug log
      } catch (err) {
        console.error('Error fetching customers:', err);
      }
    };

    fetchCustomers();
  }, [area, refreshFlag]); // ✅ re-fetch on area change or refresh

  if (!area) return <p>Please select an area first.</p>;

  return (
    <div>
      <h3>Customers in {area.name}</h3>
      {customers.length === 0 ? (
        <p>No customers found for this area.</p>
      ) : (
        <ul>
          {customers.map((c) => (
            <li key={c._id}>
              {c.name} — STB: {c.setTopBoxNumber} — {c.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerList;
