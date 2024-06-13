import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const EmergencyReport = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [diseaseType, setDiseaseType] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleReport = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/report-emergency', { phoneNumber, diseaseType });
      if (response.data.success) {
        alert('Emergency reported successfully');
        navigate(`/hospital-map?diseaseType=${diseaseType}`); // Use navigate to redirect
      } else {
        alert('Failed to report emergency');
      }
    } catch (error) {
      console.error('Error reporting emergency', error);
      alert('Failed to report emergency');
    }
  };

  return (
    <div>
      <h2>Report Emergency</h2>
      <form onSubmit={handleReport}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Disease Type"
          value={diseaseType}
          onChange={(e) => setDiseaseType(e.target.value)}
          required
        />
        <button type="submit">Report</button>
      </form>
    </div>
  );
};

export default EmergencyReport;
