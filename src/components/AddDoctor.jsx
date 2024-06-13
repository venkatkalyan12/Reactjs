import React, { useState } from 'react';
import axios from 'axios';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [hospitalUsername, setHospitalUsername] = useState('');

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/add-doctor', { name, speciality, contactNumber, hospitalUsername });
      alert('Doctor added successfully');
    } catch (error) {
      console.error('Error adding doctor', error);
      alert('Failed to add doctor');
    }
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleAddDoctor}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />
        <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        <input type="text" placeholder="Hospital Username" value={hospitalUsername} onChange={(e) => setHospitalUsername(e.target.value)} required />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
