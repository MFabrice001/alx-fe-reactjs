// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; 

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Use the useAuth hook to check authentication

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component if authenticated
}

export default ProtectedRoute;
