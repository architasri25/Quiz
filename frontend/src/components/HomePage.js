import React from 'react';
import Navbar from './Navbar'; // Import Navbar component
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4 pt-4">
                {/* Hero Section */}
                <header className="hero-section text-center mb-4">
                    <h1 className="home-heading">Welcome to the Quiz App</h1>
                    <p className="lead home-lead">Test your knowledge in various fields.</p>
                    <Link to="/quiz" className="btn btn-dark btn-lg quiz-btn">Start Quiz</Link>
                </header>

                {/* About Section */}
                <section className="about-section py-0 mb-0">
                    <div className="container text-center">
                        <h2 className="about-heading">Why Take the Quiz?</h2>
                        <p className="about-description">
                            Our quiz is designed to challenge your mind with topics ranging from history to science. 
                            Whether you're a beginner or an expert, we have something for everyone.
                        </p>
                    </div>
                </section>

                {/* Quiz Section */}
                <section className="quiz-section text-center py-3 mb-0">
                    <div className="container">
                        <h2 className="quiz-heading">Ready to Test Your Knowledge?</h2>
                        <p className="quiz-description">Challenge yourself now and see how well you score!</p>
                        <Link to="/quiz" className="btn btn-primary btn-lg quiz-btn">Attempt Quiz</Link>
                    </div>
                </section>
            </div>

            {/* Inline CSS to style the page */}
            <style jsx="true">{`
                /* General Styles */
                .home-heading {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    margin-bottom: 15px;
                    line-height: 1.3;
                    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
                }

                .home-lead {
                    font-size: 1.3rem;
                    color: #fff;
                    line-height: 1.5;
                    margin-bottom: 30px;
                    font-weight: 400;
                }

                .quiz-btn {
                    padding: 12px 30px;
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    border-radius: 50px;
                    transition: all 0.3s ease;
                    background-color: #2980b9;
                    color: white;
                    border: 2px solid #2980b9;
                }

                .quiz-btn:hover {
                    background-color: #1c639e;
                    border-color: #1c639e;
                    transform: scale(1.05);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                }

                /* About Section */
                .about-heading {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 15px; /* Removed extra margin */
                }

                .about-description {
                    font-size: 1.1rem;
                    color: #7f8c8d;
                    line-height: 1.7;
                    max-width: 750px;
                    margin: 0 auto;
                    font-weight: 400;
                }

                /* Quiz Section */
                .quiz-heading {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 20px;
                }

                .quiz-description {
                    font-size: 1.1rem;
                    color: #7f8c8d;
                    margin-bottom: 30px;
                }

                /* Hero Section */
                .hero-section {
                    background: url('https://www.w3schools.com/w3images/forestbridge.jpg') center center no-repeat;
                    background-size: cover;
                    padding: 50px 0;  /* Reduced padding to remove extra space below */
                    color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                    position: relative;
                }

                .hero-section::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 10px;
                    z-index: -1;
                }

                /* About Section */
                .about-section {
                    background-color: #f1f1f1;
                    padding-top: 0;  /* Ensure no extra padding at the top */
                    padding-bottom: 0;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                /* Quiz Section */
                .quiz-section {
                    background-color: #ecf0f1;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                /* Navbar Adjustment */
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: #3498db;
                    padding: 1rem 2rem;
                }

                .container {
                    margin-top: 120px;
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .home-heading {
                        font-size: 2.5rem;
                    }

                    .home-lead {
                        font-size: 1.1rem;
                    }

                    .about-heading {
                        font-size: 2rem;
                    }

                    .quiz-heading {
                        font-size: 2rem;
                    }

                    .quiz-btn {
                        font-size: 1.1rem;
                    }

                    .about-description {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default HomePage;
