import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import api from './api';
import App from './App';

const AppWrapper = () => {
  const { token, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (token) {
      setLoading(false);
    } else {
      setShowPopup(true);
    }
  }, [token]);

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { password }); // Change endpoint
      login(response.data.token);
      setShowPopup(false);
      setLoading(false);
    } catch (error) {
      alert('Login failed. Check password.');
    }
  };

  if (loading) {
    return (
      <div className="popup">
        {showPopup ? (
          <div>
            <h3>Enter System Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }

  return <App />;
};

export default AppWrapper;
