import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return isAuthenticated;
}

export default useAuth;
