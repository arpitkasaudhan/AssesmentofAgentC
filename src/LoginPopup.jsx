import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { parsePhoneNumber } from 'libphonenumber-js'; // Importing necessary functions from libphonenumber-js
import './LoginPopup.css';
import myImage from './LoginPopup.png';
const countryCodes = [
  { code: '+1', country: 'United States' },
  { code: '+91', country: 'India' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+49', country: 'Germany' },
  { code: '+33', country: 'France' },
  { code: '+81', country: 'Japan' },
  { code: '+61', country: 'Australia' },
  { code: '+82', country: 'South Korea' },
  { code: '+55', country: 'Brazil' },
  { code: '+7', country: 'Russia' },
  { code: '+34', country: 'Spain' },
  { code: '+39', country: 'Italy' },
  { code: '+41', country: 'Switzerland' },
  { code: '+46', country: 'Sweden' },
  { code: '+31', country: 'Netherlands' },
  { code: '+64', country: 'New Zealand' },
  { code: '+351', country: 'Portugal' },
  { code: '+62', country: 'Indonesia' },
  // Add more countries as necessary
];

const LoginPopup = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const validatePhoneNumber = () => {
    try {
      const phoneNumberObject = parsePhoneNumber(`${countryCode} ${phoneNumber}`);
      if (!phoneNumberObject.isValid()) {
        throw new Error('Invalid phone number');
      }
      setError('');
      return true;
    } catch (error) {
      setError('Enter a valid phone number');
      return false;
    }
  };

  const handleSubmit = () => {
    if (validatePhoneNumber()) {
      navigate('/otp');
    }
  };

  return (
    <div className="popup-wrapper">
      <div className="login-popup">
        <div className="image-section">
          <img src= {myImage}alt="Illustration" />
        </div>
        <div className="form-section">
          <button className="close-btn">&times;</button>
          <h2>
            Welcome to the <span className="brand-name">AgentC.Global</span><br /> family—your journey starts here!
          </h2>

          <div className="input-group">
            <div className="country-code-dropdown">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                {countryCodes.map((item, index) => (
                  <option key={index} value={item.code}>
                    {item.code} ({item.country})
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Your Mobile Number"
              className={error ? 'input-error' : ''}
            />
          </div>

          {error && <div className="error">{error}</div>}

          <p>
            By providing my mobile number, I agree to the{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          <button className="get-otp-btn" onClick={handleSubmit}>
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
