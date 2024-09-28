import React, { useState } from 'react';
import './OTPPopup.css';

const OTPPopup = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const validateOtp = () => {
    if (otp.length !== 6 || isNaN(otp)) {
      setError('Enter a valid 6-digit OTP');
      return false;
    }
    setError('');
    console.log('OTP is valid:', otp);
    // Handle successful OTP validation here
  };

  return (
    <div className="otp-popup-wrapper">
      <div className="otp-popup">
        <h2>Enter OTP</h2>
        <div className="input-group">
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter 6-digit OTP"
            className={error ? 'input-error' : ''}
          />
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
