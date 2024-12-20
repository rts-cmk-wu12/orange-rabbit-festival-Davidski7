import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/event-signup.scss";

const EventSignup = () => {
    const [showBox, setShowBox] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
        birthday: "",
    });
    const [participants, setParticipants] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
      
        if (formData.firstName && formData.email && formData.birthday) {
            setParticipants([
                ...participants,
                { ...formData, id: Date.now() },
            ]);
            setFormData({ firstName: "", email: "", phone: "", birthday: "" });
            setShowBox(true);
        }
    };

    const handleDelete = (id) => {
        setParticipants(participants.filter((participant) => participant.id !== id));
    };

    const handleGoToCompletePage = () => {
        
        if (participants.length > 0) {
            navigate("/complete");
        }
    };

    return (
        <div className="event-signup">
            <div className="signup-container">
                <div className="text-section">

                </div>

                <div className="form-section">
                    <h3>Signup for the event</h3>
                    <h1>Orange Rabbit Festival 2023</h1>
                    <p>24 June 2025 - 1 July 2025 </p>
                    <p>Festivalsgaden 22, 2300, Roskilde</p>
                    <form>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
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
                        <input
                            type="date"
                            name="birthday"
                            placeholder="Enter your birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="next-button"
                            onClick={handleNext}
                            disabled={!formData.firstName || !formData.email || !formData.birthday}
                        >
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
                                <p><strong>Email:</strong> {participant.email}</p>
                                <p><strong>Phone:</strong> {participant.phone}</p>
                                <p><strong>Birthday:</strong> {participant.birthday}</p>
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
