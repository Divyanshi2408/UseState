import React, { useState } from 'react';

const CascadingDropdowns = () => {
  const [country, setCountry] = useState('');
  const [states, setStates] = useState([]);
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  // Data for dropdowns
  const data = {
    USA: {
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Austin', 'Dallas'],
    },
    India: {
      Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
      Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
    },
  };

  // Handle country change
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setStates(Object.keys(data[selectedCountry] || {}));
    setState('');
    setCities([]);
    setCity('');
  };

  // Handle state change
  const handleStateChange = (selectedState) => {
    setState(selectedState);
    setCities(data[country]?.[selectedState] || []);
    setCity('');
  };

  return (
    <div>
      <h2>Cascading Dropdowns</h2>
      <label>
        Country:
        <select
          value={country}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Select a country</option>
          {Object.keys(data).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      {states.length > 0 && (
        <label>
          State:
          <select
            value={state}
            onChange={(e) => handleStateChange(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
      )}

      {cities.length > 0 && (
        <label>
          City:
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>Selected Location:</h3>
        <p>Country: {country || 'None'}</p>
        <p>State: {state || 'None'}</p>
        <p>City: {city || 'None'}</p>
      </div>
    </div>
  );
};

export default CascadingDropdowns;
