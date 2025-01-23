import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';  // Import Signup Component
import HomePage from './components/HomePage';  // Import HomePage Component
import AboutPage from './components/AboutUs';  // Import About Us Component
import QuizPage from './components/Quiz';  // Import Quiz Component
import ProfilePage from './components/Profile';  // Import Profile Component
import Navbar from './components/Navbar'; // Import Navbar Component

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup page route */}
        <Route path="/" element={<Signup />} /> {/* Show Signup page at the root path '/' */}

        {/* Home, About, Quiz, and Profile pages with Navbar */}
        <Route path="/home" element={<NavbarWithPage page={<HomePage />} />} />
        <Route path="/about" element={<NavbarWithPage page={<AboutPage />} />} />
        <Route path="/quiz" element={<NavbarWithPage page={<QuizPage />} />} />
        <Route path="/profile" element={<NavbarWithPage page={<ProfilePage />} />} />
      </Routes>
    </Router>
  );
}

// Wrapper component for pages that need Navbar
function NavbarWithPage({ page }) {
  return (
    <>
      <Navbar />
      {/* Inline style to remove the margin-top */}
      <div style={{ marginTop: '0', paddingTop: '0' }}>{page}</div>
    </>
  );
}

export default App;
