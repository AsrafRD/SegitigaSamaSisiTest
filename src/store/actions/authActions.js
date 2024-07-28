import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../services/api';

export const login = createAsyncThunk('auth/login', async (userCredentials, { rejectWithValue }) => {
  try {
    const response = await fetchApi('/api/login', {
      method: 'POST',
      data: userCredentials,
    });
    const { access_token, data } = response;
    localStorage.setItem('token', access_token);
    localStorage.setItem('user', JSON.stringify(data));

    return { token: access_token, user: data };
  } catch (error) {
    return rejectWithValue(error.message || 'Login failed');
  }
});

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await fetchApi('/api/register', {
      method: 'POST',
      data: userData,
    });
    return response;
  } catch (error) {
    return rejectWithValue(error.message || 'Registration failed');
  }
});

export const fetchProfile = createAsyncThunk('auth/fetchProfile', async () => {
  const response = await fetchApi('/api/profile', {
    method: 'GET',
  });
  return response;
});


export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetchApi('/api/logout', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return response;
  } catch (error) {
    return rejectWithValue(error.message || 'Logout failed');
  }
});