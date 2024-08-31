import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutTesla from './components/AboutTesla';
import Articles from './components/Articles';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (email, password) => {
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    } else {
      alert('Login gagal, periksa email dan password Anda.');
    }
  };

  const handleRegister = (email, password) => {
    // Logika pendaftaran sederhana (ini bisa disesuaikan dengan backend Anda)
    alert(`Registrasi berhasil untuk email: ${email}`);
    setCurrentPage('login');
  };

  return (
    <div className="App">
      <Header 
        onLoginClick={() => setCurrentPage('login')} 
        onRegisterClick={() => setCurrentPage('register')} 
      />
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <AboutTesla />
          <Articles />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
