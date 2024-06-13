import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const HospitalRegistration = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState(37.7749);
  const [longitude, setLongitude] = useState(-122.4194);

  const onMapClick = (event) => {
    setLatitude(event.latLng.lat());
    setLongitude(event.latLng.lng());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hospitalData = {
      name,
      address,
      latitude,
      longitude,
      contactNumber,
      username,
      password
    };
    try {
      await axios.post('/api/register-hospital', hospitalData);
      alert('Hospital registered successfully');
    } catch (error) {
      console.error('Error registering hospital', error);
      alert('Failed to register hospital');
    }
  };

  return (
    <div>
      <h2>Register Hospital</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoadScript googleMapsApiKey="AIzaSyCu1PPTMUpSBe5vWt_3N8mp_pU2GHpW524">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: latitude, lng: longitude }}
            zoom={10}
            onClick={onMapClick}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </LoadScript>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default HospitalRegistration;
