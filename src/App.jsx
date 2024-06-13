import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HospitalRegistration from './components/HospitalRegistration';
import HospitalLogin from './components/HospitalLogin';
import AddDoctor from './components/AddDoctor';
import AddDisease from './components/AddDisease';
import EmergencyReport from './components/EmergencyReport';
import HospitalMap from './components/HospitalMap';

const App = () => (
    <Router>
        <Routes>
            <Route path="/register-hospital" element={<HospitalRegistration />} />
            <Route path="/login-hospital" element={<HospitalLogin />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/add-disease" element={<AddDisease />} />
            <Route path="/emergency-report" element={<EmergencyReport />} />
            <Route path="/hospital-map" element={<HospitalMap />} />
        </Routes>
    </Router>
);

export default App;
