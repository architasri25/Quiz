import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3000/signup', values)
      .then((res) => {
        console.log("Response from server:", res.data);
        alert('User registered successfully');

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(values));

        console.log("User data saved to localStorage:", values);  // Debugging line

        // Redirect to Home page after signup
        navigate('/home');
      })
      .catch((err) => {
        console.error("Error during registration:", err.response ? err.response.data : err);
        alert('Error registering user: ' + (err.response ? err.response.data.error : err.message || 'Unknown error'));
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="input-label">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"
              className="input-field" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email"
              className="input-field" required onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="phone" className="input-label">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number"
              className="input-field" required maxLength="15" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="pincode" className="input-label">Pincode</label>
            <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode"
              className="input-field" required maxLength="6" onChange={handleChange} />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>

      <style>{`
        /* General container styles */
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-image: url('https://media.istockphoto.com/id/1204743637/photo/science-technology-concept-abstract-background.jpg?s=1024x1024&w=is&k=20&c=JfgwvkCYBLk_Ja2Gj2IcuxYAQW-saVw91fYHd_8iWpc='); /* Background image */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .signup-box {
          background-color: #ffffff;
          padding: 40px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          width: 100%;
          max-width: 450px;
        }

        .signup-title {
          font-size: 28px;
          color: #4caf50;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-label {
          font-weight: 600;
          color: #333;
          display: block;
          margin-bottom: 8px;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }

        .input-field:focus {
          border-color: #4caf50;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #4caf50;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        .submit-btn:active {
          background-color: #388e3c;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .signup-box {
            padding: 30px;
          }

          .signup-title {
            font-size: 26px;
          }

          .input-field {
            font-size: 14px;
          }

          .submit-btn {
            font-size: 16px;
            padding: 12px;
          }
        }

        @media (max-width: 600px) {
          .signup-box {
            padding: 20px;
          }

          .signup-title {
            font-size: 24px;
          }

          .input-field {
            font-size: 14px;
            padding: 12px;
          }

          .submit-btn {
            font-size: 16px;
            padding: 12px;
          }
        }

        /* Extra small screen styles */
        @media (max-width: 400px) {
          .signup-title {
            font-size: 20px;
          }

          .input-field {
            font-size: 16px;
            padding: 15px;
          }

          .submit-btn {
            font-size: 16px;
            padding: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default Signup;
