import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const HospitalMap = () => {
  const [directions, setDirections] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  const searchParams = new URLSearchParams(useLocation().search);
  const diseaseType = searchParams.get('diseaseType');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCu1PPTMUpSBe5vWt_3N8mp_pU2GHpW524',
    libraries: ['places']
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const fetchHospitals = async () => {
      try {
        const response = await axios.get(`/api/nearby-hospitals?diseaseType=${diseaseType}&latitude=${latitude}&longitude=${longitude}`);
        setHospitals(response.data.hospitals);
      } catch (error) {
        console.error('Error fetching nearby hospitals', error);
      }
    };

    if (latitude && longitude) {
      fetchHospitals();
    }
  }, [latitude, longitude, diseaseType]);

  const handleMarkerClick = useCallback((hospital) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new window.google.maps.LatLng(latitude, longitude),
        destination: new window.google.maps.LatLng(hospital.latitude, hospital.longitude),
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, [latitude, longitude]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Nearby Hospitals</h2>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={12}
      >
        {latitude && longitude && (
          <Marker position={{ lat: latitude, lng: longitude }} label="You" />
        )}
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={{ lat: hospital.latitude, lng: hospital.longitude }}
            onClick={() => handleMarkerClick(hospital)}
          />
        ))}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default HospitalMap;
