import React, { useState } from "react";

const MultiStepForm = () => {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    phone: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to move to the next step
  const nextStep = () => {
    // Example: Combine state updates (like validation and saving progress)
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  // Render form fields based on the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2>Step 1: Personal Information</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </>
        );
      case 2:
        return (
          <>
            <h2>Step 2: Additional Information</h2>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </>
        );
      case 3:
        return (
          <>
            <h2>Step 3: Contact Information</h2>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </>
        );
      default:
        return (
          <>
            <h2>Review Your Information</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </>
        );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div style={{ marginTop: "20px" }}>
          {currentStep > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep < 4 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 4 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
