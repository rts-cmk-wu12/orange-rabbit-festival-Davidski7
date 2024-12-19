import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "../styles/event-signup.scss"; 

const EventSignup = () => {
  const [showBox, setShowBox] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (formData.firstName && formData.lastName && formData.email) {
      setParticipants([
        ...participants,
        { ...formData, id: Date.now() },
      ]);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setShowBox(true);
    }
  };

  const handleDelete = (id) => {
    setParticipants(participants.filter((participant) => participant.id !== id));
  };

  const handleGoToCompletePage = () => {
    navigate("/complete"); 
  };

  return (
    <div className="event-signup">
      <div className="signup-container">
        <div className="text-section">
         
        </div>

        <div className="form-section">
          <h2>Signup Form</h2>
          <form>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <button type="button" className="next-button" onClick={handleNext}>
              Add participant
            </button>
          </form>
        </div>

       
        {participants.length > 0 && (
          <div className="data-box">
            {participants.map((participant) => (
              <div key={participant.id} className="participant">
                <button
                  className="delete-icon"
                  onClick={() => handleDelete(participant.id)}
                >
                  🗑️
                </button>
                <p><strong>First Name:</strong> {participant.firstName}</p>
                <p><strong>Last Name:</strong> {participant.lastName}</p>
                <p><strong>Email:</strong> {participant.email}</p>
                <p><strong>Phone:</strong> {participant.phone}</p>
              </div>
            ))}
            
            <button 
              className="go-to-complete-page" 
              onClick={handleGoToCompletePage}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSignup;
