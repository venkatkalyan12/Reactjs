import React, { useState } from 'react';
import axios from 'axios';

const AddDisease = () => {
  const [diseaseType, setDiseaseType] = useState('');
  const [hospitalUsername, setHospitalUsername] = useState('');

  const handleAddDisease = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/add-disease', { diseaseType, hospitalUsername });
      alert('Disease added successfully');
    } catch (error) {
      console.error('Error adding disease', error);
      alert('Failed to add disease');
    }
  };

  return (
    <div>
      <h2>Add Disease</h2>
      <form onSubmit={handleAddDisease}>
        <input type="text" placeholder="Disease Type" value={diseaseType} onChange={(e) => setDiseaseType(e.target.value)} required />
        <input type="text" placeholder="Hospital Username" value={hospitalUsername} onChange={(e) => setHospitalUsername(e.target.value)} required />
        <button type="submit">Add Disease</button>
      </form>
    </div>
  );
};

export default AddDisease;
