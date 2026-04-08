import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Banner from "./components/Banner/Banner" 
import Champion from "./components/Champion/Champion" 
import Client from "./components/Client/Client" 
import OurProducts from "./components/Content/Content" 
import Futter from "./components/Futter/Futter" 
import Header from "./components/Header/Header" 
import Navbar from "./components/Navbar" 
import Subcribe from "./components/Subcribe/Subcribe"

import Login      from "./pages/Login";
import Register   from "./pages/Registration";
import VerifyOTP  from "./pages/VerifyOtp.jsx";

// Protected Route — token না থাকলে login এ পাঠাও
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

// Landing Page
const LandingPage = () => (
  <>
    <Header> 
      <Navbar/> 
      <Banner/> 
    </Header> 
    <OurProducts/> 
    <Champion/> 
    <Client/> 
    <Subcribe/> 
    <Futter/>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages */}
        <Route path="/login"      element={<Login />} />
        <Route path="/register"   element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        {/* Protected landing page */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;