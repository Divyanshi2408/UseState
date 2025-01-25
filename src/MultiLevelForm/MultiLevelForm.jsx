import React, { useState } from "react";

const MultiLevelForm = () => {
  // State for each form level
  const [level1, setLevel1] = useState({ name: "", email: "", isValid: false });
  const [level2, setLevel2] = useState({ age: "", phone: "", isValid: false });
  const [level3, setLevel3] = useState({ address: "", city: "", isValid: false });

  // Validate Level 1
  const validateLevel1 = () => {
    const isValid =
      level1.name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(level1.email);
    setLevel1((prev) => ({ ...prev, isValid }));
  };

  // Validate Level 2
  const validateLevel2 = () => {
    const isValid =
      /^[0-9]+$/.test(level2.age) && level2.age >= 18 &&
      /^[0-9]{10}$/.test(level2.phone);
    setLevel2((prev) => ({ ...prev, isValid }));
  };

  // Validate Level 3
  const validateLevel3 = () => {
    const isValid = level3.address.trim() !== "" && level3.city.trim() !== "";
    setLevel3((prev) => ({ ...prev, isValid }));
  };

  // Check if the entire form is valid
  const isFormValid = level1.isValid && level2.isValid && level3.isValid;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h1>Multi-Level Form with Validation</h1>
      <form onSubmit={handleSubmit}>
        {/* Level 1 */}
        <fieldset>
          <legend>Level 1: Personal Information</legend>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={level1.name}
              onChange={(e) => setLevel1({ ...level1, name: e.target.value })}
              onBlur={validateLevel1}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={level1.email}
              onChange={(e) => setLevel1({ ...level1, email: e.target.value })}
              onBlur={validateLevel1}
            />
          </div>
          {!level1.isValid && <p style={{ color: "red" }}>Level 1 is incomplete or invalid.</p>}
        </fieldset>

        {/* Level 2 */}
        <fieldset>
          <legend>Level 2: Contact Information</legend>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={level2.age}
              onChange={(e) => setLevel2({ ...level2, age: e.target.value })}
              onBlur={validateLevel2}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              value={level2.phone}
              onChange={(e) => setLevel2({ ...level2, phone: e.target.value })}
              onBlur={validateLevel2}
            />
          </div>
          {!level2.isValid && <p style={{ color: "red" }}>Level 2 is incomplete or invalid.</p>}
        </fieldset>

        {/* Level 3 */}
        <fieldset>
          <legend>Level 3: Address Information</legend>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={level3.address}
              onChange={(e) => setLevel3({ ...level3, address: e.target.value })}
              onBlur={validateLevel3}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              value={level3.city}
              onChange={(e) => setLevel3({ ...level3, city: e.target.value })}
              onBlur={validateLevel3}
            />
          </div>
          {!level3.isValid && <p style={{ color: "red" }}>Level 3 is incomplete or invalid.</p>}
        </fieldset>

        {/* Submit Button */}
        <button type="submit" disabled={!isFormValid} style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiLevelForm;
