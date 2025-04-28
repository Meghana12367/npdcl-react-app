import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import BillManagementPage from './pages/BillManagementPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bill-management" element={<BillManagementPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
