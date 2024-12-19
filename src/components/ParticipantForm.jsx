import React from 'react';

const ParticipantForm = ({ step }) => {
  return (
    <div className="form-container">
      {step === 1 && (
        <>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </>
      )}
      {step === 2 && (
        <>
          <label>Phone</label>
          <input type="tel" placeholder="Phone Number" />
          <label>City</label>
          <input type="text" placeholder="City" />
        </>
      )}
      {step === 3 && (
        <>
          <label>Tickets</label>
          <input type="number" placeholder="Number of Tickets" />
        </>
      )}
    </div>
  );
};

export default ParticipantForm;
