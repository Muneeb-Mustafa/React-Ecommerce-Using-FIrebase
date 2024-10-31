import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Corrected import for named export
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard'; // Ensure this import is correct
import Login from './pages/Login';
import Register from './pages/Register';
import AccessDenied from './pages/AccessDenied'; // Corrected import for Access Denied page
import PrivateRoute from './components/PrivateRoute'; // Ensure this import is correct
import Homepage from './pages/Homepage'; 
import PageNotFound from './pages/PageNotFound'; // Import the PageNotFound component
import './App.scss';
import Footer from './components/Footer/Footer';
import About from './pages/About'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <> 
    <AuthProvider> 
      <CartProvider>
      <Router>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/seller-dashboard" element={<PrivateRoute element={<SellerDashboard />} />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<PageNotFound />} /> {/* Catch-all route for undefined paths */}
        </Routes>
        <Footer/>
      </Router>
      </CartProvider>
    </AuthProvider>
    <ToastContainer />
    </>
  );
};

export default App;
