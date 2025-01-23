import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const savedUser = localStorage.getItem('user');
        console.log('Saved user from localStorage:', savedUser);  // Debugging line

        if (savedUser) {
            setUser(JSON.parse(savedUser));  // Parse and set the user data
        }
    }, []);

    if (!user) {
        return <div className="text-center mt-5" style={{ color: 'white', fontSize: '1.2rem' }}>Loading...</div>;  // Show loading message while data is being fetched
    }

    return (
        <div 
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',  // Full viewport height
                background: 'linear-gradient(135deg, #4b6cb7, #182848)', 
                fontFamily: 'Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column',  // Ensures content is centered vertically
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
                padding: '20px', // Ensure there's padding for better layout handling
            }}
        >
            <div 
                className="card shadow-lg p-4" 
                style={{
                    maxWidth: '450px', 
                    width: '100%', 
                    borderRadius: '20px', 
                    backgroundColor: '#fff', 
                    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)', 
                    color: '#333',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',  // Center the content horizontally in the card
                    textAlign: 'center',   // Center the text inside the card
                }}
            >
                <div className="mb-4">
                    <h2 style={{ color: '#4e73df' }}>Quiz App</h2>
                    <h3 className="text-primary">User Profile</h3>
                    <p style={{ fontSize: '1.1rem', color: '#777' }}>Manage your quiz app profile</p>
                </div>

                <div className="mb-3">
                    <h4><FaUser style={{ color: '#4e73df', marginRight: '10px' }} /> <strong>Name:</strong> {user.name}</h4>
                </div>
                <div className="mb-3">
                    <h4><FaEnvelope style={{ color: '#4e73df', marginRight: '10px' }} /> <strong>Email:</strong> {user.email}</h4>
                </div>
                <div className="mb-3">
                    <h4><FaPhone style={{ color: '#4e73df', marginRight: '10px' }} /> <strong>Phone:</strong> {user.phone}</h4>
                </div>
                <div className="mb-3">
                    <h4><FaMapMarkerAlt style={{ color: '#4e73df', marginRight: '10px' }} /> <strong>Pincode:</strong> {user.pincode}</h4>
                </div>
            </div>
        </div>
    );
};

export default Profile;
