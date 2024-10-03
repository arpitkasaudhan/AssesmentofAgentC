import React, { useState } from 'react';
import './OTPPopup.css';

const OTPPopup = () => {
  const [otp, setOtp] = useState(new Array(6).fill('')); // Array of 6 elements for each digit
  const [error, setError] = useState('');

  const handleOtpChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return; // Only allow numeric input

    let otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Automatically move to the next input box if a digit is entered
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const validateOtp = () => {
    const otpString = otp.join(''); // Join the array into a single string
    if (otpString.length !== 6 || isNaN(otpString)) {
      setError('Enter a valid 6-digit OTP');
      return false;
    }
    setError('');
    console.log('OTP is valid:', otpString);
    // Handle successful OTP validation here
  };

  return (
    <div className="otp-popup-wrapper">
      <div className="otp-popup">
        <h2>Enter OTP</h2>
        <div className="input-group">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleOtpChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className={`otp-input ${error ? 'input-error' : ''}`}
            />
          ))}
        </div>

        {error && <div className="error">{error}</div>}

        <button className="verify-btn" onClick={validateOtp}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPPopup;
