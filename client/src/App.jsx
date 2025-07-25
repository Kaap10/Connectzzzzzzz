import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import AnonymousPost from './pages/AnonymousPost';
import JobListing from './pages/JobListing';
import PostJob from './pages/PostJob';
import ResourceSharing from './pages/ResourceSharing';
import ResourceCategory from './pages/ResourceCategory';
import ResourceYear from './pages/ResourceYear';
import ResourceUpload from './pages/ResourceUpload';
import ResourceBrowse from './pages/ResourceBrowse';
import * as api from './services/api';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check for saved auth and fetch current user on component mount
  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      
      const savedAuth = localStorage.getItem('auth');
      if (savedAuth) {
        try {
          const { user, token } = JSON.parse(savedAuth);
          
          if (user && token) {
            // Fetch fresh user data to ensure we have the latest
            try {
              const currentUserData = await api.getCurrentUser();
              setCurrentUser(currentUserData);
              setIsLoggedIn(true);
              
              // Update localStorage with fresh data and ensure token is properly stored
              localStorage.setItem('auth', JSON.stringify({
                token, // Keep the existing token
                user: currentUserData
              }));
            } catch (error) {
              console.error('Error fetching current user:', error);
              // If the token is invalid or expired, log out
              if (error.response?.status === 401 || error.response?.status === 403) {
                console.log('Authentication token expired or invalid. Logging out.');
                handleLogout();
              }
            }
          }
        } catch (error) {
          console.error('Error parsing auth data:', error);
          localStorage.removeItem('auth');
        }
      }
      
      setIsLoading(false);
    };
    
    fetchCurrentUser();
  }, []);
  
  const handleLogin = (authData) => {
    setCurrentUser(authData.user);
    setIsLoggedIn(true);
    localStorage.setItem('auth', JSON.stringify(authData));
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('auth');
  };
  
  const handleUpdateProfile = (updatedUser) => {
    setCurrentUser(updatedUser);
    
    // Update localStorage
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        localStorage.setItem('auth', JSON.stringify({
          ...authData,
          user: updatedUser
        }));
      } catch (error) {
        console.error('Error updating stored profile:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/messages" /> : <Login onLogin={handleLogin} />} />
      <Route path="/register" element={isLoggedIn ? <Navigate to="/messages" /> : <Register onLogin={handleLogin} />} />
      <Route path="/messages" element={isLoggedIn ? <Messages isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />} />
      <Route path="/messages/:userId" element={isLoggedIn ? <Messages isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isLoggedIn ? <Profile isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} onUpdateProfile={handleUpdateProfile} /> : <Navigate to="/login" />} />
      <Route path="/anonymous-post" element={isLoggedIn ? <AnonymousPost isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />} />
      <Route path="/jobs" element={<JobListing isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />} />
      <Route path="/post-job" element={isLoggedIn ? <PostJob isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />} />
      
      {/* Resource Sharing Routes */}
      <Route path="/resources" element={<ResourceSharing isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />} />
      <Route path="/resources/browse" element={<ResourceBrowse isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />} />
      <Route path="/resources/upload" element={isLoggedIn ? <ResourceUpload isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} /> : <Navigate to="/login" />} />
      <Route path="/resources/category/:categoryName" element={<ResourceCategory isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />} />
      <Route path="/resources/category/:categoryName/year/:year" element={<ResourceYear isLoggedIn={isLoggedIn} onLogout={handleLogout} currentUser={currentUser} />} />
    </Routes>
  );
}

export default App;
