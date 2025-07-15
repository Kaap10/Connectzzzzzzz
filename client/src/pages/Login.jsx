import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Layout from '../components/layout/Layout';
import * as api from '../services/api';
import { auth, provider } from '../services/firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Call login API
      const authData = await api.login(formData);
      onLogin(authData);
      navigate('/messages');
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(
        error.response?.data?.error || 
        'Invalid email or password. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setLoginError('');
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // You can store user info in Firestore here if needed
      onLogin({ user });
      navigate('/messages');
    } catch (error) {
      setLoginError('Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Login to GLB.Connect</h1>
          
          {loginError && (
            <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              error={errors.email}
              fullWidth
            />
            
            <Input
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={errors.password}
              fullWidth
            />
            
            <Button
              type="submit"
              fullWidth
              loading={isLoading}
              disabled={isLoading}
            >
              Log In
            </Button>
          </form>
          <div className="my-4 flex items-center justify-center">
            <span className="text-gray-400 text-xs">or</span>
          </div>
          <Button
            type="button"
            fullWidth
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.61l6.85-6.85C36.68 2.7 30.8 0 24 0 14.82 0 6.71 5.8 2.69 14.09l7.98 6.19C12.36 13.13 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.04l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.28c-1.04-3.13-1.04-6.5 0-9.63l-7.98-6.19C.7 16.2 0 19.03 0 22c0 2.97.7 5.8 1.96 8.54l8.71-6.26z"/><path fill="#EA4335" d="M24 44c6.48 0 11.92-2.14 15.89-5.82l-7.19-5.6c-2.01 1.35-4.59 2.15-8.7 2.15-6.26 0-11.64-3.63-13.33-8.73l-8.71 6.26C6.71 42.2 14.82 48 24 48z"/></g></svg>
              Sign in with Google
            </span>
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-primary hover:text-primary/80">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login; 