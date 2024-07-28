import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../services/api';
import axios from 'axios';

export const fetchpermittion = createAsyncThunk('permittion/fetchpermittion', async () => {
  const response = await fetchApi('/api/permittion', {
    method: 'GET',
  });
  return response.data;
});

export const fetchPermittionById = createAsyncThunk(
  'permittion/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/permittion/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || 'Failed to fetch permittion');
    }
  }
);

export const buatIzin = createAsyncThunk('permittion/createpermittion', async (userData, { rejectWithValue }) => {
  try {
    const response = await fetchApi('/api/permittion', {
      method: 'POST',
      data: userData,
    });
    return response;
  } catch (error) {
    return rejectWithValue(error.message || 'Registration failed');
  }
});

export const createPermission = createAsyncThunk('permittion/createPermission', async (permissionData) => {
  const response = await fetchApi('/api/permittion', {
    method: 'POST',
    data: permissionData,
  });
  return response;
});

export const updatePermission = createAsyncThunk('permittion/updatePermission', async ({ id, permissionData }) => {
  const response = await fetchApi(`/api/permittion/${id}`, {
    method: 'PUT',
    data: permissionData,
  });
  return response;
});

export const deletePermission = createAsyncThunk('permittion/deletePermission', async (id) => {
  const response = await fetchApi(`/api/permittion/${id}`, {
    method: 'DELETE',
  });
  return response;
});

export const approvePermission = createAsyncThunk('permittion/approvePermission', async ({ verificatorId, userId, permissionId, comment, isAccepted }) => {
  const response = await fetchApi('/api/accept-permittion', {
    method: 'POST',
    data: { verificatorId, userId, permissionId, comment, isAccepted },
  });
  return response;
});
