import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update to use Routes instead of Switch
import LoginPopup from './LoginPopup';
import OTPPopup from './OTPPopup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPopup />} /> 
        <Route path="/otp" element={<OTPPopup />} />
      </Routes>
    </Router>
  );
}

export default App;
