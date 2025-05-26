import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children, redirect = "/login"  }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};

export default ProtectedRoute;