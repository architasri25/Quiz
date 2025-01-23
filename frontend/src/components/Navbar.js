import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userName, setUserName] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve only userName from localStorage
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) setUserName(storedUserName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName'); // Remove only userName from localStorage
    setUserName(''); // Clear the userName from the state
    navigate('/login'); // Redirect to login page after logout
  };

  const linkStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '8px 12px',
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const navStyles = {
    backgroundColor: '#2980b9',
    padding: '12px 0',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: 0, // Ensures the navbar is at the top of the page
  };

  const welcomeStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold', // Make it bold
    textTransform: 'uppercase',
    color: 'white', // Ensure it's white for visibility against blue background
    marginRight: '15px', // Add some spacing between the username and logout button
  };

  const logoutButtonStyles = {
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '10px 20px',
    borderRadius: '20px',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={navStyles}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            Quiz App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav mx-auto"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0',
                listStyle: 'none', // Removes default bullets or points
                padding: '0', // Ensure no padding is added
              }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/home" style={linkStyles}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={linkStyles}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz" style={linkStyles}>
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile" style={linkStyles}>
                  Profile
                </Link>
              </li>
            </ul>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
              }}
            >
              {userName ? (
                <>
                  {/* Welcome message inside navbar */}
                  <span className="nav-link" style={welcomeStyle}>
                    Welcome, <span style={{ fontWeight: 'bold' }}> {userName} </span>
                  </span>

                  <button
                    className="nav-link"
                    style={{
                      ...logoutButtonStyles,
                      backgroundColor: isHovered ? '#c0392b' : 'none',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onClick={handleLogout}
                    onMouseEnter={() => setIsHovered(true)} // Hover effect
                    onMouseLeave={() => setIsHovered(false)} // Remove hover effect
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link className="nav-link" to="/signup" style={linkStyles}>
                  Login (Go to Signup)
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
