import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css'; // Ensure the path is correct

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [adrLine1, setAdrLine1] = useState('');
  const [adrLine2, setAdrLine2] = useState('');
  const [cityName, setCityName] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        age,
        dob,
        gender,
        adr_line_1: adrLine1,
        adr_line_2: adrLine2,
        city_name: cityName,
        state,
        pincode,
        mobile_no: mobileNo,
        email,
        password,
      }),
    });

    if (response.ok) {
      alert('Registration successful');
      navigate('/home'); // Redirect to Home
    } else {
      const errorData = await response.json();
      alert(`Registration failed: ${errorData.message}`);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form-container">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Username (min 3 chars, special character)"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age (must be above 18)"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="date"
              placeholder="Date of Birth"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Address Line 1"
              required
              value={adrLine1}
              onChange={(e) => setAdrLine1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address Line 2"
              value={adrLine2}
              onChange={(e) => setAdrLine2(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="City Name"
              required
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <select
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Select State</option>
              {/* Add all Indian states here */}
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Pincode (6 digits)"
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number (10 digits)"
              required
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="row">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
