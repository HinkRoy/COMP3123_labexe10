import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

function App() {
  
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [terms, setTerms] = useState(false);

  
  const [submittedData, setSubmittedData] = useState([]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      fullName,
      address,
      address2,
      city,
      province,
      postalCode,
      terms
    };
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
      <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
         <label>Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="1234 Main St"
        />
        <label>Address 2:</label>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          placeholder="Apartment, studio, or floor"
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <label>Province:</label>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        >
          <option value="">Choose...</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Ontario">Ontario</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
        </select>
        <label>Postal Code:</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Postal Code"
        />
        <label>
        Agree to Terms & Conditions:
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
        </label>
       
        <button type="submit">Submit</button>
      </form>

      
      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          {submittedData.map((data, index) => (
            <div key={index}>
              <p>Email: {data.email}</p>
              <p>Full Name: {data.fullName}</p>
              <p>Address: {data.address}</p>
              <p>address2: {data.address2}</p>
              <p>City: {data.city}</p>
              <p>province: {data.province}</p>
              <p>postalCode: {data.postalCode}</p>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

