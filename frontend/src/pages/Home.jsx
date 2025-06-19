import React, { useState } from 'react';
import AreaList from '../components/AreaList';
import CustomerList from '../components/CustomerList';
import AddAreaForm from '../components/AddAreaForm';
import AddCustomerForm from '../components/AddCustomerForm';


const Home = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div className="container">
      <h1>📡 Cable Manager</h1>

      <AddAreaForm onAreaAdded={refresh} />
      <AreaList key={refreshFlag} onSelectArea={setSelectedArea} />

      <hr />

      {selectedArea && (
        <>
          <AddCustomerForm area={selectedArea} onCustomerAdded={refresh} />
          <CustomerList area={selectedArea} refreshFlag={refreshFlag} />

        </>
      )}
    </div>
  );
};

export default Home;
