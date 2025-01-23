import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Inline CSS for the About Us page */}
      <style>
        {`
          .about-us-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 80px 20px;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            min-height: 100vh;
          }

          .about-content {
            max-width: 900px;
            text-align: center;
            background: #fff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            margin-top: -60px;
            z-index: 1;
          }

          .about-content h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
          }

          .about-content p {
            font-family: 'Arial', sans-serif;
            font-size: 1.2rem;
            line-height: 1.8;
            color: #555;
            padding: 0 20px;
            margin-top: 20px;
            font-weight: 400;
          }

          .highlight-text {
            color: #f39c12;
            font-weight: 600;
          }

          .about-content img {
            margin: 30px auto;
            max-width: 100%;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          }

          .about-btn {
            padding: 15px 30px;
            margin-top: 30px;
            background-color: #3498db;
            color: white;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 50px;
            font-size: 1.1rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .about-btn:hover {
            background-color: #2980b9;
            transform: scale(1.05);
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .about-content {
              padding: 30px;
              margin-top: 0;
            }

            .about-content h2 {
              font-size: 2rem;
            }

            .about-btn {
              font-size: 1rem;
              padding: 12px 25px;
            }
          }
        `}
      </style>

      {/* About Us Content */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are a team passionate about creating engaging and interactive quizzes for you. Our mission is to make learning
          fun and easy! Whether you're testing your knowledge or just looking for something interesting, our quizzes
          will challenge and entertain you in both <span className="highlight-text">Hindi</span> and <span className="highlight-text">English</span>.
        </p>

       
        
      </div>
    </div>
  );
}

export default AboutUs;
